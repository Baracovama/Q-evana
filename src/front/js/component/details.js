// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import { useParams } from "react-router-dom";

// export const Detail = () => {
//   const { store, actions } = useContext(Context);
//   const params = useParams();
//   useEffect(() => {
//     actions.details(params.item, params.id);
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-12 col-md-6 text-center">
//           <img
//             className="img img-fluid"
//             src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
//           />
//         </div>
//         <div className="col-12 col-md-6 text-center">
//           <h1 className=" h1">{item.title}</h1>
//           <p className="text-danger">{store.detail.overview}</p>
//         </div>
//       </div>

//       <div className="row my-4 border-top border-danger border-2 mx-2 text-center">
//         <div className="col-4 col-md-2 mt-3">
//           <p className="fw-bold text-danger">Titulo Original</p>
//           <p className="text-danger">{store.detail.original_title}</p>
//         </div>
//         <div className="col-4 col-md-2 mt-3">
//           <p className="fw-bold text-danger">Fecha de lanzamiento</p>
//           <p className="text-danger">{store.detail.release_date}</p>
//         </div>
//         <div className="col-4 col-md-2 mt-3">
//           <p className="fw-bold text-danger">Cuenta de votos</p>
//           <p className="text-danger">{store.detail.vote_count}</p>
//         </div>
//         <div className="col-4 col-md-2 mt-3">
//           <p className="fw-bold text-danger">Lenguaje de Origen</p>
//           <p className="text-danger">{store.detail.original_language}</p>
//         </div>
//         <div className="col-4 col-md-2 mt-3">
//           <p className="fw-bold text-danger">Popularidad</p>
//           <p className="text-danger">{store.detail.popularity}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
