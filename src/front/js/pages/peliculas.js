import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/peliculas.css";
import { Forms } from "../component/form";

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

  if (!pelicula) {
    return null;
  }

  return (
    <>
      <div className="container ">
        <div className="row">
          {pelicula ? (
            <div className="card card-background">
              <img
                src={"https://image.tmdb.org/t/p/w500" + pelicula.backdrop_path}
                className="card-img"
                alt="Fondo de Pelicula"
              />
              <div className="card-img-overlay">
                <div className="card-fondo card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4 ">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" +
                          pelicula.poster_path
                        }
                        className="img-fluid rounded-start content-img "
                        alt="imagen original"
                      />
                    </div>
                    <div class="col-md-8 ">
                      <div className="card-body ">
                        <h1 className="card-title title ">
                          <strong>Titulo: </strong>
                          {pelicula.title}
                        </h1>
                        <p className="card-text">
                          <strong>Descripcion: </strong>
                          {pelicula.overview}
                        </p>
                        <p>
                          <strong>Generos: </strong>
                          {pelicula.generos
                            .map((genre) => genre.name)
                            .join(", ")}
                        </p>
                        <p>
                          <strong>Fecha de lanzamiento: </strong>
                          {pelicula.release_date}
                        </p>
                        <p>
                          <strong>Valoracion: </strong>
                          {pelicula.vote_average}
                        </p>
                        <p>
                          <strong>Lenguaje Original: </strong>
                          {pelicula.original_language}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            <strong>Votos: </strong>
                            {pelicula.vote_count}
                          </small>
                        </p>
                      </div>
                    </div>
                    <Forms />
                    {/* <div className="separ peliculaDetalles">
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
                <p>
                  <strong>Fecha de lanzamiento: </strong>
                  {pelicula.release_date}
                </p>
                <p>
                  <strong>Valoracion: </strong>
                  {pelicula.vote_average}
                </p>
                <p>
                  <strong>Lenguaje Original: </strong>
                  {pelicula.original_language}
                </p>
              </div> */}
                  </div>
                </div>
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
