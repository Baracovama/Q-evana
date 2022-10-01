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
            "release_date": f"{self.release_date.day}/{self.release_date.month}/{self.release_date.year}",
            "backdrop_path": self.backdrop_path,
            "generos": [generopeli.genero.serialize() for generopeli in self.genero_peli],
            # "genre_id": self.genre_id,
        }

# ----------------------------------------------------------------

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

# ----------------------------------------------------------------

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

# ----------------------------------------------------------------

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

class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User' , backref="comments")
    pelicula_id = db.Column(db.Integer, db.ForeignKey('peliculas.id'), nullable=True)
    pelicula = db.relationship('Peliculas', backref="comments")
    text = db.Column(db.Text, nullable=False)

    def serialize(self):
        return {
            'username': self.user.username,
            'user_id':self.user.id,
            'text':self.text
        }

# ----------------------------------------------------------------