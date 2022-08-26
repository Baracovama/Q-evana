import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cards.css";

export const Category = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.pagenre(params.id);
  }, []);

  return (
    <>
      <div className="container mb-5 ">
        <div className="row">
          {store.genrepage.length > 0 ? (
            store.genrepage.map((item, index) => {
              return (
                <div
                  className="container mb-5 card-pelis m-1"
                  style={{ width: "20rem" }}
                  key={index}
                >
                  <div className="blog-posts">
                    <div className="post">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + item.poster_path
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
