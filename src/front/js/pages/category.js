import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Category = () => {
  const params = useParams();
  const [category, setCategory] = useState();

  useEffect(() => {
    fetch(`${process.env.BACKENT_URL}/api/peliculas/genero/${params.id}`)
      // fetch(process.env.BACKENT_URL + '/api/peliculas/genero/' + params.id)
      // fetch("https://3001-baracovama-qevana-dhuxnayd1wj.ws-eu62.gitpod.io/api/peliculas/genero/3")
      .then((data) => data.json())
      .then((data) => setCategory(data));
  }, []);

  return category ? (
    <div className="container">
      <div className="row">
        <div className="card col-12">
          <img
            src={generoPeli.poster_path}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{generoPeli.title}</h5>
            <p className="card-text">{generoPeli.release_date}</p>
            <p className="card-text">{generoPeli.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1 className="display-4">Cargando Categoria ...</h1>
  );
};
