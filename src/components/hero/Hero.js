import React from "react";
import "../hero/Hero.scss";
import { useMainContext } from "../../contexts/Contexts";
import { NavLink, useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const { sertSeachValue } = useMainContext();
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content">
          <NavLink to={"/"}>
            <div style={{ fontSize: "25px" }} className="hero__logo">
              MOVIE
            </div>
          </NavLink>
          <nav className="hero__nav">
            <li style={{ listStyle: "none" }}>
              <input
                onChange={(e) => sertSeachValue(e.target.value)}
                type="text"
                placeholder="seach"
              />
              <button onClick={() => navigate("/search")}>search</button>
            </li>
            <NavLink to={"/"}>
              <li className="hero__li">
                <a href="#">Home</a>
              </li>
            </NavLink>
            <NavLink to={"/moviePopular"}>
              <li className="hero__li">
                <a href="#">Popular</a>
              </li>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Hero;
