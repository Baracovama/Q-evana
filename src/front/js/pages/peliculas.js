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
    fetch(process.env.BACKEND_URL + "/api/pelicula/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPelicula(data);
      });
  }, []);

  // if (!pelicula) {
  //   return null;
  // };

  return (
    <>
      <div className="container mb-1 ">
        <div className="row">
          {pelicula ? (
            <div className="detailsContainer">
              <img
                className="separ peliculaImagen"
                src={"https://image.tmdb.org/t/p/w500" + pelicula.poster_path}
              />
              <div className="separ peliculaDetalles">
                <p className="title">
                  <strong>Titulo: </strong>
                  {pelicula.title}
                </p>
                <p>
                  <strong>Generos: </strong>
                  {pelicula.generos.map((genre) => genre.name).join(", ")}
                </p>
                <p>
                  <strong>Descripcion: </strong>
                  {pelicula.overview}
                </p>
              </div>
            </div>
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
