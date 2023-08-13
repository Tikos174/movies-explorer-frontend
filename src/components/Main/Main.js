import React from "react";
import Promo from "./Main/Promo/Promo";
import Navtab from "./Main/NavTab/NavTab";
import AboutProject from "./Main/AboutProject/AboutProject";
import Techs from "./Main/Techs/Techs";
import AboutMe from "./Main/AboutMe/AboutMe";
import Portfolio from "./Main/Portfolio/Portfolio";
import Header from "../Header/header";

function Main() {
  return (
    <>
      <Header />
      <Promo />
      <Navtab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  );
}

export default Main;
