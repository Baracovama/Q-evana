import React, { useContext, useState, useEffect, Component } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Cardlistpelis from "./cardlistpelis";

export const Navbar = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");

  const handlesubmit = (e) => {
    if (e.key == "Enter" && busqueda.length) {
      actions.search(busqueda);
      navigate(`/searchingpage`);
    }
  };

  console.log(store.auth);
  return (
    // <nav className="navbar navbar-expand-lg navbar-light">
    //   {store.auth ? (
    //     <div className="container-fluid">
    //     <a
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarTogglerDemo01"
    //       aria-controls="navbarTogglerDemo01"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </a>
    //     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    //       <a className="navbar-brand" href="#"></a>
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link to="/">
    //             <div
    //               className="nav-link active text-light"
    //               aria-current="page"
    //             >
    //               <img src="logo.png" className="logo" />
    //             </div>
    //           </Link>
    //         </li>
    //         <li className="nav-item categorias">
    //           <a className="nav-link text-light" href="#">
    //             <i className="fas fa-film"> Populares</i>
    //           </a>
    //         </li>
    //         <li className="nav-item categorias">
    //           <a className="nav-link text-light" href="#">
    //             <i className="fas fa-medal"> Mejor Valoradas</i>
    //           </a>
    //         </li>
    //         <li className="nav-item categorias">
    //             <Link to={"/favoritos"} className="nav-link text-light">
    //               <i class="fas fa-plus"> Mi lista</i>
    //             </Link>
    //         </li>
    //         <li className="nav-item categorias">
    //           <Link className="nav-link text-light" to="/contacta">
    //             <i className="fas fa-phone"> Contactanos</i>
    //           </Link>
    //         </li>
    //       </ul>
    //       <div className="d-flex" role="search">
    //         <div className="formInput me-2">
    //           <button className="botonInput">
    //             <svg
    //               width="17"
    //               height="16"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //               role="img"
    //               aria-labelledby="search"
    //             >
    //               <path
    //                 d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
    //                 stroke="currentColor"
    //                 stroke-width="1.333"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               ></path>
    //             </svg>
    //           </button>
    //           <input
    //             value={busqueda}
    //             placeholder="Search..."
    //             required=""
    //             type="text"
    //             onChange={(e) => setBusqueda(e.target.value)}
    //             onKeyPress={(e) => handlesubmit(e)}
    //             className="form-control me-2 "
    //           />
    //         </div>
    //       </div>
    //       <div className="me-2">
    //             <button
    //               className="noselect botonLogOut"
    //               onClick={() => {
    //                 const desconecto = actions.LogOut();
    //                 if (desconecto) {
    //                   navigate(0);
    //                 }
    //               }}
    //             >
    //               <span className="text">
    //                 {store.username ? store.username : ""}
    //               </span>
    //               <span className="icon">
    //                 {" "}
    //                 <i className="fas fa-sign-out-alt"></i>{" "}
    //               </span>
    //             </button>
    //           </div>
    //           <div className="me-2">
    //             <Link to={"/miperfil"}>
    //               <button className="botonperfil">
    //                 <i class="fas fa-user-astronaut"></i>
    //               </button>
    //             </Link>
    //           </div>
    //     </div>
    //   </div>
    //   ) : (
    //     <div className="container-fluid">
    //       <a
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarTogglerDemo01"
    //         aria-controls="navbarTogglerDemo01"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </a>
    //       <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    //         <a className="navbar-brand" href="#"></a>
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link to="/">
    //               <div
    //                 className="nav-link active text-light"
    //                 aria-current="page"
    //               >
    //                 <img src="logo.png" className="logo" />
    //               </div>
    //             </Link>
    //           </li>
    //           <li className="nav-item categorias">
    //             <a className="nav-link text-light" href="#">
    //               <i className="fas fa-film"> Populares</i>
    //             </a>
    //           </li>
    //           <li className="nav-item categorias">
    //             <a className="nav-link text-light" href="#">
    //               <i className="fas fa-medal"> Mejor Valoradas</i>
    //             </a>
    //           </li>
    //           <li className="nav-item categorias">
    //             <Link className="nav-link text-light" to="/contacta">
    //               <i className="fas fa-phone"> Contactanos</i>
    //             </Link>
    //           </li>
    //         </ul>
    //         <div className="d-flex" role="search">
    //           <div className="formInput me-2">
    //             <button className="botonInput">
    //               <svg
    //                 width="17"
    //                 height="16"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 role="img"
    //                 aria-labelledby="search"
    //               >
    //                 <path
    //                   d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
    //                   stroke="currentColor"
    //                   stroke-width="1.333"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                 ></path>
    //               </svg>
    //             </button>
    //             <input
    //               value={busqueda}
    //               placeholder="Search..."
    //               required=""
    //               type="text"
    //               onChange={(e) => setBusqueda(e.target.value)}
    //               onKeyPress={(e) => handlesubmit(e)}
    //               className="form-control me-2 "
    //             />
    //           </div>
    //         </div>
    //         <div className="d-flex" role="search">
    //           <Link to="/login" className="me-2">
    //             <button to="/login" className="botonEntrar" type="submit">
    //               {" "}
    //               <span className="text">
    //                 <i className="fas fa-user-astronaut"> Entrar</i>
    //               </span>
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </nav>
    <div className="container_side">
            <div className="sidebar close">

                <div className="logo-details">
                    <img src="logo.png" className="logo" />
                </div>

                {store.auth ? (
                <ul className="nav-links">
                    <li>
                        <div className="icon-link">
                            <Link to={"/"} className="linkS">
                              <i className="fas fa-home"></i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li>Home</li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link">
                            <Link to={"/search"} className="linkS">
                                <i className="fas fa-search"></i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li>Search</li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link">
                            <Link to={"/favoritos"} className="linkS">
                                <i class="far fa-star"></i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li>Favorites</li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link">
                            <Link to={"/miperfil"} className="linkS">
                                <i class="far fa-user"></i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li>User</li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link">
                            <Link to={"/logout"} className="linkS"  >
                                <i onClick={() => {const desconecto = actions.LogOut();
                                    if (desconecto) {
                                       navigate(0);
                                    }
                                    }} className="fas fa-sign-out-alt">
                                </i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li >Logout</li>
                        </ul>
                    </li>
                </ul>
                ) : (
                    <ul className="nav-links">
                        <li>
                            <div className="icon-link">
                                <Link to={"/"} className="linkS">
                                  <i className="fas fa-home"></i>
                                </Link>
                            </div>
                            <ul className="sub-menu">
                                <li>Home</li>
                            </ul>
                        </li>
                        <li>
                            <div className="icon-link">
                                <Link to={"/search"} className="linkS">
                                  <i className="fas fa-search"></i>
                                </Link>
                            </div>
                            <ul className="sub-menu">
                                <li>Search</li>
                            </ul>
                        </li>
                        <li>
                            <div className="icon-link">
                                <Link to={"/login"} className="linkS">
                                  <i className="fas fa-user-check"></i>
                                </Link>
                            </div>
                            <ul className="sub-menu">
                                <li>Login</li>
                            </ul>
                        </li>
                        <li>
                            <div className="icon-link">
                                <Link to={"/registre"} className="linkS">
                                  <i className="fas fa-user-plus"></i>
                                </Link>
                            </div>
                            <ul className="sub-menu">
                                <li>Register</li>
                            </ul>
                        </li>
                    </ul>
                )}
            </div>
        </div>

  );
};
