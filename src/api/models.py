from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    user_name = db.Column(db.String(250), unique=True, nullable=False)
    name = db.Column(db.String(300), unique=False, nullable=False)
    favourites = db.relationship('Favourites', backref = 'User')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
           "id": self.id,
            "name": self.name,
            "email": self.email,
            #"user_name": self.user_name,
            #"favourites": self.favourites,
            # do not serialize the password, its a security breach
        }
 
class Favourites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(250), unique=True, nullable=False)
    id_series = db.Column(db.String(250), unique=True, nullable=False)
    id_sagas = db.Column(db.String(250), unique=True, nullable=False)
    id_peliculas = db.Column(db.String(250), unique=True, nullable=False)

class Studio(db.model):
    id = db.Column(db.Integer,primary_key=True)
    studio = db.Column(db.String(250), unique=True, nullable=False)

class Category(db.model):
    id = db.Column(db.Integer,primary_key=True)
    category = db.Column(db.String(250), unique=True, nullable=False)

class Cast(db.model):
    id = db.Column(db.Integer,primary_key=True)
    real_name = db.Column(db.String(250), unique=True, nullable=False)
    caracter = db.Column(db.String(250), unique=True, nullable=False)
    photo = db.Column(db.String(250), unique=True, nullable=False)

class Peliculas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), unique=True, nullable=False)
    description = db.Column(db.String(250), unique=True, nullable=False)
    category = db.Column(db.String(250), unique=True, nullable=False)
    date = db.Column(db.String(250), unique=True, nullable=False)
    valoration = db.Column(db.String(250), unique=True, nullable=False)
    cast = db.Column(db.String(250), unique=True, nullable=False)
    studio = db.Column(db.String(250), unique=True, nullable=False)
    duration = db.Column(db.Integer),

class Sagas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), unique=True, nullable=False)
    description = db.Column(db.String(250), unique=True, nullable=False)
    category = db.Column(db.String(250), unique=True, nullable=False)
    date = db.Column(db.String(250), unique=True, nullable=False)
    valoration = db.Column(db.String(250), unique=True, nullable=False)
    cast = db.Column(db.String(250), unique=True, nullable=False)
    studio = db.Column(db.String(250), unique=True, nullable=False)
    movies = db.Column(db.String(250), unique=True, nullable=False)

class Series(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), unique=True, nullable=False)
    description = db.Column(db.String(250), unique=True, nullable=False)
    category = db.Column(db.String(250), unique=True, nullable=False)
    date = db.Column(db.String(250), unique=True, nullable=False)
    valoration = db.Column(db.String(250), unique=True, nullable=False)
    cast = db.Column(db.String(250), unique=True, nullable=False)
    studio = db.Column(db.String(250), unique=True, nullable=False)
    ntemporadas = db.Column(db.Integer),
    nepisodios = db.Column(db.Integer),