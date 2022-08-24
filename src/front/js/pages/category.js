import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Category = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.pagenre(params.id);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {store.genrepage.length > 0 ? (
            store.genrepage.map((item, index) => {
              return (
                <div className="card col-12" key={index}>
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.release_date}</p>
                    <p className="card-text">{item.vote_average}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h1> Cargando ... </h1>
          )}
        </div>
      </div>
    </>
  );
};
