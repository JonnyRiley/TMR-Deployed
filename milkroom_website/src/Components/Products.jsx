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

const Products = () => {
  return (
    <main className="Products">
      <h1 className="Title">Products</h1>
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

export default Products;
