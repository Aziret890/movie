import React, { useEffect } from "react";
import { useMainContext } from "../../contexts/Contexts";
import { useNavigate } from "react-router-dom";
import "./Search.scss";
function Search({ card }) {
  const nav = useNavigate();

  console.log(card);
  return (
    <div className="sideBar">
      <div className="sideBar__1">
        <div className="sideBar__1__img">
          {!card.poster_path ? (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROaHFA3JbJGxEbsw6t1xui2bzVIqNtAUGTnS29jnBUWQ&s"
              alt=""
            />
          ) : (
            <img
              onClick={() => nav(`/movieCard/${card.id}`)}
              src={
                "https://media.themoviedb.org/t/p/w300_and_h450_bestv2" +
                card.poster_path
              }
              alt="photo"
            />
          )}
        </div>
      </div>
      <div className="sideBar__2">
        <h1>{card.title}</h1>
      </div>
    </div>
  );
}

export default Search;
