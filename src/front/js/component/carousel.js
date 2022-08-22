import React from "react";
import { Context } from "../store/appContext";
import avatar from "../../img/avatar.png";
import minions from "../../img/minions.png";
import titanic from "../../img/titanic.png";
import { Link } from "react-router-dom";
import "../../styles/carousel.css";

export const Carousel = () => {
	return (
        <div className="container_slider">
            <input type="radio" name="slider" id="item-1" checked/>
            <input type="radio" name="slider" id="item-2"/>
            <input type="radio" name="slider" id="item-3"/>

            <div className="siluetas">
                <label className="silueta" htmlFor="item-1" id="selector-1">
                    <div className="pelicula1">
                        <div className="container-1">
                            <h3 className="title">Predator: La presa</h3>
                            <p className="description"> 
                                Ambientada hace 300 años en la Nación Comanche. Naru es una joven guerrera, feroz y altamente hábil, que se crió a la sombra de algunos de los cazadores más legendarios que deambulan por las Grandes Llanuras. Cuando el peligro amenaza su campamento, se dispone a proteger a su gente. La presa a la que acecha y, en última instancia, se enfrenta, resulta ser un depredador alienígena evolucionado con un arsenal técnicamente avanzado, lo que deriva en un enfrentamiento cruel y aterrador entre los dos adversarios.
                            </p>
                        </div>
                        <img className="img-carro" src="https://image.tmdb.org/t/p/w500/k93rXVLGpFIwzbKiNqvWkVgoij.jpg"/>
                    </div>
                </label>
                <label className="silueta" htmlFor="item-2" id="selector-2">
                    <div className="pelicula2">
                        <div className="container-2">
                            <h3 className="title">El padrino </h3>
                            <p className="description"> 
                                Don Vito Corleone, conocido dentro de los círculos del hampa como 'El Padrino', es el patriarca de una de las cinco familias que ejercen el mando de la Cosa Nostra en Nueva York en los años cuarenta. Don Corleone tiene cuatro hijos: una chica, Connie, y tres varones; Sonny, Michael y Fredo. Cuando el Padrino reclina intervenir en el negocio de estupefacientes, empieza una cruenta lucha de violentos episodios entre las distintas familias del crimen organizado.
                            </p>
                        </div>
                        <img className="img-carro" src="https://image.tmdb.org/t/p/w500//wLXd1Cd0XW7DhXayfC0Ok5ago9r.jpg"/>
                    </div>
                </label>
                <label className="silueta" htmlFor="item-3" id="selector-3">
                    <div className="pelicula3">
                        <div className="container-3">
                            <h3 className="title">Un Parcero en Nueva York</h3>
                            <p className="description"> 
                                Armando Pulido, a construction master, simple, good-hearted, hard-working, industrious, and a good friend, tired of the serious economic crisis in Colombia, decides to go to New York in search of the so-called "American dream".
                            </p>
                        </div>
                        <img className="img-carro" src="https://image.tmdb.org/t/p/w500/rpLU2sKVvsbNdtE8ItVf89o8eXr.jpg"/>
                    </div>
                </label>
            </div>
        </div>
	);
};  