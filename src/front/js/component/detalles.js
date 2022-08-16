import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.detail(params.item, params.id);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 text-center">
          <img
            className="img img-fluid"
            src={
              "http://api.themoviedb.org/3/movie/popular?api_key=4420fdc66e8fbaa810cbb4c5a36fb67c&language=es&page="
            }
          />
        </div>
        <div className="col-12 col-md-6 text-center">
          <h1 className=" h1">{store.detail.name}</h1>
          <p className="text-danger">{store.detail.overview}</p>
        </div>
      </div>

      <div className="row my-4 border-top border-danger border-2 mx-2 text-center">
        <div className="col-4 col-md-2 mt-3">
          <p className="fw-bold text-danger">Titulo Original</p>
          <p className="text-danger">{store.detail.original_title}</p>
        </div>
        <div className="col-4 col-md-2 mt-3">
          <p className="fw-bold text-danger">Fecha de lanzamiento</p>
          <p className="text-danger">{store.detail.release_date}</p>
        </div>
        <div className="col-4 col-md-2 mt-3">
          <p className="fw-bold text-danger">Cuenta de votos</p>
          <p className="text-danger">{store.detail.vote_count}</p>
        </div>
        <div className="col-4 col-md-2 mt-3">
          <p className="fw-bold text-danger">Lenguaje de Origen</p>
          <p className="text-danger">{store.detail.original_language}</p>
        </div>
        <div className="col-4 col-md-2 mt-3">
          <p className="fw-bold text-danger">Popularidad</p>
          <p className="text-danger">{store.detail.popularity}</p>
        </div>
      </div>
    </div>
  );
};
