import React from "react";
import Popup from "../Components/Popup";
import DesertAdder from "./DessertBox";
import im from "../Components/images/cookie.jpg";
import brownie from "../Components/images/brownie.png";
import terrys from "../Components/images/terryschoc-brownie.png";
import KinderBrownie from "../Components/images/kinderBueno-brownie.png";
import fudgeBrownie from "../Components/images/fudge-bwonie.png";
import crispyMM from "../Components/images/m&m brownie.png";
import lotusBrownie from "../Components/images/lotus-brownie.png";
import lotusSlice from "../Components/images/lotus-slice.png";
import oreoDonut from "../Components/images/oreo-donut.png";
import milkCookie from "../Components/images/milkcookie.png";
import doubleChocCookie from "../Components/images/choc-cookie.png";
import whiteCookie from "../Components/images/white-cookie.png";
const Orders = () => {
  return (
    <main>
      <h1>Orders</h1>
      <h2>Desert Boxes</h2>
      <p>We hand-make all our desserts freshly in store for you to enjoy.</p>
      <h4>
        Choose your favourite flavours and create your very own dessert box!
      </h4>
      <form className="ordersForm">
        <label>
          Step One: Select your size
          <select>
            <option value="Box of 4">Box of 4 - £10</option>
            <option value="Box of 5">Box of 5 - £12</option>
            <option value="Box of 6">Box of 6 - £14</option>
          </select>
        </label>
        <label>Step Two: Select your flavours</label>
        <div className="desertTiles">
          <div id="DesertGrid">
            <DesertAdder />
            <img className="DesertIcons" src={brownie} alt="dessert_Icon"></img>
            <p className="desertTitle">Chocolate Brownie</p>
          </div>
          <div id="DesertGrid">
            <DesertAdder />
            <img className="DesertIcons" src={terrys} alt="dessert_Icon"></img>
            <p className="desertTitle">Terry’s Chocolate Orange Brownie</p>
          </div>
          <div id="DesertGrid">
            <DesertAdder />
            <img
              className="DesertIcons"
              src={KinderBrownie}
              alt="dessert_Icon"
            ></img>
            <p className="desertTitle">Kinder Bueno Chocolate Brownie</p>
          </div>
          <div id="DesertGrid">
            <DesertAdder />
            <img
              className="DesertIcons"
              src={fudgeBrownie}
              alt="dessert_Icon"
            ></img>
            <p className="desertTitle">Chocolate Fudge Brownie</p>
          </div>
        </div>
        <div className="desertTiles">
          <div id="DesertGrid">
            <DesertAdder />
            <img
              className="DesertIcons"
              src={crispyMM}
              alt="dessert_Icon"
            ></img>
            <p className="desertTitle">Crispy M&M Brownie</p>
          </div>
          <div id="DesertGrid">
            <DesertAdder />
            <img
              className="DesertIcons"
              src={lotusBrownie}
              alt="dessert_Icon"
            ></img>
            <p className="desertTitle">Lotus Biscoff Brownie</p>
          </div>
          <div id="DesertGrid">
            <DesertAdder />
            <img
              className="DesertIcons"
              src={lotusSlice}
              alt="dessert_Icon"
            ></img>
            <p className="desertTitle">Lotus Biscoff Slice</p>
          </div>
          <div id="DesertGrid">
            <DesertAdder />
            <img
              className="DesertIcons"
              src={oreoDonut}
              alt="dessert_Icon"
            ></img>
            <p className="desertTitle">Chocolate filled Oreo Donut</p>
          </div>
        </div>
        <div className="desertTiles">
          <div id="DesertGrid">
            <DesertAdder />
            <img
              className="DesertIcons"
              src={milkCookie}
              alt="desert_Icon"
            ></img>
            <p className="desertTitle">Milk Chocolate Chip Cookie</p>
          </div>
          <div id="DesertGrid">
            <DesertAdder />
            <img
              className="DesertIcons"
              src={doubleChocCookie}
              alt="dessert_Icon"
            ></img>
            <p className="desertTitle">Double Chocolate Chip Cookie</p>
          </div>
          <div id="DesertGrid">
            <DesertAdder />
            <img
              className="DesertIcons"
              src={whiteCookie}
              alt="dessert_Icon"
            ></img>
            <p className="desertTitle">White Chocolate Chip Cookie</p>
          </div>
          <div id="DesertGrid">
            <DesertAdder />
            <img
              className="DesertIcons"
              src={whiteCookie}
              alt="dessert_Icon"
            ></img>
            <p className="desertTitle">White Chocolate Chip Cookie</p>
          </div>
        </div>

        {/* <form className="ordersForm">
        <label>
          Step One: Select your size
          <select>
            <option value="Box of 4">Box of 4 - £10</option>
            <option value="Box of 5">Box of 5 - £12</option>
            <option value="Box of 6">Box of 6 - £14</option>
          </select>
        </label>
        <label>
          Step Two: Select your flavours
          <select>
            <option value="Double Chocolate Brownie">
              Double Chocolate Brownie
            </option>
            <option value="Terry’s Chocolate Orange Brownie">
              Terry’s Chocolate Orange Brownie
            </option>
            <option value=" Kinder Bueno Chocolate Brownie">
              Kinder Bueno Chocolate Brownie
            </option>
            <option value="Chocolate Fudge Brownie">
              Chocolate Fudge Brownie
            </option>
            <option value="Crispy M&M Brownie ">Crispy M&M Brownie </option>
            <option value="Lotus Biscoff Brownie">Lotus Biscoff Brownie</option>
            <option value="Lotus Biscoff Slice">Lotus Biscoff Slice</option>
            <option value="Chocolate filled Oreo Donut">
              Chocolate filled Oreo Donut
            </option>
            <option value="Milk Chocolate Chip Cookie">
              Milk Chocolate Chip Cookie
            </option>
            <option value="Double Chocolate Chip Cookie">
              Double Chocolate Chip Cookie
            </option>
            <option value="White Chocolate Chip Cookie ">
              White Chocolate Chip Cookie
            </option>
          </select>
        </label> */}
        <label>
          Step Three: Delivery or Collection
          <select>
            <option value="Collection">Collection(Free)</option>
            <option value="Delivery">Delivery - £2.50</option>
          </select>
        </label>
        <p>
          PLEASE NOTE THAT ALL ORDERS MUST BE PLACES AT LEAST 24 HOURS BEFORE
          YOU WANT TO RECEIVE YOUR ORDER this is due to all products being made
          fresh in store. YOUR ORDER WILL ONLY BE CONFIRMED ONCE A MEMBER OF
          STAFF CONTACTS YOU TO TAKE PAYMENT OVER THE PHONE
        </p>
        <input
          type="radio"
          name="Confirm"
          value="Confirm"
          required="true"
        ></input>
        <label for="Confirm">Accept</label>
        <label className="formOption">
          Name:
          <input type="text" name="name" placeholder="Name" />
        </label>
        <label className="formOption">
          Telephone Number:
          <input
            type="text"
            name="phoneNumber"
            placeholder="Telephone Number"
          />
        </label>
        <input type="submit" value="Place Order" disabled="true" />
      </form>
      <Popup />
    </main>
  );
};

export default Orders;
