import React from "react";
import one from "../Components/images/1.jpg";
import two from "../Components/images/2.jpg";
import three from "../Components/images/3.jpg";
import four from "../Components/images/4.jpg";
import five from "../Components/images/5.jpg";
import six from "../Components/images/6.jpg";
import seven from "../Components/images/7.jpg";
import eight from "../Components/images/8.jpg";
import nine from "../Components/images/9.jpg";
import ten from "../Components/images/10.jpg";
import eleven from "../Components/images/11.jpg";
import twelve from "../Components/images/12.jpg";

const Offers = () => {
  return (
    <main>
      <h1 className="Title">Products</h1>
      <div className="div1">
        <img className="homeAlone" src={one} alt="HomeAloneOffer"></img>
        <img className="shakeItUp" src={two} alt="ShakeItUpOffer"></img>
        <img className="waffleWed" src={three} alt="WaffleWednesdayOffer"></img>
        <img className="desserts" src={four} alt="DessertsOffer"></img>
        <img className="homeAlone" src={five} alt="DessertsOffer"></img>
        <img className="shakeItUp" src={six} alt="DessertsOffer"></img>
        <img className="waffleWed" src={seven} alt="DessertsOffer"></img>
        <img className="desserts" src={eight} alt="DessertsOffer"></img>
        <img className="homeAlone" src={nine} alt="DessertsOffer"></img>
        <img className="shakeItUp" src={ten} alt="DessertsOffer"></img>
        <img className="waffleWed" src={eleven} alt="DessertsOffer"></img>
        <img className="desserts" src={twelve} alt="DessertsOffer"></img>
      </div>
    </main>
  );
};

export default Offers;
