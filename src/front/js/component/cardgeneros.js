import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cardgeneros.css";
import { Link } from "react-router-dom";

export const CardGeneros = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.generoslist();
  }, []);

  return (
    <div className=" container mb-5  ">
      <h1 className="text-white">Generos</h1>
      <div className="row flex-row flex-nowrap overflow-auto">
        {store.generos.map((item, index) => {
          return (
            <div className="card-generos  m-2" style={{ width: "20rem" }}>
              <Link to={`/peliculas/genero/${item.id}`}>
                <h2>{item.name}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
