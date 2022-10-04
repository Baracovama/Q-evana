import React, { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../store/appContext";
import "../../styles/cardgeneros.css";
import "../../styles/scroll-pelis.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Grid } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const CardGeneros = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.generoslist();
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allMovies());
  }, [dispatch]);

  return (
    <>
      <div className=" tv_slide ">
        <h1 className="title_tvshow">Generos</h1>
        <Slider {...settings}>
            {store.generos.map((item, index) => {
                <div className="item_slidetv"key={index}>
                    <SwiperSlide>
                      <div
                        className="card-generos m-2"
                        style={{ width: "20rem" }}
                      >
                        <Link to={`/peliculas/genero/${item.id}`}>
                          <h2>{item.name}</h2>
                        </Link>
                      </div>
                    </SwiperSlide>
                  </div>
                </div>
            })}
            <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};
