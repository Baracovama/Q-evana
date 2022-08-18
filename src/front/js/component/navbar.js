import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  console.log(busqueda);
  console.log(store.pelis);
  useEffect(() => {
    actions.searchPelis(busqueda);
  }, [busqueda]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#"></a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                <div className="nav-link active text-light" aria-current="page">
                  <img src="logo.png" className="logo" />
                </div>
              </Link>
            </li>
            <li class="nav-item categorias">
              <a class="nav-link text-light" href="#"><i class="fas fa-film"> Populares</i></a>
            </li>
            <li class="nav-item categorias">
              <a class="nav-link text-light" href="#"><i class="fas fa-medal"> Mejor Valoradas</i></a>
            </li>
            <li class="nav-item categorias">
              <a class="nav-link text-light" href="#"><i class="fas fa-plus-circle"> Proximamente</i></a>
            </li>
            <li class="nav-item categorias">
              <a class="nav-link text-light" href="#"><i class="fas fa-phone"> Contactanos</i></a>
            </li>
          </ul>

          {store.auth ? (
            <div className="d-flex" role="search">
              <form class="formInput me-2">
                    <button className="botonInput">
                        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <input placeholder="Search..." required="" type="text" 
                      onChange={(e) => setBusqueda(e.target.value)} className="form-control me-2 " />
                    <button className="reset" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </form>

              <div className="ml-auto me-2">
                <div className="dropdown">
                  <button className="btn btn-dark dropdown-toggle milist" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Mi lista {store.favList.length}
                  </button>
                  <ul className="dropdown-menu listado" aria-labelledby="dropdownMenuButton1">
                    {store.favList.map((item, index) => {
                      return (
                        <li className="dropdown-item" key={item.id}>
                          {item.title}
                          <FontAwesomeIcon
                            onClick={() => {
                              actions.deleteFavorites(item);
                            }}
                            icon={faTrash}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="me-2">
                <button class="noselect botonLogOut" onClick={() => { const desconecto = actions.LogOut();if (desconecto) { navigate(0);}}} >
                  <span class="text">{store.username ? store.username : ""}</span>
                  <span class="icon"> <i className="fas fa-sign-out-alt"></i> </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="d-flex" role="search">
              <Link to="/login" className="me-2">
                <button to="/login" className="botonEntrar" type="submit">
                  {" "}
                  <span class="text"><i class="fas fa-user-astronaut"> Entrar</i></span>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
