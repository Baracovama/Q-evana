import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "./cards";

export const Accioncards = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.accion();
  }, []);

  return (
    <div className=" container mb-5  ">
      <h1 className="text-danger">Accion</h1>

      <div className="row flex-row flex-nowrap overflow-auto">
        {" "}
        {/*usamos esto para crear lo de la barra horizontal */}
        {store.accion.map((item, index) => {
          return (
            <Cards
              key={index}
              title={item.name}
              valoration={"Valoracion: "}
              valoration1={item.valoracion}
              date={"Fecha de Lanzamiento: "}
              date1={item.datelaunch}
              category={"Categoria: "}
              category1={item.categoria}
              index={index + 1}
              path={"Accion"}
              img={`aqui va el link de las imagenes ${index + 1}.jpg`}
            />
          );
        })}
      </div>
    </div>
  );
};
