import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cards.css";

export const Peliculas = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.details(params.id);
  }, []);

  return (
    <>
      <div className="container mb-5 ">
        <div className="row g-0">
          {store.peliculon.length > 0 ? (
            store.peliculon.map((item, index) => {
              return (
                <div
                  className="card-pelis m-1 mb-3"
                  style="max-width: 540px;"
                  key={index}
                >
                  <div className="blog-posts">
                    <div className="post">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" +item.poster_path
                        }
                        className="post-img"
                        alt="..."
                      />
                      <div className="post-content">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.release_date}</p>
                        <p className="card-text">{item.vote_average}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <section class="area">
              <div class="ball"></div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};
