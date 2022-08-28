import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cards.css";
import { Cards } from "../component/cards";

export const Searchingpage = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  const [searching, setSearching] = useState([]);

  const search = () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        text: store.search,
      }),
    };
    fetch(process.env.BACKEND_URL + "/api/search", opts)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearching(data);
      });
  };

  useEffect(() => {
    search();
  }, []);

  useEffect(() => {
    search();
  }, [store.search]);

  return (
    <>
      <div className="container mb-1 ">
        <div className="row">
          {searching.length > 0 ? (
            searching.map((item, index) => {
              <h1 className="text-white">Categoria</h1>;
              return (
                <Cards
                  key={index}
                  id={item.id}
                  title={item.title}
                  is_favorite={item.is_favorite}
                  description1={"Valoracion: "}
                  result1={item.vote_average}
                  description2={"Fecha de lanzamiento: "}
                  result2={item.release_date}
                  path={"poster_path"}
                  img={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                />
              );
            })
          ) : (
            <section class="area">
              <div class="ball"></div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};
