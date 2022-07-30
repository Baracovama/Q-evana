import React from "react";
import { Context } from "../store/appContext";
import avatar from "../../img/avatar.png";
import minions from "../../img/minions.png";
import hpylpf from "../../img/hpylpf.png";
import titanic from "../../img/titanic.png";
import { Link } from "react-router-dom";
import "../../styles/carousel.css";

export const Carousel = () => {
	return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="avatar.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="minions.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="hpylpf.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="titanic.png" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
	);
};