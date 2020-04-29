import React from "react";
import one from "../Components/images/creamEggEaster.jpg";
import two from "../Components/images/seasonalBrownie.jpg";
import four from "../Components/images/creamEggBrownie.jpg";
import five from "../Components/images/funkyFreakshake.jpg";
import six from "../Components/images/halloween-shake.jpg";
import DBox from "../Components/images/seasonalDBox.jpg";
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
            <li className="ProductName">HALLOWEEN SPOOKY SHAKES</li>
          </ul>
        </div>

        <div>
          <img className="offers" src={four} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">CREAM EGG BROWNIES</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={five} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">MALTEASTER FREAKSHAKE</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={six} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">BLUE VS RED SHAKE</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={two} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">CREAM EGG/MINI EGG BROWNIES</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={one} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">CHOCOLATE EASTER BOWLS</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={purple} alt="ShakeItUpOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">PARMA VIOLETS SHAKE</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={mini} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">WHITE CHOCOLATE DUTCH PANCAKES</li>
          </ul>
        </div>
        <div>
          <img className="offers" src={DBox} alt="DessertsOffer"></img>
          <ul className="ProductUL">
            <li className="ProductName">CHRISTMAS DESSERT BOX</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default SeasonalProds;
