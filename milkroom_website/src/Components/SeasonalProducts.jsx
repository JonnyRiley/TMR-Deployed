import React from "react";
import one from "../Components/images/creamEggEaster.jpg";
import two from "../Components/images/seasonalBrownie.jpg";
import three from "../Components/images/sundaes.jpg";
import four from "../Components/images/creamEggBrownie.jpg";
import five from "../Components/images/funkyFreakshake.jpg";
import six from "../Components/images/halloween-shake.jpg";
import DBox from "../Components/images/seasonalDBox.jpg";
import eight from "../Components/images/sundaes.jpg";
import mini from "../Components/images/7.jpg";
import purple from "../Components/images/purpleShake.jpg";

import twelve from "../Components/images/pumpkin.jpg";

const SeasonalProds = () => {
  return (
    <main className="Products">
      <h1 className="ProductsTitle">SEASONAL TREATS</h1>
      <div className="div1">
        <div>
          <img className="offers" src={twelve} alt="ShakeItUpOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">Breakfast Waffle!</li>
          </ul>
        </div>

        <div>
          <img className="offers" src={four} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">Mini Eggs Cookie Skillet</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={five} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">Choccy Fondue!</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={six} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">Chocolate and Oreo Brownie</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={two} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">Mini Doughnuts</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={one} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName"> Strawberry cookiedough</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={purple} alt="ShakeItUpOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">Breakfast Waffle!</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={mini} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">Mini Doughnuts</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={DBox} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">Mini Doughnuts</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default SeasonalProds;
