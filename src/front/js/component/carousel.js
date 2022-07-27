import React from "react";
import { Context } from "../store/appContext";
import banner1 from "../../img/banner1.gif";
import banner2 from "../../img/banner2.gif";
import banner3 from "../../img/banner3.gif";
import { Link } from "react-router-dom";

export const Carousel = () => {
	return (
        <div className="container carousel">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="banner1.gif" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>AVATAR</h3>
                        <p>En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="banner2.gif" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>TITANIC</h3>
                        <p>Jack es un joven artista que gana un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="banner3.gif" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>HARRY POTTER Y LA PIEDRA FILOSOFAL</h3>
                        <p>Cuando Harry Potter cumple 11 años se entera que es huérfano, hijo de dos magos y que posee poderes mágicos. En la Escuela de Magia y Brujería de Hogwarts aprende a jugar el deporte de alturas, Quidditch y juega un emocionante juego de ajedrez, en vías a encarar al Mago Oscuro que está empeñado en destruirlo.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
	);
};