import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/logo.png";

export const Navbar = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
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
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light categorias" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Romance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Thriller
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Science Fiction
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {store.auth ? (
            <div className="d-flex" role="search">
              <input className="form-control me-2 dropstart" type="search" placeholder="Search" aria-label="Search"/>
              <div className="me-5">
                <div className="dropdown">
                  <button className=" dropdown-toggle favoritos" type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Mi lista
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>no hay contenido</li>
                  </ul>
                </div>
              </div>

              <div className="me-2">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                <strong>{store.username ? store.username : ""}</strong>
              </button>

              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      holaa
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div className="me-2">
                <button
                  onClick={() => {
                    const desconecto = actions.LogOut();
					          if(desconecto){navigate(0)}
                  }}
                >
                  <i className="fas fa-sign-out-alt"></i>
                </button>
              </div>
            </div>
          ) : (
            <div className="d-flex" role="search">
              <input
                className="form-control me-2 dropstart"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link to="/login" className="me-2">
                <button to="/login" className="btn btn-primary" type="submit">
                  {" "}
                  Login
                </button>
              </Link>
              <Link to="/registre">
                <button
                  to="/registre"
                  className="btn btn-primary"
                  type="submit"
                >
                  {" "}
                  Registre
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
