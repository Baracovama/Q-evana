"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Genero, Peliculas, GeneroPeli, Favoritos
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
import requests
from sqlalchemy import desc


api = Blueprint('api', __name__)
@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    data = [user.serialize() for user in users]
    
    return jsonify(data), 200
# ----------------------------------------------------------------
@api.route('/user', methods=['POST'])
def create_user():
    data = request.json
    user = User(username=data.get('username'),name=data.get('name'), email=data.get('email'), password=data.get('password'))
    if not user:
        return jsonify({"message": "incorrect email or password"}), 400
    access_token = create_access_token(identity=user.id)
    db.session.add(user)
    db.session.commit()
    return jsonify({"token": access_token, "username": user.username}), 200
# ----------------------------------------------------------------
@api.route('/login', methods=['POST'])
def login():
    data = request.json

    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if not user:
        return jsonify({"message": "incorrect email or password"}), 400
    access_token = create_access_token(identity=user.id)

    return jsonify({"token": access_token, "username": user.username, "id_user": user.id, "user": user.serialize()}), 200
# ----------------------------------------------------------------
@api.route('/verify', methods=['GET'])
@jwt_required()
def get_verify():
    currentuser = get_jwt_identity()
    user = User.query.get(currentuser)
    if user : 
        return jsonify({"logeado" : True, "username" : user.username, "user" : user.serialize()}), 200
    else : 
        return jsonify({"logeado" : False, "mesage" : "Usuario no encontrado"}), 404
# ----------------------------------------------------------------
# ----------------------------------------------------------------
# ----------------------------------------------------------------

@api.route('/generate_peliculas', methods=['POST', 'GET'])
def handle_populares():
    for page in [1, 2, 3, 4, 5]:
        res = requests.get(f'https://api.themoviedb.org/3/discover/movie?api_key=4420fdc66e8fbaa810cbb4c5a36fb67c&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page={page}&with_watch_monetization_types=flatrate').json()
        for peli in res["results"]:
            pelicula = Peliculas( id_api=peli["id"],title=peli["title"],overview=peli["overview"], vote_average=peli["vote_average"],vote_count=peli["vote_count"],release_date=peli["release_date"],backdrop_path=peli["backdrop_path"],poster_path=peli["poster_path"],original_language=peli["original_language"])
            db.session.add(pelicula)
            db.session.commit()
            for generid in peli["genre_ids"]:
                genero= Genero.query.filter_by(id_api=generid).first()
                generoPeli= GeneroPeli(pelicula_id=pelicula.id, genero_id=genero.id)
                db.session.add(generoPeli)
                db.session.commit()

    return jsonify("creado"), 200
# ----------------------------------------------------------------
@api.route('/generete_category', methods=['GET'])
def handle_category():

    res = requests.get('https://api.themoviedb.org/3/genre/movie/list?api_key=4420fdc66e8fbaa810cbb4c5a36fb67c&language=es').json()
    for genre in res["genres"]:
        categorias = Genero(name=genre["name"], id_api=genre["id"])
        db.session.add(categorias)
        db.session.commit()

    return jsonify("creado"), 200

# ----------------------------------------------------------------
@api.route('/peliculas/top', methods=['GET'])
@jwt_required(optional=True)
def get_toppelis():
    peliculas = Peliculas.query.order_by(desc(Peliculas.vote_average)).limit(10).all()
    data = [pelicula.serialize() for pelicula in peliculas]
    user_id = get_jwt_identity()
    if user_id:
        favoritos = Favoritos.query.filter_by(user_id=user_id)
        favoritos = [pelicula.pelicula_id for pelicula in favoritos]
        for pelicula in data:
            pelicula["is_favorite"] = True if pelicula.get("id") in favoritos else False
    return jsonify(data), 200

# ----------------------------------------------------------------
@api.route('/peliculas/novedades', methods=['GET'])
@jwt_required(optional=True)
def get_novedadespelis():
    peliculas = Peliculas.query.order_by(desc(Peliculas.release_date)).limit(10).all()
    data = [pelicula.serialize() for pelicula in peliculas]
    user_id = get_jwt_identity()
    print(user_id)
    if user_id:
        favoritos = Favoritos.query.filter_by(user_id=user_id)
        favoritos = [pelicula.pelicula_id for pelicula in favoritos]
        for pelicula in data:
            pelicula["is_favorite"] = True if pelicula.get("id") in favoritos else False
    return jsonify(data), 200

# ----------------------------------------------------------------

@api.route('/peliculas/genero/<id>', methods=['GET'])
@jwt_required(optional=True)
def get_generopelis(id):

    genero= Genero.query.filter_by(id=id).first()
    if not genero:
        return jsonify("no existe el genero"), 400
    generosPeli = GeneroPeli.query.filter_by(genero_id= genero.id).limit(10)
    data = [generoPeli.pelicula.serialize() for generoPeli in generosPeli]
    user_id = get_jwt_identity()
    if user_id:
        favoritos = Favoritos.query.filter_by(user_id=user_id)
        favoritos = [pelicula.pelicula_id for pelicula in favoritos]
        for pelicula in data:
            pelicula["is_favorite"] = True if pelicula.get("id") in favoritos else False
    return jsonify(data), 200
# ----------------------------------------------------------------

@api.route('/peliculas/generos', methods=['GET'])
def get_generos():

    generos=Genero.query.all()
    data= [genero.serialize() for genero in generos]
    return jsonify(data), 200
# ----------------------------------------------------------------
# ----------------------------------------------------------------
# ----------------------------------------------------------------
@api.route('/addPelisFav', methods=['POST'])
@jwt_required()
def create_fav():
    user_id = get_jwt_identity()
    data = request.json
    if not data.get("pelicula_id"):
        return jsonify({"message": "Aun no se a añadido ninguna pelicula"}), 400
    is_favorite= Favoritos.query.filter_by(user_id=user_id, pelicula_id=data.get("pelicula_id")).first()
    if not is_favorite:
        listFav = Favoritos(user_id=user_id, pelicula_id=data.get("pelicula_id"))
        db.session.add(listFav)
        db.session.commit()
    return jsonify({"msg": "Se añadio correctmente"}), 200
# ----------------------------------------------------------------
@api.route('/favoritos', methods=['GET'])
@jwt_required()
def get_favoritos():
    user_id = get_jwt_identity()
    favoritos = Favoritos.query.filter_by(user_id=user_id)
    data = [favoritos.pelicula.serialize() for favoritos in favoritos]
    return jsonify(data), 200
# ----------------------------------------------------------------
@api.route('/pelicula/<id>', methods=['GET'])
def get_peliculas_by_id(id):
    pelicula = Peliculas.query.filter_by(id=id).first()
    if not pelicula:
        return jsonify("error"), 400
    return jsonify(pelicula.serialize()), 200

# ----------------------------------------------------------------
@api.route('/cambiouser', methods=['PUT'])
@jwt_required()
def put_cambiouser():
    user_id = get_jwt_identity()
    data = request.json
    user = User.query.get(user_id)   
    user.name = data.get("name")
    user.username = data.get("username")
    user.email = data.get("email")
    user.password = data.get("password")

    db.session.commit()

    return jsonify({"message": "user_profile updated"}), 200
