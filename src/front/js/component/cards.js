import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export const Cards = (props) => {
  const { store, actions } = useContext(Context);
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    actions.setFavorites(props.title);
    isClick == true ? setIsClick(false) : setIsClick(true);
  };

  console.log(isClick);

  return (
    <div style={{ width: "20rem" }} className=" cards  m-2">
      <img
        src={props.img}
        className="cards-img-top"
        alt="Image not found"
        width="400"
        height="300"
      />
      <div className="cards-body">
        <h5 className="cards-title">{props.title}</h5>
        <div className="d-flex">
          <p className="mx-2"> {props.valoration}</p>
          <p> {props.valoration1}</p>
        </div>
        <div className="d-flex">
          <p className="mx-2"> {props.date}</p>
          <p> {props.date1}</p>
        </div>
        <div className="d-flex">
          <p className="mx-2"> {props.category}</p>
          <p> {props.category1}</p>
        </div>

        <div className="d-flex justify-content-between">
          <Link to={`/detail/${props.path}/${props.index}`}>
            <button className="btn btn-outline-primary">Mas información</button>
          </Link>
          <button
            onClick={handleClick}
            className={
              isClick === true ? " btn btn-warning" : " btn btn-outline-warning"
            }
          >
            <i className="far fa-heart" />
          </button>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  title: propTypes.string,
  valoration: propTypes.string,
  valoration1: propTypes.string,
  date: propTypes.string,
  date1: propTypes.string,
  category: propTypes.string,
  category1: propTypes.string,
  path: propTypes.string,
  index: propTypes.number,
  img: propTypes.string,
};
