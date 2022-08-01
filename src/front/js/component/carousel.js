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
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="avatar.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="minions.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="hpylpf.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="titanic.png" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
	);
};