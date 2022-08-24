import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "./cards";

export const Generos = () => {
    const { store, actions } = useContext(Context);
  
    useEffect(() => {
      actions.listpelis();
    }, []);
  