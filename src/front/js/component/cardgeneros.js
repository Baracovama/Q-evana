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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.generoslist());
  }, [dispatch]);

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

// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import "../../styles/cardgeneros.css";
// import { Link } from "react-router-dom";

// export const CardGeneros = () => {
//   const { store, actions } = useContext(Context);

//   useEffect(() => {
//     actions.generoslist();
//   }, []);

//   return (
//     <div className=" container mb-5  ">
//       <h1 className="text-white">Generos</h1>
//       <div className="row flex-row flex-nowrap overflow-auto">
//         {store.generos.map((item, index) => {
//           return (
//             <div className="card-generos  m-2" style={{ width: "20rem" }}>
//               <Link to={/peliculas/genero/${item.id}}>
//                 <h2>{item.name}</h2>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
