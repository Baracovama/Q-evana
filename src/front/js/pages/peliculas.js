import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Details from "../component/details";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

const Peliculas = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.pelicula(params.item, params.id);
  }, []);

  return (
    <div className="col-4 col-md-2 mt-3">
      <p className="fw-bold text-danger">Fecha de lanzamiento</p>
      <p className="text-danger">{props.title}</p>
    </div>
  );
};

export default Peliculas;

Peliculas.propTypes = {
  title: propTypes.string,
  description1: propTypes.string,
  result1: propTypes.number,
  description2: propTypes.string,
  result2: propTypes.string,
  path: propTypes.string,
  index: propTypes.number,
  img: propTypes.string,
  id: propTypes.number,
};
