import React from "react";
import DesertAdder from "./DessertBox";
import brownie from "../Components/images/brownie.png";
import Terrys from "../Components/images/terryschoc-brownie.png";
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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      telephone: "",
      deliveryMethod: "Collection",
      boxSetAmount: 4,
      total: 0,
      minusDisabled: true,
      plusDisabled: false,
      brownie: 0,
      terrysChocBrownie: 0,
      brownieKinderBuenoBrownie: 0,
      fudgeBrownie: 0,
      crispyMMBrownie: 0,
      lotusBiscoffBrownie: 0,
      lotusBiscoffSlice: 0,
      oreoDonut: 0,
      milkCookie: 0,
      doubleChocCookie: 0,
      whiteCookie: 0,
      lotusDonut: 0,
    };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "dessertBoxes", ...this.state }),
    })
      .then(() =>
        alert(
          "Thank You For Your Order. We will be in touch as soon as possible!"
        )
      )
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (text, key) => {
    console.log(text, key);
    this.setState({ [key]: text });
  };

  handleTotal = (inc_amount, value) => {
    console.log(inc_amount, value, "INC AMNT", "VALUE");
    const { boxSetAmount } = this.state;
    this.setState((currentState) => {
      if (currentState.total === boxSetAmount - 1) {
        return {
          total: currentState.total + inc_amount,
          plusDisabled: true,
          minusDisabled: false,
        };
      } else if (currentState.total < boxSetAmount - 1)
        return {
          total: currentState.total + inc_amount,
          plusDisabled: false,
          minusDisabled: false,
        };
      return {
        total: currentState.total + inc_amount,
        plusDisabled: false,
        minusDisabled: false,
      };
    });
  };

  handleOrder() {
    const { boxSetAmount, total } = this.state;
    if (total === boxSetAmount) {
      return (
        <div className="handleOrderDiv">
          <p className="handleOrder">YOU'RE ALL SET!</p>
        </div>
      );
    } else {
      return (
        <div className="handleOrderDiv">
          <p className="handleOrder">
            SELECT {boxSetAmount - total} MORE DESSERTS!
          </p>
        </div>
      );
    }
  }
  handlePlus = (inc_Amount, value) => {
    console.log(inc_Amount, value, "VALUE");

    this.setState({ [value]: inc_Amount + 1 });
  };
  handleMinus = (inc_Amount, value) => {
    console.log(value, "VALUE");

    this.setState({ [value]: inc_Amount - 1 });
  };

  render() {
    return (
      <main className="ordersDiv">
        <h1 className="ProductsTitle">DESSERT BOXES</h1>

        <form onSubmit={this.handleSubmit}>
          <p>
            {" "}
            <div className="stepTwoForm">
              <h2 className="ProductsH2">STEP ONE: SELECT YOUR BOX SIZE</h2>
              <h3 className="ordersH2">
                At themilkroom our passion is desserts. We wanted to make it
                easy for you to order all of our popular desserts online. Your
                dessert box can have 4, 5 or 6 items and you choose what
                products you want inside. To make sure your order is secure we
                take payment over the phone, once you have selected your items a
                member of the team will call you at your convenience. Your
                dessert box can be delivered to you or collected in store - the
                choice is yours. We hope you enjoy.{" "}
              </h3>
              <label className="ordersLabel">
                SELECT YOUR SIZE
                <select
                  className="formInput"
                  name="boxSetAmount"
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
          </p>

          <p>
            <div className="stepTwoForm">
              <h2 className="ProductsH2">
                STEP TWO: SELECT {this.state.boxSetAmount} FLAVOURS
              </h2>
              <div className="allDesertTiles">
                <div className="desertTiles">
                  <div id="DesertGrid" value="brownie">
                    <DesertAdder
                      minusDisabled={this.state.minusDisabled}
                      plusDisabled={this.state.plusDisabled}
                      total={this.state.total}
                      boxSetAmount={this.state.boxSetAmount}
                      handleTotal={this.handleTotal}
                      value="brownie"
                      handlePlus={this.handlePlus}
                      handleMinus={this.handleMinus}
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
                      handleOrderItems={this.handleOrderItems}
                      value="terrysChocBrownie"
                      handlePlus={this.handlePlus}
                      handleMinus={this.handleMinus}
                    />
                    <img
                      className="DesertIcons"
                      src={Terrys}
                      alt="dessert_Icon"
                    ></img>
                    <p className="desertTitle">
                      Terry’s Chocolate Orange Brownie
                    </p>
                  </div>
                  <div id="DesertGrid">
                    <DesertAdder
                      minusDisabled={this.state.minusDisabled}
                      plusDisabled={this.state.plusDisabled}
                      total={this.state.total}
                      boxSetAmount={this.state.boxSetAmount}
                      handleTotal={this.handleTotal}
                      value="kinderBuenoBrownie"
                      handlePlus={this.handlePlus}
                      handleMinus={this.handleMinus}
                    />
                    <img
                      className="DesertIcons"
                      src={KinderBrownie}
                      alt="dessert_Icon"
                    ></img>
                    <p className="desertTitle">
                      Kinder Bueno Chocolate Brownie
                    </p>
                  </div>
                  <div id="DesertGrid">
                    <DesertAdder
                      minusDisabled={this.state.minusDisabled}
                      plusDisabled={this.state.plusDisabled}
                      total={this.state.total}
                      boxSetAmount={this.state.boxSetAmount}
                      handleTotal={this.handleTotal}
                      value="fudgeBrownie"
                      handlePlus={this.handlePlus}
                      handleMinus={this.handleMinus}
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
                      value="crispyMMBrownie"
                      handlePlus={this.handlePlus}
                      handleMinus={this.handleMinus}
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
                      value="lotusBiscoffBrownie"
                      handlePlus={this.handlePlus}
                      handleMinus={this.handleMinus}
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
                      value="lotusBiscoffSlice"
                      handlePlus={this.handlePlus}
                      handleMinus={this.handleMinus}
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
                      value="oreoDonut"
                      handlePlus={this.handlePlus}
                      handleMinus={this.handleMinus}
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
                      value="milkCookie"
                      handlePlus={this.handlePlus}
                      handleMinus={this.handleMinus}
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
                      value="doubleChocCookie"
                      handlePlus={this.handlePlus}
                      handleMinus={this.handleMinus}
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
                      value="whiteCookie"
                      handlePlus={this.handlePlus}
                      handleMinus={this.handleMinus}
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
                      value="lotusDonut"
                      handlePlus={this.handlePlus}
                      handleMinus={this.handleMinus}
                    />
                    <img
                      className="DesertIcons"
                      src={lotusDonut}
                      alt="dessert_Icon"
                    ></img>
                    <p className="desertTitle">Lotus Biscoff Donut</p>
                  </div>
                </div>
              </div>
            </div>
          </p>
          <p className="orderTotal">{this.handleOrder()}</p>
          <p>
            <div className="stepOneForm">
              <h2 className="ProductsH2">STEP THREE: DELIVERY OPTIONS</h2>
              <label
                className="ordersLabel"
                name="deliveryMethod"
                onChange={(e) =>
                  this.handleChange(e.target.value, "deliveryMethod")
                }
              >
                <select className="formInput" name="deliveryMethod">
                  <option value="Collection">Collection - Free</option>
                  <option value="Delivery">Delivery - £2.50</option>
                </select>
              </label>
              <p className="centeredP">
                PLEASE NOTE THAT ALL ORDERS MUST BE PLACED AT LEAST 24 HOURS
                BEFORE YOU WANT TO RECEIVE YOUR ORDER, THIS IS DUE TO ALL
                PRODUCTS BEING MADE FRESH IN STORE.<br></br> YOUR ORDER WILL
                ONLY BE CONFIRMED ONCE A MEMBER OF STAFF CONTACTS YOU TO TAKE
                PAYMENT OVER THE PHONE
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
          </p>
          <p>
            <div className="stepOneForm">
              <h2 className="ProductsH2">STEP FOUR: YOUR DETAILS</h2>
              <label className="ordersLabelName">
                NAME:
                <input
                  required
                  className="orderInput"
                  type="text"
                  name="fname"
                  placeholder="Name"
                  value={this.state.fname}
                  onChange={(e) => this.handleChange(e.target.value, "fname")}
                />
              </label>
              <label className="ordersLabel1">
                TELEPHONE:
                <input
                  required
                  className="orderInputPhone"
                  type="text"
                  name="telephone"
                  placeholder="Telephone Number"
                  value={this.state.telephone}
                  onChange={(e) =>
                    this.handleChange(e.target.value, "telephone")
                  }
                />
              </label>

              <div className="divSubmit">
                <button
                  className="navButtonParty"
                  type="submit"
                  value="Place Order"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </p>
        </form>
      </main>
    );
  }
}
export default Orders;
