import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

export const Cards = (props) => {
  const { store, actions } = useContext(Context);

  const [datos, setDatos] = useState({
    user_id: -1,
    populares_id: "",
    toprated_id: "",
    proximamente_id: "",
  });

  let navigate = useNavigate();

  const sendFav = (event) => {
    datos.user_id=store.id_user;
    datos.populares_id=props.id;
    datos.toprated_id=props.id;
    datos.proximamente_id=props.id;
    event.preventDefault();
    console.log(datos);
    const respdata = actions.addFavorites(datos);
    if(respdata){
      navigate('/')
    }
  };

  return (
    <div style={{ width: "20rem" }} className=" card-pelis  m-2">
      <div className="blog-posts">
        <div className="post">
          <img
            src={props.img}
            className="post-img"
            alt="Image not found"
          />
          <div className="post-content">
            <h5>{props.title}</h5>
            <div className="d-flex date">
              <p className="mx-2"> {props.description1}</p>
              <p> {props.result1}</p>
            </div>
            <div className="d-flex date">
              <p className="mx-2"> {props.description2}</p>
              <p> {props.result2}</p>
            </div>
            <div className="d-flex justify-content-between">
              <Link to={`/peliculas/${props.id}`}>
                <button className="btn btn-outline-primary">Learn more!</button>
              </Link>
              <form onSubmit={sendFav}>
                  <input name="user_id" className="form-control" id="UsernameInput" type="hidden" value={store.id_user ? store.id_user : ""}/>
                  <input name="populares_id" className="form-control" id="UsernameInput" type="hidden" value={props.id}/>
                  <input name="toprated_id" className="form-control" id="UsernameInput" type="hidden" value={props.id}/>
                  <input name="proximamente_id" className="form-control" id="UsernameInput" type="hidden" value={props.id}/>
                <button type="submit" value="Sing in" name="login-btn"
                  className={
                    store.favList[props.id]
                      ? "btn btn-warning"
                      : " btn btn-outline-warning"
                  }
                >
                  <i className="far fa-heart" />
                </button>
              </form>

              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

Cards.propTypes = {
  title: propTypes.string,
  description1: propTypes.string,
  result1: propTypes.number,
  description2: propTypes.string,
  result2: propTypes.string,
  path: propTypes.string,
  index: propTypes.number,
  img: propTypes.string,
  id: propTypes.number,
};
