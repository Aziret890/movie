import React from "react";
import Hero from "../components/hero/Hero";
import Header from "../components/header/Header";
import SideBarMother from "../components/sideBar/sideBarMother";

function Home() {
  return (
    <>
      <Hero />
      <Header />
      <SideBarMother />
    </>
  );
}

export default Home;
