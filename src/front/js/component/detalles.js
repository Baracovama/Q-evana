import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


export const Detail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.details(params.item, params.id);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 text-center">
          <img
            className="img img-fluid"
            src= {`https://starwars-visualguide.com/assets/img/${params.item == "people" ? "characters" : "planets"}/${params.id}.jpg`}
          ></img>
        </div>
        <div className="col-12 col-md-6 text-center">
          <h1 className=" h1">{store.detail.name}</h1>
          <p>
            descripcion
          </p>
        </div>
      </div>

      {params.item === "people" ? (
        <div className="row my-4 border-top border-danger border-2 mx-2 text-center">
          <div className="col-4 col-md-2 mt-3">
            <p className="fw-bold text-danger">Height</p>
            <p className="text-danger">{store.detail.height}</p>
          </div>
          <div className="col-4 col-md-2 mt-3">
            <p className="fw-bold text-danger">Mass</p>
            <p className="text-danger">{store.detail.mass}</p>
          </div>
          <div className="col-4 col-md-2 mt-3">
            <p className="fw-bold text-danger">Hair color</p>
            <p className="text-danger">{store.detail.hair_color}</p>
          </div>
          <div className="col-4 col-md-2 mt-3">
            <p className="fw-bold text-danger">Skin color</p>
            <p className="text-danger">{store.detail.skin_color}</p>
          </div>
          <div className="col-4 col-md-2 mt-3">
            <p className="fw-bold text-danger">Eye color</p>
            <p className="text-danger">{store.detail.eye_color}</p>
          </div>
          <div className="col-4 col-md-2 mt-3">
            <p className="fw-bold text-danger">Birth year</p>
            <p className="text-danger">{store.detail.birth_year}</p>
          </div>
        </div>
      ) : (
        <div className="row my-4 border-top border-danger border-2 mx-2 text-center">
          <div className="col-4 col-md-2 mt-3">
            <p className="fw-bold text-danger">Diameter</p>
            <p className="text-danger">{store.detail.diameter}</p>
          </div>
          <div className="col-4 col-md-2 mt-3">
            <p className="fw-bold text-danger">Rotation period</p>
            <p className="text-danger">{store.detail.rotation_period}</p>
          </div>
          <div className="col-4 col-md-2 mt-3">
            <p className="fw-bold text-danger">Gravity</p>
            <p className="text-danger">{store.detail.gravity}</p>
          </div>
          <div className="col-4 col-md-2 mt-3">
            <p className="fw-bold text-danger">Climate</p>
            <p className="text-danger">{store.detail.climate}</p>
          </div>
          <div className="col-4 col-md-2 mt-3">
            <p className="fw-bold text-danger">Population</p>
            <p className="text-danger">{store.detail.population}</p>
          </div>
          <div className="col-4 col-md-2 mt-3">
            <p className="fw-bold text-danger">Orbital period</p>
            <p className="text-danger">{store.detail.orbital_period}</p>
          </div>
        </div>
      )}
    </div>
  );
};
