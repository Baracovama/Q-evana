import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/carousel.css";

export const Carousel = () => {
    const {store , actions} = useContext(Context)


    useEffect(() => {
        actions.listpelis();
        actions.toppelis();
      }, []);

    const randomPelis = Math.floor(Math.random()*store.pelis.length);
    const randomTop = Math.floor(Math.random()*store.top.length);
    
    for(let i= 0; i<randomPelis.length; i++){
        arr.push(randomPelis + randomTop)
    }

    const arr = [];
    arr.push(randomPelis + randomTop)
    console.log(arr);
    
	return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    {store.pelis.map((peli) => {
                        return(
                            <div key={peli.id}>
                            <div className="pelicula1">
                                <div className="container-1">
                                    <h3 className="title">{peli.title}</h3>
                                    <p className="description"> 
                                        {peli.overview}
                                    </p>
                                    <button className="info"><i class="fas fa-info-circle"> Info</i></button>
                                </div>
                                <img className="img-carro" src={"https://image.tmdb.org/t/p/w500" + peli.poster_path}/>
                            </div>
                            </div>
                        )
                    })}   
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