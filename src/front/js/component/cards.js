import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    <div style={{ width: "20rem" }} className=" card  m-2">
      <img
        src={props.img}
        className="card-img-top"
        alt="Image not found"
        width="400"
        height="300"
      />
      <div className="card-body">
        <h5 className="card-title" /*{props.title}*/>Coco</h5>
        <div className="d-flex">
          <p className="mx-2" /*{props.description1}*/>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500,{" "}
          </p>
          <p> {props.result1}</p>
        </div>
        <div className="d-flex">
          <p className="mx-2"> {props.valoration}</p>
          <p> {props.result2}</p>
        </div>
        <div className="d-flex">
          <p className="mx-2"> {props.description3}</p>
          <p> {props.result3}</p>
        </div>

        <div className="d-flex justify-content-between">
          <Link to={`/detail/${props.path}/${props.index}`}>
            <button className="btn btn-outline-primary">Learn more!</button>
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
