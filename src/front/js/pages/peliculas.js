import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cards.css";
import styles from "../../styles/peliculas.css";

export const Peliculas = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/pelicula" + id), {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }})
    .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPelicula(data)
      })
  }, [pelicula]);

  if (!pelicula) {
    return null;
  }

  return (
    <>
      <div className="container mb-1 ">
        <div className="row">
          {store.peliculon.length > 0 ? (
            store.peliculon.map((item, index) => {
              return (
                <div className={styles.detailsContainer}>
                  <img
                    className={`${styles.col} ${styles.peliculaImagen}`}
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                  />
                  <div className={`${styles.col} ${styles.peliculaDetalles}`}>
                    <p className={styles.title}>
                      <strong>Titulo: </strong>
                      {pelicula.title}
                    </p>
                    <p>
                      <strong>Generos: </strong>
                      {item.genres.map((genre) => genre.name).join(", ")}
                    </p>
                    <p>
                      <strong>Descripcion: </strong>
                      {item.overview}
                    </p>
                  </div>
                </div>
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
