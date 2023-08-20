import React from "react";
import Promo from "./Main/Promo/Promo";
import Navtab from "./Main/NavTab/NavTab";
import AboutProject from "./Main/AboutProject/AboutProject";
import Techs from "./Main/Techs/Techs";
import AboutMe from "./Main/AboutMe/AboutMe";
import Portfolio from "./Main/Portfolio/Portfolio";
import Header from "../Header/header";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <div className="position-content">
        <Header />
        <Promo />
      </div>
      <Navtab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Main;
