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

  return (
    <>
      <div className=" container mb-5  ">
        <h1 className="text-white">Generos</h1>
        <div className="swiper mySwiper ">
          <Swiper
            slidesPerView={4}
            grid={{
              rows: 1,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
            navigation={true}
          >
            {store.generos.map((item, index) => {
              return (
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
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
              );
            })}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
};
