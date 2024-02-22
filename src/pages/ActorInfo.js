import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMainContext } from "../contexts/Contexts";
import Hero from "../components/hero/Hero";
import "../styles/Actor.scss";
import { Button } from "antd";
function ActorInfo() {
  const navigate = useNavigate();
  // let truees = true
  const { actorDetails, actorAxios } = useMainContext();
  const [lengthBio, setLenghtBio] = useState(120);
  const { id } = useParams();
  useEffect(() => {
    actorAxios(id);
  }, [id]);
  console.log(actorDetails);
  return (
    <>
      <Hero />
      <div className="actorInfo">
        <div className="container">
          <Button
            onClick={() => navigate("/")}
            style={{
              marginBottom: "2pc",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            type="primary"
          >
            <img
              style={{ width: "20px" }}
              src="https://cdn-icons-png.flaticon.com/128/3585/3585896.png"
              alt=""
            />{" "}
            back
          </Button>
          <div className="actorContent">
            <div className="actorImages">
              {actorDetails.profile_path === null ? (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROaHFA3JbJGxEbsw6t1xui2bzVIqNtAUGTnS29jnBUWQ&s"
                  alt=""
                />
              ) : (
                <img
                  src={
                    "https://media.themoviedb.org/t/p/w300_and_h450_bestv2" +
                    actorDetails.profile_path
                  }
                  alt=""
                />
              )}
            </div>
            <div className="actorInfo">
              <h1>{actorDetails.name}</h1>
              <h3>
                Birthday :{" "}
                {actorDetails.birthday !== null
                  ? actorDetails.birthday
                  : "--/--/--"}
              </h3>
              <h3>Place of irth : {actorDetails.place_of_birth}</h3>
              <p>
                Biography : <br /> {actorDetails.biography}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActorInfo;
