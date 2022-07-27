from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    username = db.Column(db.String(250), unique=True, nullable=False)
    name = db.Column(db.String(300), unique=False, nullable=False)

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
 
class Favourites_Sagas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User')
    saga_id = db.Column(db.Integer)
    
    def __repr__(self):
        return f'<Favourites_sagas {self.user_id}>'

    
    def serialize(self):
        return {
            "user_id": self.user_id,
            "saga_id": self.saga_id,
        }

class Favourites_Peliculas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User')
    pelicula_id = db.Column(db.Integer)
    
    def __repr__(self):
        return f'<Favourites_peliculas {self.user_id}>'

    def serialize(self):
        return {
            "user_id": self.user_id,
            "pelicula_id": self.pelicula_id,
        }

class Sagas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    saga_peli_id = db.Column(db.Integer, db.ForeignKey('sagapeli.id'), nullable=False)
    
    def __repr__(self):
        return f'<Sagas {self.saga_peli_id}>'

    def serialize(self):
        return {
            "saga_peli_id": self.saga_peli_id,
        }

class Sagapeli(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250), unique=True, nullable=False)
    description = db.Column(db.String(250), unique=True, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    category = db.relationship('Category')
    #date = db.Column(db.Datetime)
    valoration = db.Column(db.Integer)
    cast_id = db.Column(db.Integer)
    studio_id = db.Column(db.Integer)
    duration = db.Column(db.Integer)

    def __repr__(self):
        return f'<Sagapeli {self.title}>'

    def serialize(self):
        return {
            "title": self.title,
            "description": self.description,
            "category_id": self.category_id,
            #"date": self.date,
            "valoration": self.valoration,
            "cast_id": self.cast_id,
            "studio_id": self.studio_id,
            "duration": self.duration,
        }

class Peliculas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    saga_peli_id = db.Column(db.Integer, db.ForeignKey('sagapeli.id'), nullable=False)
    
    def __repr__(self):
        return f'<Peliculas {self.saga_peli_id}>'

    def serialize(self):
        return {
            "saga_peli_id": self.saga_peli_id,
        }

class Category(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(250), unique=True, nullable=False)

    def __repr__(self):
        return f'<name {self.name}>'

    def serialize(self):
        return {
            "name": self.name,
        }