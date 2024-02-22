import React, { useEffect } from "react";
import { useMainContext } from "../../contexts/Contexts";
import { useParams } from "react-router-dom";
import "./CardInfo.scss";
import CardActor from "./CardActor";

function CardInfo() {
  const { cardInfo1, getCardInfo, getCardActor, infoActor } = useMainContext();
  //   console.log(setCardInfo1);
  //https://api.themoviedb.org/3/movie/$%7${id}%7D?api_key=api&language=en-US
  const { Id } = useParams();
  useEffect(() => {
    getCardInfo(Id);
    getCardActor(Id);
  }, []);
  const {
    title,
    poster_path,
    overview,
    backdrop_path,
    vote_average,
    genres,
    release_date,
  } = cardInfo1;
  // console.log(infoActor);
  //   console.log("lol" + genres.map((el) => el.name));

  return (
    <>
      <div
        style={{
          background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) no-repeat`,
          height: "100vh",
        }}
        className="cardInfo"
      >
        <div className="container">
          <div className="cardInfoContent">
            <div className="cardInfoImages">
              <img
                src={
                  "https://media.themoviedb.org/t/p/w300_and_h450_bestv2" +
                  poster_path
                }
                alt=""
              />
            </div>
            <div className="cardInfoInfo">
              <h1>
                {title} <br /> {release_date} year
              </h1>
              <div className="ball">
                <div
                  style={{
                    width: `${Math.round(vote_average) * 10}%`,
                    background: "#101b31",
                  }}
                  className="point"
                >
                  <p>rating : {Math.round(vote_average)}</p>
                </div>
              </div>
              <p> {overview}</p>
              <ul>
                <li>Genres:</li>
                {genres?.map((el) => (
                  <li>{el.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cardWero">
        {infoActor?.map((el, idx) => (
          <div className="cardActorBlock">
            <CardActor key={idx} cardActor={el} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CardInfo;
