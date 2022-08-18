import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "./cards";

export const Cardlistpelis = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.listpelis();
  }, []);

  return (
    <div className=" container mb-5  ">
      <h1 className="text-white">Populares</h1>
      <div className="row flex-row flex-nowrap overflow-auto">
        {store.pelis.map((item, index) => {
          return (
            <Cards
              key={index}
              title={item.title}
              id={item.id}
              description1={"Valoracion: "}
              result1={item.vote_average}
              description2={"Fecha de lanzamiento: "}
              result2={item.release_date}
              path={"poster_path"}
              img={"https://image.tmdb.org/t/p/w500" + item.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};
