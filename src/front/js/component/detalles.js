import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Detalles = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.detalles(params.item, params.id);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 text-center">
          <img
            className="img img-fluid"
            src={`https://starwars-visualguide.com/assets/img/${
              params.item == "people" ? "characters" : "planets"
            }/${params.id}.jpg`}
          ></img>
        </div>
        <div className="col-12 col-md-6 text-center">
          <h1 className=" h1">{store.detail.name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            massa in velit consectetur fringilla. Fusce convallis nulla vel
            felis gravida, ornare viverra leo placerat. Nullam congue
            pellentesque hendrerit. Vestibulum libero diam, iaculis et nisl non,
            posuere rutrum justo. Nam rhoncus dapibus odio ac laoreet. Mauris ut
            tortor ex. Integer dui augue, sodales in fringilla et, euismod vel
            ante. Sed ultrices turpis vitae tortor elementum, ac euismod dui
            vestibulum. Aenean at convallis tortor, id pretium enim. Ut
            tincidunt sollicitudin suscipit. Aenean efficitur bibendum tellus,
            eget iaculis lacus fermentum finibus. Duis maximus ligula in nunc
            accumsan, nec efficitur neque tincidunt. Phasellus viverra ipsum
            lobortis rhoncus tempor. Pellentesque ultrices turpis ut varius
            ornare. Sed purus elit, cursus fermentum placerat ut, efficitur id
            eros. Nullam semper sapien augue, ac sodales dolor laoreet eget.
            Nunc imperdiet, mauris at tincidunt pellentesque, quam lectus
            efficitur felis, in luctus diam augue quis libero. Vestibulum a
            mauris vestibulum, consectetur libero vitae, aliquet magna. Aenean
            lacinia, orci id auctor vulputate, leo nunc suscipit sapien, varius
            tempus eros tellus suscipit augue. Morbi vestibulum eleifend mi vel
            condimentum. Nam condimentum feugiat volutpat. Etiam dapibus, purus
            tincidunt aliquet laoreet, augue arcu dapibus erat, id porttitor
            nunc lectus quis est. Duis at risus.
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
