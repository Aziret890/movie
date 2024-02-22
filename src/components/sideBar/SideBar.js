import React from "react";
import "./SideBar.scss";
import { useNavigate } from "react-router-dom";
import { useMainContext } from "../../contexts/Contexts";

function SideBar({ card }) {
  //   console.log(card.title);
  const nav = useNavigate();
  //   console.log(card);
  return (
    <>
      <div className="sideBar__1">
        <div className="sideBar__1__img">
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
      <div className="sideBar__2">
        <h1>{card.title}</h1>
      </div>
    </>
  );
}

export default SideBar;
