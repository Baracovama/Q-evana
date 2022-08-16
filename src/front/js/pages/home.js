import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carousel } from "../component/carousel";
import { Cards } from "../component/cards";
import { Cardlistpelis } from "../component/cardlistpelis";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid ">
      <Carousel />
      <Cardlistpelis />
    </div>
  );
};
