import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/carousel.css";

export const Carousel = () => {
  const { store, actions } = useContext(Context);
  const [carta, setCarta] = useState([]);

  useEffect(() => {
    setCarta([...store.pelis.slice(0, 3), ...store.top.slice(0, 2)]);
  }, [store.pelis, store.top]);

  return (
    <div className="imagen_carrousel" style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/vvObT0eIWGlArLQx3K5wZ0uT812.jpg")`
  }}>
      <div className="initial_carrousel">

          <div className="info">
              <div className="movie_title">
                  <h2 className="container_title">
                      <Link to={"/movies/id"} className="link_tit">Thor: Love and Thunder </Link>
                  </h2>
              </div>
              <div className="description">
                  <p className="container_description">
                  El Dios del Trueno emprende un viaje que no se parece en nada a lo que se ha enfrentado hasta ahora: una búsqueda de la paz interior. Pero el retiro de Thor se ve interrumpido por un asesino galáctico conocido como Gorr el Carnicero de Dioses.
                  </p>
              </div>
          </div>
      </div>
  </div>
    // <div
    //   id="carouselExampleControls"
    //   className="container carousel slide"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner">
    //     {carta.map((peli, index) => {
    //       return (
    //         <div
    //           className={index == 0 ? "carousel-item active" : "carousel-item"}
    //           key={index}
    //         >
    //           <div className="card text-bg-dark">
    //             <img
    //               src={"https://image.tmdb.org/t/p/w500" + peli.backdrop_path}
    //               className="card-img"
    //             />
    //             <div className="card-img-overlay">
    //               <div className=" card mb-3 card-fondo">
    //                 <div className="row g-0">
    //                   <div className="col-md-4">
    //                     <img
    //                       className="img-fluid rounded-start"
    //                       src={
    //                         "https://image.tmdb.org/t/p/w500" + peli.poster_path
    //                       }
    //                     />
    //                   </div>
    //                   <div className="col-md-8">
    //                     <div className="card-body">
    //                       <h3 className="title">{peli.title}</h3>
    //                       <p className="description"> {peli.overview} </p>
    //                       <Link to={"peliculas/" + peli.id}>
    //                         <button className="info">
    //                           <span className="circle" aria-hidden="true">
    //                             <span className="icon arrow"></span>
    //                           </span>
    //                           <span className="button-text"> + Info</span>
    //                         </button>
    //                       </Link>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>

    //   <div className="info">
    //     <div className="movie_title">
    //       <h2 className="container_title">
    //         <Link to={"/movies/id"} className="link_tit">
    //           Thor: Love and Thunder{" "}
    //         </Link>
    //       </h2>
    //     </div>
    //     <div className="description">
    //       <p className="container_description">The one is not the only.</p>
    //     </div>
    //   </div>
    // </div>
    // <div id="carouselExampleControls" className="container carousel slide" data-bs-ride="carousel">
    //     <div className="carousel-inner">
    //         {carta.map((peli, index) => {
    //             return (
    //                 <div className= {index == 0 ? "carousel-item active" : "carousel-item"} key={index}>
    //                     <div className="card text-bg-dark" >
    //                         <img src={ "https://image.tmdb.org/t/p/w500" + peli.backdrop_path } className="card-img"/>
    //                         <div className="card-img-overlay">
    //                             <div className=" card mb-3 card-fondo">
    //                                 <div className="row g-0">
    //                                     <div className="col-md-4">
    //                                         <img className="img-fluid rounded-start" src={ "https://image.tmdb.org/t/p/w500" + peli.poster_path}/>
    //                                     </div>
    //                                     <div className="col-md-8">
    //                                         <div className="card-body">
    //                                             <h3 className="title">{peli.title}</h3>
    //                                             <p className="description"> {peli.overview} </p>
    //                                             <Link to={"peliculas/"+peli.id}>
    //                                                 <button class="info">
    //                                                     <span class="circle" aria-hidden="true">
    //                                                     <span class="icon arrow"></span>
    //                                                     </span>
    //                                                     <span class="button-text"> + Info</span>
    //                                                 </button>
    //                                             </Link>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //             );
    //         })}
    //     </div>
    //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"data-bs-slide="prev">
    //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //         <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //         <span className="visually-hidden">Next</span>
    //     </button>
    // </div>
  );
};
