import React, { useEffect, useState } from "react";

export const Cards = () => {
  const [data, setData] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4420fdc66e8fbaa810cbb4c5a36fb67c&language=es&page=",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="card">
      {" "}
      <img src="..." className="card-img-top" alt="..." />{" "}
      <div className="card-body">
        {" "}
        <h5 className="card-title"> Card title </h5>{" "}
        <p className="card-text">
          {" "}
          {data.map((item, i) => (
            <li> {item.id} </li>
          ))}{" "}
          Some quick example text to build on the card title and make up the
          bulk of the card 's content.{" "}
        </p>{" "}
        <a href="#" class="btn btn-primary">
          {" "}
          Go somewhere{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
};
