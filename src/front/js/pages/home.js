import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carousel } from "../component/carousel";
import { Cardlistpelis } from "../component/cardlistpelis";
import { Topcards } from "../component/topcards";
import { CardGeneros } from "../component/cardgeneros";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container home ">
      <Carousel />
      <CardGeneros />
      <Cardlistpelis />
      <Topcards />
    </div>
  );
};
