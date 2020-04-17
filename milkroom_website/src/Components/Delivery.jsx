import React from "react";
import Deliveroo from "../Components/images/deliveroo_logo.png";
import Telephone from "../Components/images/phone_icon.png";

const Delivery = () => {
  return (
    <main className="deliveryBackground">
      <h1 className="TitleDelivery">DELIVERY OPTIONS</h1>
      <p className="deliveryText">Place your order with...</p>
      <div className="deliveryHolder">
        <a
          className="DeliveryAnchor"
          href="https://deliveroo.co.uk/menu/southport/birkdale/the-milk-room#"
        >
          <img
            className="deliveryImg"
            href="https://deliveroo.co.uk/menu/southport/birkdale/the-milk-room#"
            src={Deliveroo}
            alt="Deliveroo Logo"
          ></img>
        </a>
        <a className="DeliveryAnchor" href="tel:01704829457">
          <img className="PhoneImg" src={Telephone} alt="Telephone Logo"></img>
        </a>
      </div>
      <h2 className="TitleDelivery">Opening Times</h2>
      <p className="deliveryText">
        Monday 10am -6pm<br></br> Tuesday 10am - 6pm<br></br> Wednesday 10am-6pm
        <br></br>
        Thursday 10am-6pm<br></br> Friday 6pm - 10pm<br></br> Saturday 6pm -10pm
        <br></br>
        Sunday 10am-2pm
      </p>
    </main>
  );
};

export default Delivery;
