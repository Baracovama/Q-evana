import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "./cards";

export const CardFavs = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.favPelis();
  }, []);

  return (
    <div className=" container mb-5  ">
      <h1 className="text-white">Mi lista</h1>
      <div className="row flex-row flex-nowrap overflow-auto">
        {store.favList.map((item, index) => {
          return (
            <Cards
              key={1}
              title={item.peliculas_id}
              description1={"Valoracion: "}
              result1={2}
              description2={"Fecha de lanzamiento: "}
              result2={""}
              path={""}
              img={""}
            />
          );
        })}
      </div>
    </div>
  );
};