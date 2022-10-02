import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "./cards";
import "../../styles/scroll-pelis.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export const Cardlistpelis = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.listpelis();
  }, []);

  return (
    <div className=" container mb-5" id="popular">
      <h1 className="text-white">Populares</h1>
      <div className="swiper mySwiper ">
        <Swiper
          slidesPerView={4}
          grid={{
            rows: 1,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          navigation={true}
        >
          {store.pelis.map((item, index) => {
            return (
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <SwiperSlide>
                    <Cards
                      key={index}
                      id={item.id}
                      title={item.title}
                      is_favorite={item.is_favorite}
                      description1={"Valoracion: "}
                      result1={item.vote_average}
                      description2={"Fecha de lanzamiento: "}
                      result2={item.release_date}
                      path={"poster_path"}
                      img={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                    />
                  </SwiperSlide>
                </div>
              </div>
            );
          })}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};
