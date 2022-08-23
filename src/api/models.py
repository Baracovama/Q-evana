from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
# ----------------------------------------------------------------
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
# ----------------------------------------------------------------

class Peliculas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_api = db.Column(db.Integer)
    title = db.Column(db.String(500), unique=True, nullable=False)
    overview = db.Column(db.String(900))
    poster_path = db.Column(db.String(500))
    original_language = db.Column(db.String(15))
    vote_average = db.Column(db.Float)
    vote_count = db.Column(db.Integer)
    release_date = db.Column(db.DateTime)
    backdrop_path = db.Column(db.String(500))

    def __repr__(self):
        return f'<Pelicula {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_api": self.id_api,
            "title": self.title,
            "overview": self.overview,
            "poster_path": self.poster_path,
            "original_language": self.original_language,
            "vote_average": self.vote_average,
            "vote_count": self.vote_count,
            "release_date": self.release_date,
            "backdrop_path": self.backdrop_path,
            "generos": [generopeli.genero.serialize() for generopeli in self.genero_peli],
            # "genre_id": self.genre_id,
        }

class Genero(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_api = db.Column(db.Integer)
    name = db.Column(db.String(150), unique=True, nullable=False)

    def __repr__(self):
        return f'<Genero {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_api": self.id_api,
            "name": self.name,
            # do not serialize the password, its a security breach
        }

class GeneroPeli(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    genero_id = db.Column(db.Integer, db.ForeignKey('genero.id'), nullable=True)
    genero = db.relationship('Genero', backref="genero_peli")
    pelicula_id = db.Column(db.Integer, db.ForeignKey('peliculas.id'), nullable=True)
    pelicula = db.relationship('Peliculas', backref="genero_peli")

    def __repr__(self):
        return f'<GeneroPeli {self.genero.name}>'

    def serialize(self):
        return {
           
        }

class Favoritos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User' , backref="favoritos")
    pelicula_id = db.Column(db.Integer, db.ForeignKey('peliculas.id'), nullable=False)
    pelicula = db.relationship('Peliculas')
    
    def __repr__(self):
        return f'<Favoritos {self.id}>'

    def serialize(self):
        return {
            
        }
# ----------------------------------------------------------------



'''class Populares(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(500), unique=False, nullable=False)
    vote_average = db.Column(db.String(500))
    release_date = db.Column(db.String(500))
    poster_path = db.Column(db.String(500))
    original_language = db.Column(db.String(500))
    overview = db.Column(db.String(900))
    backdrop_path = db.Column(db.String(500))
    genre_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=True)
    genre = db.relationship('Category')
    
    def __repr__(self):
        return f'<Populares {self.title}>'

    def serialize(self):
        return {
            "title": self.title,
            "vote_average": self.vote_average,
            "release_date": self.release_date,
            "poster_path": self.poster_path,
            "backdrop_path": self.backdrop_path,
            "genre_id": self.genre_id,
            "original_language": self.original_language,
            "overview": self.overview,
        }
# ----------------------------------------------------------------
class Toprated(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(500), unique=False, nullable=False)
    vote_average = db.Column(db.String(500))
    release_date = db.Column(db.String(500))
    poster_path = db.Column(db.String(500))
    original_language = db.Column(db.String(500))
    overview = db.Column(db.String(900))
    backdrop_path = db.Column(db.String(500))
    genre_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=True)
    genre = db.relationship('Category')
    
    def __repr__(self):
         return f'<Toprated {self.title}>'

    def serialize(self):
         return {
            "title": self.title,
            "vote_average": self.vote_average,
            "release_date": self.release_date,
            "poster_path": self.poster_path,
            "backdrop_path": self.backdrop_path,
            "genre_id": self.genre_id,
            "original_language": self.original_language,
            "overview": self.overview,
        }
# ----------------------------------------------------------------
class Proximamente(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(500), unique=False, nullable=False)
    vote_average = db.Column(db.String(500))
    release_date = db.Column(db.String(500))
    poster_path = db.Column(db.String(500))
    original_language = db.Column(db.String(500))
    overview = db.Column(db.String(900))
    backdrop_path = db.Column(db.String(500))
    genre_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=True)
    genre = db.relationship('Category')

    def __repr__(self):
         return f'<Proximamente {self.title}>'

    def serialize(self):
         return {
            "title": self.title,
            "vote_average": self.vote_average,
            "release_date": self.release_date,
            "poster_path": self.poster_path,
            "backdrop_path": self.backdrop_path,
            "genre_id": self.genre_id,
            "original_language": self.original_language,
            "overview": self.overview,
         }
# ----------------------------------------------------------------

#           Realmente no sé si este codigo puede servir de algo para el buscador
#           Para facilitar el tema de filtracion y genere una busqueda en general


class Buscador(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    populares_id = db.Column(db.Integer, db.ForeignKey('populares.id'), nullable=False)
    populares = db.relationship('Populares')
    toprated_id = db.Column(db.Integer, db.ForeignKey('toprated.id'), nullable=False)
    toprated = db.relationship('Toprated')
    proximamente_id = db.Column(db.Integer, db.ForeignKey('proximamente.id'), nullable=False)
    proximamente = db.relationship('Proximamente')

    def __repr__(self):
        return f'<Populares {self.sagas_id}>'

    def serialize(self):
        return {
            "populares": self.populares_id,
            "toprated": self.toprated_id,
            "proximamente": self.proximamente_id,
        }
# ----------------------------------------------------------------
class Category(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(250), unique=True, nullable=False)

    def __repr__(self):
        return f'<name {self.name}>'

    def serialize(self):
        return {
            "name": self.name,
        }
# ----------------------------------------------------------------
# ----------------------------------------------------------------
# ----------------------------------------------------------------

# class Peliculas(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(250), unique=True, nullable=False)
#     description = db.Column(db.String(900), unique=True, nullable=False)
#     #date = db.Column(db.Datetime)
#     imagen = db.Column(db.String(250))
#     valoration = db.Column(db.String(250))
#     cast_imagen = db.Column(db.String(250))
#     studio_id = db.Column(db.String(250), nullable=True)
#     duration = db.Column(db.String(250), nullable=True)
#     category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=True)
#     category = db.relationship('Category')

#     def __repr__(self):
#         return f'<Peliculas {self.title}>'

#     def serialize(self):
#         return {
#             "title": self.title,
#             "description": self.description,
#             "category_id": self.category_id,
#             #"date": self.date,
#             "valoration": self.valoration,
#             "cast_imagen": self.cast_imagen,
#             "studio_id": self.studio_id,
#             "duration": self.duration,
#             "imagen": self.imagen,
#         }
# ----------------------------------------------------------------
# ----------------------------------------------------------------
# ----------------------------------------------------------------
'''