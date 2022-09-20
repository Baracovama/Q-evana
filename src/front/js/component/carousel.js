import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/carousel.css";

export const Carousel = () => {
	return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="pelicula1">
                        <div className="container-1">
                            <h3 className="title">Predator: La presa</h3>
                            <p className="description"> 
                                Ambientada hace 300 años en la Nación Comanche. Naru es una joven guerrera, feroz y altamente hábil, que se crió a la sombra de algunos de los cazadores más legendarios que deambulan por las Grandes Llanuras. Cuando el peligro amenaza su campamento, se dispone a proteger a su gente. La presa a la que acecha y, en última instancia, se enfrenta, resulta ser un depredador alienígena evolucionado con un arsenal técnicamente avanzado, lo que deriva en un enfrentamiento cruel y aterrador entre los dos adversarios.
                            </p>
                        </div>
                        <img className="img-carro" src="https://image.tmdb.org/t/p/w500/k93rXVLGpFIwzbKiNqvWkVgoij.jpg"/>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="pelicula2">
                        <div className="container-2">
                            <h3 className="title">El padrino </h3>
                            <p className="description"> 
                                Don Vito Corleone, conocido dentro de los círculos del hampa como 'El Padrino', es el patriarca de una de las cinco familias que ejercen el mando de la Cosa Nostra en Nueva York en los años cuarenta. Don Corleone tiene cuatro hijos: una chica, Connie, y tres varones; Sonny, Michael y Fredo. Cuando el Padrino reclina intervenir en el negocio de estupefacientes, empieza una cruenta lucha de violentos episodios entre las distintas familias del crimen organizado.
                            </p>
                        </div>
                        <img className="img-carro" src="https://image.tmdb.org/t/p/w500//wLXd1Cd0XW7DhXayfC0Ok5ago9r.jpg"/>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="pelicula3">
                        <div className="container-3">
                            <h3 className="title">Un Parcero en Nueva York</h3>
                            <p className="description"> 
                                Armando Pulido, a construction master, simple, good-hearted, hard-working, industrious, and a good friend, tired of the serious economic crisis in Colombia, decides to go to New York in search of the so-called "American dream".
                            </p>
                        </div>
                        <img className="img-carro" src="https://image.tmdb.org/t/p/w500/rpLU2sKVvsbNdtE8ItVf89o8eXr.jpg"/>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="pelicula4">
                        <div className="container-4">
                            <h3 className="title">Un Parcero en Nueva York</h3>
                            <p className="description"> 
                                Armando Pulido, a construction master, simple, good-hearted, hard-working, industrious, and a good friend, tired of the serious economic crisis in Colombia, decides to go to New York in search of the so-called "American dream".
                            </p>
                        </div>
                        <img className="img-carro" src="https://image.tmdb.org/t/p/w500/rpLU2sKVvsbNdtE8ItVf89o8eXr.jpg"/>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="pelicula5">
                        <div className="container-5">
                            <h3 className="title">Un Parcero en Nueva York</h3>
                            <p className="description"> 
                                Armando Pulido, a construction master, simple, good-hearted, hard-working, industrious, and a good friend, tired of the serious economic crisis in Colombia, decides to go to New York in search of the so-called "American dream".
                            </p>
                        </div>
                        <img className="img-carro" src="https://image.tmdb.org/t/p/w500/rpLU2sKVvsbNdtE8ItVf89o8eXr.jpg"/>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
	);
};  