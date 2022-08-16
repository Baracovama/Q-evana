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
      <h1 className="text-danger">Pelis</h1>

      <div className="row flex-row flex-nowrap overflow-auto">
        {" "}
        {/*usamos esto para crear lo de la barra horizontal */}
        {store.pelis.map((item, index) => {
          return (
            <Cards
              key={index}
              title={item.title}
              description1={"Valoracion: "}
              result1={item.vote_average}
              description2={"Fecha de lanzamiento: "}
              result2={item.release_date}
              description3={"imagen"}
              result3={item.poster_path}
              index={status_code}
              path={"poster_path"}
              img={`https://api.themoviedb.org/3/movie/766507/images?api_key=4420fdc66e8fbaa810cbb4c5a36fb67c/${status_code}.jpg`}
            />
          );
        })}
      </div>
    </div>
  );
};
