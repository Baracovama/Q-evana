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
class Favorites_Peliculas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User')
    populares_id = db.Column(db.Integer, db.ForeignKey('populares.id'), nullable=False)
    populares = db.relationship('Populares')
    toprated_id = db.Column(db.Integer, db.ForeignKey('toprated.id'), nullable=False)
    toprated = db.relationship('Toprated')
    proximamente_id = db.Column(db.Integer, db.ForeignKey('proximamente.id'), nullable=False)
    proximamente = db.relationship('Proximamente')
    
    def __repr__(self):
        return f'<Favorites_populares {self.user_id}>'

    def serialize(self):
        return {
            "user_id": self.user_id,
             "populares_id": self.populares_id,
             "toprated_id": self.toprated_id,
             "proximamente_id": self.proximamente_id,
        }
# ----------------------------------------------------------------
class Populares(db.Model):
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
