import React, { Component } from "react";
import stepOne from "../Components/images/stepOne.png";
import DesertAdder from "./DessertBox";
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
import lotusDonut from "../Components/images/lotus-donut.png";
class Orders extends Component {
  state = {
    boxSetAmount: 4,
    total: 0,
    minusDisabled: true,
    plusDisabled: false,
  };
  render() {
    return (
      <main className="ordersDiv">
        <h1 className="ProductsTitle">DESSERT BOXES</h1>
        {/* <h2 className="aboutH2Title">Desert Boxes</h2> */}
        <form className="ordersForm">
          <div className="stepOneForm">
            <h2 className="ProductsH2">
              STEP ONE: SELECT YOUR DESSERT BOX SIZE
            </h2>

            <h2 className="ordersH2Title">
              We hand-make all our desserts freshly in store for you to enjoy.
            </h2>
            <h3 className="desertH2Title">
              Choose your favourite flavours and create your very own dessert
              box!
            </h3>
            {/* <div className="orderFlex">
          <img className="stepOne" src={stepOne} alt="stepOne"></img>
        </div> */}
            {/* <form className="ordersForm"> */}
            <label className="ordersLabel">
              SELECT YOUR SIZE
              <select
                className="formInput"
                onChange={(e) =>
                  this.handleChange(e.target.value, "boxSetAmount")
                }
              >
                <option value={4}>Box of 4 - £10.00</option>
                <option value={5}>Box of 5 - £12.00</option>
                <option value={6}>Box of 6 - £14.00</option>
              </select>
            </label>
          </div>
          {/* <div className="orderFlex"> */}
          {/* <img className="stepOne" src={stepOne} alt="stepOne"></img> */}
          {/* </div> */}
          <div className="stepTwoForm">
            <h2 className="ProductsH2">STEP TWO: SELECT YOUR FLAVOURS</h2>
            {/* <label className="ordersLabel">Step Two: Select your flavours</label> */}
            <div className="desertTiles">
              <div id="DesertGrid">
                <DesertAdder
                  minusDisabled={this.state.minusDisabled}
                  plusDisabled={this.state.plusDisabled}
                  total={this.state.total}
                  boxSetAmount={this.state.boxSetAmount}
                  handleTotal={this.handleTotal}
                />
                <img
                  className="DesertIcons"
                  src={brownie}
                  alt="dessert_Icon"
                ></img>
                <p className="desertTitle">Chocolate Brownie</p>
              </div>
              <div id="DesertGrid">
                <DesertAdder
                  minusDisabled={this.state.minusDisabled}
                  plusDisabled={this.state.plusDisabled}
                  total={this.state.total}
                  boxSetAmount={this.state.boxSetAmount}
                  handleTotal={this.handleTotal}
                />
                <img
                  className="DesertIcons"
                  src={terrys}
                  alt="dessert_Icon"
                ></img>
                <p className="desertTitle">Terry’s Chocolate Orange Brownie</p>
              </div>
              <div id="DesertGrid">
                <DesertAdder
                  minusDisabled={this.state.minusDisabled}
                  plusDisabled={this.state.plusDisabled}
                  total={this.state.total}
                  boxSetAmount={this.state.boxSetAmount}
                  handleTotal={this.handleTotal}
                />
                <img
                  className="DesertIcons"
                  src={KinderBrownie}
                  alt="dessert_Icon"
                ></img>
                <p className="desertTitle">Kinder Bueno Chocolate Brownie</p>
              </div>
              <div id="DesertGrid">
                <DesertAdder
                  minusDisabled={this.state.minusDisabled}
                  plusDisabled={this.state.plusDisabled}
                  total={this.state.total}
                  boxSetAmount={this.state.boxSetAmount}
                  handleTotal={this.handleTotal}
                />
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
                <DesertAdder
                  minusDisabled={this.state.minusDisabled}
                  plusDisabled={this.state.plusDisabled}
                  total={this.state.total}
                  boxSetAmount={this.state.boxSetAmount}
                  handleTotal={this.handleTotal}
                />
                <img
                  className="DesertIcons"
                  src={crispyMM}
                  alt="dessert_Icon"
                ></img>
                <p className="desertTitle">Crispy M&M Brownie</p>
              </div>
              <div id="DesertGrid">
                <DesertAdder
                  minusDisabled={this.state.minusDisabled}
                  plusDisabled={this.state.plusDisabled}
                  total={this.state.total}
                  boxSetAmount={this.state.boxSetAmount}
                  handleTotal={this.handleTotal}
                />
                <img
                  className="DesertIcons"
                  src={lotusBrownie}
                  alt="dessert_Icon"
                ></img>
                <p className="desertTitle">Lotus Biscoff Brownie</p>
              </div>
              <div id="DesertGrid">
                <DesertAdder
                  minusDisabled={this.state.minusDisabled}
                  plusDisabled={this.state.plusDisabled}
                  total={this.state.total}
                  boxSetAmount={this.state.boxSetAmount}
                  handleTotal={this.handleTotal}
                />
                <img
                  className="DesertIcons"
                  src={lotusSlice}
                  alt="dessert_Icon"
                ></img>
                <p className="desertTitle">Lotus Biscoff Slice</p>
              </div>
              <div id="DesertGrid">
                <DesertAdder
                  minusDisabled={this.state.minusDisabled}
                  plusDisabled={this.state.plusDisabled}
                  total={this.state.total}
                  boxSetAmount={this.state.boxSetAmount}
                  handleTotal={this.handleTotal}
                />
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
                <DesertAdder
                  minusDisabled={this.state.minusDisabled}
                  plusDisabled={this.state.plusDisabled}
                  total={this.state.total}
                  boxSetAmount={this.state.boxSetAmount}
                  handleTotal={this.handleTotal}
                />
                <img
                  className="DesertIcons"
                  src={milkCookie}
                  alt="desert_Icon"
                ></img>
                <p className="desertTitle">Milk Chocolate Chip Cookie</p>
              </div>
              <div id="DesertGrid">
                <DesertAdder
                  minusDisabled={this.state.minusDisabled}
                  plusDisabled={this.state.plusDisabled}
                  total={this.state.total}
                  boxSetAmount={this.state.boxSetAmount}
                  handleTotal={this.handleTotal}
                />
                <img
                  className="DesertIcons"
                  src={doubleChocCookie}
                  alt="dessert_Icon"
                ></img>
                <p className="desertTitle">Double Chocolate Chip Cookie</p>
              </div>
              <div id="DesertGrid">
                <DesertAdder
                  minusDisabled={this.state.minusDisabled}
                  plusDisabled={this.state.plusDisabled}
                  total={this.state.total}
                  boxSetAmount={this.state.boxSetAmount}
                  handleTotal={this.handleTotal}
                />
                <img
                  className="DesertIcons"
                  src={whiteCookie}
                  alt="dessert_Icon"
                ></img>
                <p className="desertTitle">White Chocolate Chip Cookie</p>
              </div>
              <div id="DesertGrid">
                <DesertAdder
                  minusDisabled={this.state.minusDisabled}
                  plusDisabled={this.state.plusDisabled}
                  total={this.state.total}
                  boxSetAmount={this.state.boxSetAmount}
                  handleTotal={this.handleTotal}
                />
                <img
                  className="DesertIcons"
                  src={lotusDonut}
                  alt="dessert_Icon"
                ></img>
                <p className="desertTitle">Lotus Biscoff Donut</p>
              </div>
            </div>
            <p className="orderTotal">
              {this.handleOrder()}
              {/* {this.state.total}/{this.state.boxSetAmount} */}
            </p>
            <div className="orderFlex">
              {/* <img className="stepOne" src={stepOne} alt="stepOne"></img> */}
            </div>
          </div>
          <div className="stepOneForm">
            <h2 className="ProductsH2">STEP THREE: DELIVERY OPTIONS</h2>
            <label className="ordersLabel">
              {/* Step Three: Delivery or Collection */}
              <select className="formInput">
                <option value="Collection">Collection - Free</option>
                <option value="Delivery">Delivery - £2.50</option>
              </select>
            </label>
            <p className="centeredP">
              PLEASE NOTE THAT ALL ORDERS MUST BE PLACES AT LEAST 24 HOURS
              BEFORE YOU WANT TO RECEIVE YOUR ORDER THIS IS DUE TO ALL PRODUCTS
              BEING MADE FRESH IN STORE. YOUR ORDER WILL ONLY BE CONFIRMED ONCE
              A MEMBER OF STAFF CONTACTS YOU TO TAKE PAYMENT OVER THE PHONE
            </p>
            <label className="ordersLabel" for="Confirm">
              {" "}
              <input
                className="ordersInput"
                type="radio"
                name="Confirm"
                value="Confirm"
                required
              ></input>
              ACCEPT
            </label>
          </div>
          <div className="stepOneForm">
            <h2 className="ProductsH2">STEP FOUR: YOUR DETAILS</h2>
            <label className="ordersLabelName">
              NAME:
              <input
                className="orderInput"
                type="text"
                name="name"
                placeholder="Name"
              />
            </label>
            <label className="ordersLabel1">
              TELEPHONE:
              <input
                className="orderInputPhone"
                type="text"
                name="phoneNumber"
                placeholder="Telephone Number"
              />
            </label>

            <div className="divSubmit">
              <button
                className="navButtonParty"
                type="submit"
                value="Place Order"
                disabled="true"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </main>
    );
  }
  handleChange = (text, key) => {
    console.log(text, key);
    this.setState({ [key]: text });
  };
  handleTotal = (inc_amount) => {
    console.log(inc_amount);
    const { boxSetAmount } = this.state;
    this.setState((currentState) => {
      if (currentState.total === boxSetAmount - 1) {
        return {
          total: currentState.total + inc_amount,
          plusDisabled: true,
          minusDisabled: false,
        };
      }
      return {
        total: currentState.total + inc_amount,
        plusDisabled: false,
        minusDisabled: false,
      };
      // if (currentState.total === boxSetAmount - 1) {
      //   return {
      //     total: currentState.total + inc_amount,
      //     plusDisabled: true,
      //     minusDisabled: false,
      //   };
      // } else if (this.state.total > 0 && this.state.total < boxSetAmount) {
      //   return {
      //     total: this.state.total + inc_amount,
      //     plusDisabled: false,
      //     minusDisabled: false,
      //   };
      // } else if (this.state.total === 0 - 1) {
      //   return {
      //     total: currentState.total + inc_amount,
      //     minusDisabled: true,
      //     plusDisabled: false,
      //   };
      // } else
      //   return {
      //     total: this.state.total + inc_amount,
      //     minusDisabled: false,
      //     plusDisabled: false,
      //   };
    });
  };
  handleOrder() {
    const { boxSetAmount, total } = this.state;
    if (total === boxSetAmount) {
      return (
        <div className="handleOrderDiv">
          <p className="handleOrder">You're all set!</p>
        </div>
      );
      // } else if (){
    } else {
      return (
        <div className="handleOrderDiv">
          <p className="handleOrder">YOU NEED {boxSetAmount - total} MORE!</p>
        </div>
      );
    }
  }
}
export default Orders;
