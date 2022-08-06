"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Peliculas
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

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

    return jsonify({"token": access_token, "username": user.username}), 200

@api.route('/verify', methods=['GET'])
@jwt_required()
def get_verify():
    currentuser = get_jwt_identity()
    user = User.query.get(currentuser)
    if user : 
        return jsonify({"logeado" : True, "username" : user.username})
    else : 
        return jsonify({"logeado" : False, "mesage" : "Usuario no encontrado"})

@api.route('/peliculas', methods=['GET'])
def get_peliculas():
    pelicula = Peliculas.query.all()
    data = [pelicula.serialize() for peliculas in pelicula]
    
    return jsonify(data), 200