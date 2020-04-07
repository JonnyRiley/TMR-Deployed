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
        <ul>
          <h1>Home Alone Deal</h1>
          <li>Delivery Only</li>
        </ul>
      </div>
      <div className="divTwo">
        <img className="homeAlone" src={shakeItUp} alt="ShakeItUpOffer"></img>
        <ul>
          <h1>Shake It Up Deal</h1>
          <li>Delivery Only</li>
        </ul>
      </div>
      <div className="divOne">
        <img
          className="homeAlone"
          src={waffleWed}
          alt="WaffleWednesdayOffer"
        ></img>
        <ul>
          <h1>Waffle Wednesday Deal</h1>
          <li>Delivery Only</li>
        </ul>
      </div>
      <div className="divTwo">
        <img className="homeAlone" src={desserts} alt="DessertsOffer"></img>
        <ul>
          <h1>milkroom Desserts</h1>
          <li>Delivery Only</li>
        </ul>
      </div>
    </main>
  );
};

export default Offers;
