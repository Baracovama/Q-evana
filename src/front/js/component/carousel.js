import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/carousel.css";

export const Carousel = () => {
  const { store, actions } = useContext(Context);
  const [ carta, setCarta] = useState([]);

  useEffect(() => {
    setCarta([...store.pelis.slice(0,3), ...store.top.slice(0,2)])
  }, [store.pelis, store.top]);

  return (
    <div id="carouselExampleControls" className="container carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {carta.map((peli, index) => {
                return (
                    <div className= {index == 0 ? "carousel-item active" : "carousel-item"} key={index}>
                        <div className="card text-bg-dark" >
                            <img src={ "https://image.tmdb.org/t/p/w500" + peli.backdrop_path } className="card-img"/>
                            <div className="card-img-overlay">
                                <div className=" card mb-3 card-fondo">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img className="img-fluid rounded-start" src={ "https://image.tmdb.org/t/p/w500" + peli.poster_path}/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h3 className="title">{peli.title}</h3>
                                                <p className="description"> {peli.overview} </p>
                                                <Link to={"peliculas/"+peli.id}><button className="info"> <i className="fas fa-info-circle"> Info</i></button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    
                );
            })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  );
};
