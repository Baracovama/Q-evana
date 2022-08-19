"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Peliculas, Sagas, Category, Sagapeli, Favorites_Peliculas
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
import requests

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    res = requests.get('https://api.themoviedb.org/3/movie/popular?api_key=4420fdc66e8fbaa810cbb4c5a36fb67c&language=es&page=1').json()
    # dict(res)
    # print(res["results"]) 
    for pelicula in res["results"]:
        print(pelicula["title"])
        peli = Peliculas(title=pelicula["title"],description=pelicula["overview"],category_id=0, valoration=pelicula["vote_average"],cast_imagen="",studio_id=0,duration=0, imagen=pelicula["poster_path"])
        db.session.add(peli)
        db.session.commit()

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    data = [user.serialize() for user in users]
    
    return jsonify(data), 200


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

@api.route('/login', methods=['POST'])
def login():
    data = request.json
    print(data)

    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if not user:
        return jsonify({"message": "incorrect email or password"}), 400
    access_token = create_access_token(identity=user.id)

    return jsonify({"token": access_token, "username": user.username, "id_user": user.id}), 200

@api.route('/verify', methods=['GET'])
@jwt_required()
def get_verify():
    currentuser = get_jwt_identity()
    user = User.query.get(currentuser)
    if user : 
        return jsonify({"logeado" : True, "username" : user.username}), 200
    else : 
        return jsonify({"logeado" : False, "mesage" : "Usuario no encontrado"}), 404

@api.route('/peliculas', methods=['GET'])
def get_peliculas():
    pelicula = Peliculas.query.all()
    data = [pelicula.serialize() for pelicula in pelicula]
    
    return jsonify(data), 200

@api.route('/sagas', methods=['GET'])
def get_sagas():
    saga = Sagas.query.all()
    data = [saga.serialize() for saga in saga]
    
    return jsonify(data), 200

@api.route('/category', methods=['GET'])
def get_category():
    categoria = Category.query.all()
    data = [categoria.serialize() for categoria in categoria]
    
    return jsonify(data), 200

@api.route('/sagapeli', methods=['GET'])
def get_sagapeli():
    sagapeliculas = Sagapeli.query.all()
    data = [sagapeliculas.serialize() for sagapeliculas in sagapeliculas]
    
    return jsonify(data), 200

@api.route('/allpelis', methods=['POST', 'GET'])
def get_all_movies():

    allpelis = Peliculas.query.all()
    allList = list(map(lambda peli: peli.serialize(),allpelis))

    response_body = {
        "results": allList
    }

    return jsonify(response_body), 200

@api.route('/addPelisFav', methods=['POST'])
def create_fav():
    data = request.json
    listFav = Favorites_Peliculas(user_id=data.get('user_id'),pelicula_id=data.get('pelicula_id'))
    if not listFav:
        return jsonify({"message": "Aun no se a añadido ninguna pelicula"}), 400
        db.session.add(listFav)
        db.session.commit()
    return jsonify({"msg": "Se añadio correctmente"}), 200

@api.route('/favoritos', methods=['GET'])
def get_favoritos():
    data = request.args
    favoritos = Favorites_Peliculas.query.filter_by(user_id=data.get('user_id'))
   # user = User.query.filter_by(email=data['email'], password=data['password']).first()
    data = [favoritos.serialize() for favoritos in favoritos]
    return jsonify(data), 200