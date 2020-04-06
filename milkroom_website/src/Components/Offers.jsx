import React from "react";
import homeAlone from "../Components/images/HomeAlone.jpg";
import shakeItUp from "../Components/images/SHAKEITUP.JPG";
import waffleWed from "../Components/images/WaffleWednesday.jpg";
import desserts from "../Components/images/Desserts.jpg";

const Offers = () => {
  return (
    <main>
      <h1 className="Title">Offers</h1>
      <div className="divOne">
        <img className="homeAlone" src={homeAlone} alt="HomeAloneOffer"></img>
        <h2>HOME ALONE</h2>
      </div>
      <div className="divTwo">
        <img className="homeAlone" src={shakeItUp} alt="ShakeItUpOffer"></img>
      </div>
      <div className="divOne">
        <img
          className="homeAlone"
          src={waffleWed}
          alt="WaffleWednesdayOffer"
        ></img>
      </div>
      <div className="divTwo">
        <img className="homeAlone" src={desserts} alt="DessertsOffer"></img>
      </div>
    </main>
  );
};

export default Offers;
