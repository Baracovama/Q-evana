from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    username = db.Column(db.String(250), unique=True, nullable=False)
    name = db.Column(db.String(300), unique=False, nullable=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
           "id": self.id,
            "name": self.name,
            "email": self.email,
            "username": self.username,
            # do not serialize the password, its a security breach
        }
 
class Favorites_Sagas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User')
    saga_id = db.Column(db.Integer, db.ForeignKey('sagas.id'), nullable=False)
    sagas = db.relationship('Sagas')

    
    def __repr__(self):
        return f'<Favorites_sagas {self.user_id}>'

    
    def serialize(self):
        return {
            "user_id": self.user_id,
            "saga_id": self.saga_id,
        }

class Favorites_Peliculas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User')
    pelicula_id = db.Column(db.Integer, db.ForeignKey('peliculas.id'), nullable=False)
    peliculas = db.relationship('Peliculas')
    
    def __repr__(self):
        return f'<Favorites_peliculas {self.user_id}>'

    def serialize(self):
        return {
            "user_id": self.user_id,
            "pelicula_id": self.pelicula_id,
        }

class Sagas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), unique=True, nullable=False)
    
    def __repr__(self):
        return f'<Sagas {self.title}>'

    def serialize(self):
        return {
            "title": self.title,
        }

class Sagapeli(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sagas_id = db.Column(db.Integer, db.ForeignKey('sagas.id'), nullable=False)
    sagas = db.relationship('Sagas')
    peliculas_id = db.Column(db.Integer, db.ForeignKey('peliculas.id'), nullable=False)
    peliculas = db.relationship('Peliculas')

    def __repr__(self):
        return f'<Sagapeli {self.sagas_id}>'
        #return f'<Sagapeli {self.peliculas_id}>'

    def serialize(self):
        return {
            "sagas_id": self.sagas_id,
            "peliculas_id": self.peliculas_id,
        }


class Peliculas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(600), unique=True, nullable=False)
    description = db.Column(db.String(250), unique=True, nullable=False)
    #date = db.Column(db.Datetime)
    imagen = db.Column(db.String(250))
    valoration = db.Column(db.String(250))
    cast_imagen = db.Column(db.String(250))
    studio_id = db.Column(db.String(250), nullable=True)
    duration = db.Column(db.String(250), nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=True)
    category = db.relationship('Category')

    def __repr__(self):
        return f'<Peliculas {self.title}>'

    def serialize(self):
        return {
            "title": self.title,
            "description": self.description,
            "category_id": self.category_id,
            #"date": self.date,
            "valoration": self.valoration,
            "cast_imagen": self.cast_imagen,
            "studio_id": self.studio_id,
            "duration": self.duration,
            "imagen": self.imagen,
        }
    
    '''def __repr__(self):
        return f'<Peliculas {self.saga_peli_id}>'

    def serialize(self):
        return {
            "saga_peli_id": self.saga_peli_id,
        }'''

class Category(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(250), unique=True, nullable=False)

    def __repr__(self):
        return f'<name {self.name}>'

    def serialize(self):
        return {
            "name": self.name,
        }