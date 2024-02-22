import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const myContexts = createContext();

export const useMainContext = () => useContext(myContexts);

function Contexts({ children }) {
  const [seachValue, sertSeachValue] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const [actorDetails, setActorDetails] = useState([]);
  const [infoActor, setInfoActor] = useState([]);
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesPopular, setPagesPopular] = useState([]);
  const [cardInfo, setCardInfo] = useState(0);
  const [cardInfo1, setCardInfo1] = useState({});
  const [popular, setPopular] = useState([]);
  const apiKey = "45d1d56fc54beedb6c0207f9ac6cab7c";
  const apiPoster = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
  // const apiActor = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`;
  // const apiSearch = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${movieName}`;
  //   const apiPoster = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
  useEffect(() => {
    fetch(apiPoster)
      .then((res) => res.json())
      .then((res) => setCard(res.results));
  }, [page]);
  //   useEffect(() => {
  //     axios(
  //       `https://api.themoviedb.org/3/person/${cardInfo}?api_key=${apiKey}&language=en-US`
  //     ).then((res) => {
  //       console.log(res);
  //       setCardInfo1(res.data);
  //     });
  //   }, [cardInfo1]);
  function getCardInfo(id) {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    ).then((res) => {
      setCardInfo1(res.data);
    });
  }
  function getCardActor(id) {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    ).then((res) => {
      setInfoActor(res.data.cast);
    });
  }
  // console.log(infoActor);
  // console.log(cardInfo1);
  function topPAtedFunction(page) {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=45d1d56fc54beedb6c0207f9ac6cab7c&language=en-US&page=${page}`
    ).then((res) => setPagesPopular(res.data.results));
  }
  function actorAxios(id) {
    axios(
      `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`
    ).then((res) => setActorDetails(res.data));
  }
  function searchValueAxios(name) {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}`
    ).then((res) => setSearchRes(res.data.results));
  }
  // aziret xaxaxax
  console.log();
  let values = {
    card,
    page,
    setPage,
    cardInfo1,
    setCardInfo,
    setCardInfo1,
    getCardInfo,
    topPAtedFunction,
    pagesPopular,
    getCardActor,
    infoActor,
    actorAxios,
    actorDetails,
    sertSeachValue,
    seachValue,
    searchRes,
    searchValueAxios,
  };
  return <myContexts.Provider value={values}>{children}</myContexts.Provider>;
}
export default Contexts;
