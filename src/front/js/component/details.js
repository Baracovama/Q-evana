import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export const Details = (props) => {
    const { store, actions } = useContext(Context);
  
    let navigate = useNavigate();
  
    return (
        <div className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.img} className="post-img" alt="Image not found">
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <div className="d-flex date"></div>
                            <p className="card-text">{props.description1}</p>
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