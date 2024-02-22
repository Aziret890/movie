import React from "react";
import { useNavigate } from "react-router-dom";

function CardActor({ cardActor }) {
  const navigate = useNavigate();
  console.log(cardActor);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div
      onClick={() => navigate(`/movieCard/actor/${cardActor.cast_id}`)}
      className="cardActorFlex"
    >
      <div>
        {!cardActor.profile_path ? (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROaHFA3JbJGxEbsw6t1xui2bzVIqNtAUGTnS29jnBUWQ&s"
            alt=""
          />
        ) : (
          <img
            src={
              "https://media.themoviedb.org/t/p/w300_and_h450_bestv2" +
              cardActor.profile_path
            }
            alt=""
          />
        )}
        <h1>{cardActor.name}</h1>
      </div>
    </div>
  );
}

export default CardActor;
