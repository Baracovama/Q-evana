import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

export const Cards = (props) => {
  const { store, actions } = useContext(Context);

  let navigate = useNavigate();

  return (
    <div style={{ width: "20rem" }} className=" card-pelis ">
      <Link to={`/peliculas/${props.id}`}>
        <div className="blog-posts">
          <div className="post ">
            <img src={props.img} className="post-img" alt="Image not found" />
            <div className="post-content text-dark">
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
                {store.auth ? (
                  <button
                    type="submit"
                    value="Sing in"
                    name="login-btn"
                    className={
                      store.favList.map((x) => x.id).includes(props.id)
                        ? "btn btn-warning"
                        : " btn btn-outline-warning"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      actions.addFavorites(props.id);
                    }}
                  >
                    <i className="far fa-heart" />
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
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
