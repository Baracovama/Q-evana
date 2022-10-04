import React, { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "../../styles/cardgeneros.css";
import "../../styles/scroll-pelis.css";
import { settings } from "../component/settings_movies";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Grid } from "swiper";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

export const CardGeneros = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.generoslist();
  }, []);

  return (
    <div className=" tv_slide ">
      <h1 className="title_tvshow">Generos</h1>
      <Slider {...settings}>
        {store.generos.map((item, index) => {
          <div className="item_slidetv" key={index}>
            <Link to={`/peliculas/genero/${item.id}`}>
              <h2>{item.name}</h2>
            </Link>
          </div>;
        })}
      </Slider>
    </div>
  );
};
