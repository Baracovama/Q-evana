import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cards.css";
import { Cards } from "../component/cards";

export const Category = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.pagenre(params.id);
  }, []);

  return (
    <>
      <div className="container mb-1 ">
        <div className="row">
          {store.genrepage.length > 0 ? (
            store.genrepage.map((item, index) => {
              <h1 className="text-white">Categoria</h1>;
              return (
                <Cards
                  key={index}
                  id={item.id}
                  title={item.title}
                  is_favorite={item.is_favorite}
                  description1={"Valoracion: "}
                  result1={item.vote_average}
                  description2={"Fecha de lanzamiento: "}
                  result2={item.release_date}
                  path={"poster_path"}
                  img={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                />
              );
            })
          ) : (
            <section className="area">
              <div className="ball"></div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};
