import React from "react";
import one from "../Components/images/greenShake.jpg";
import two from "../Components/images/yellowShake.jpg";
import three from "../Components/images/sundaes.jpg";
import four from "../Components/images/creamEggBrownie.jpg";
import five from "../Components/images/funkyFreakshake.jpg";
import six from "../Components/images/halloween-shake.jpg";
import seven from "../Components/images/hallooween-shakes.jpg";
import eight from "../Components/images/sundaes.jpg";
import nine from "../Components/images/candyShake2.jpg";
import ten from "../Components/images/largeChocFreakshake.jpg";
import eleven from "../Components/images/oreoBrownie.jpg";
import twelve from "../Components/images/pumpkin.jpg";

const SeasonalProds = () => {
  return (
    <main className="Products">
      <h1 className="Title">Seasonal Products</h1>
      <div className="div1">
        <div>
          <img className="offers" src={one} alt="homeAloneOffer"></img>
          <ul>
            <li>Choccy Milkshake!</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={two} alt="ShakeItUpOffer"></img>
          <ul>
            <li>Breakfast Waffle!</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={three} alt="WaffleWednesdayOffer"></img>
          <ul>
            <li>MilkyBar Waffle</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={four} alt="DessertsOffer"></img>
          <ul>
            <li>Mini Eggs Cookie Skillet</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={five} alt="DessertsOffer"></img>
          <ul>
            <li>Choccy Fondue!</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={six} alt="DessertsOffer"></img>
          <ul>
            <li>Chocolate and Oreo Brownie</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={seven} alt="DessertsOffer"></img>
          <ul>
            <li>Mini Doughnuts</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={eight} alt="DessertsOffer"></img>
          <ul>
            <li> Strawberry cookiedough</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={nine} alt="DessertsOffer"></img>
          <ul>
            <li>Selection of cookies and brownies</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={ten} alt="DessertsOffer"></img>
          <ul>
            <li>Ferror Roché milkshake</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={eleven} alt="DessertsOffer"></img>
          <ul>
            <li>Strawberry and Banana Pancakes</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={twelve} alt="DessertsOffer"></img>
          <ul>
            <li>Oreo Waffle</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default SeasonalProds;
