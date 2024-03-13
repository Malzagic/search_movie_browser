import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FetchDataContext from "../context/FetchDataContext";

function MovieCard() {
  const { data, dispatch } = useContext(FetchDataContext);

  useEffect(() => {
    dispatch({ type: "SET_DATA", payload: data });
  }, [data]);

  const getID = (e) => {
    console.log(
      e.target.parentElement.parentElement.parentElement.getAttribute("data-id")
    );
  };

  console.log(data);

  if (!data || data.length < 0) return;

  return data.map(
    (item) =>
      item.backdrop_path && (
        <div className="row" data-id={item.id} key={item.id} onClick={getID}>
          <div className="column">
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  item.backdrop_path && item.backdrop_path
                }`}
                alt={`${item.title}`}
                className="thumbnail"
              />
              <h3>{item.title}</h3>
              <Link className="reviews" to="/movie-reviews">
                Reviews
              </Link>
            </div>
          </div>
        </div>
      )
  );
}

export default MovieCard;
