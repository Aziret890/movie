import React from "react";
import { useNavigate } from "react-router-dom";

function Popular({ card }) {
  const nav = useNavigate();

  return (
    <>
      <div className="block">
        <div className="popular__1">
          <div className="popular__1__img">
            <img
              onClick={() => nav(`/movieCard/${card.id}`)}
              src={
                "https://media.themoviedb.org/t/p/w300_and_h450_bestv2" +
                card.poster_path
              }
              alt=""
            />
          </div>
        </div>
        <div className="popular__2">
          <h1>{card.title}</h1>
        </div>
      </div>
    </>
  );
}

export default Popular;
