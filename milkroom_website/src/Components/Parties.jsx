import React from "react";
import { Link } from "@reach/router";
import party from "./images/party.jpg";
import party1 from "./images/partySetup.jpg";
import party2 from "./images/partyCustomers2.jpg";
import party3 from "./images/partyCustomers3.jpg";
const Parties = () => {
  return (
    <main>
      <h1 className="partyTitleH1">HOSTING AN EVENT?</h1>
      <div className="about">
        <img className="partyIMG" src={party} alt="partyLayout"></img>
        <div className="aboutFlexBox">
          <h2 className="partyTitle">VENUE HIRE</h2>
          <p className="eventText">
            Are you looking to host a party?<br></br> We have the perfect venue
            for you and have specialised<br></br> packages for your event...
            <br></br>
            <br></br>Childrens Party
            <br></br>
            <br></br>
            Birthday Party<br></br>
            <br></br>
            Baby Shower<br></br>
            <br></br>
            Engagement Party<br></br>
            <br></br>
            Family get together<br></br>
          </p>
        </div>
      </div>
      <p className="partyText">
        <h2 className="eventTitle">IT'S PARTY TIME</h2>
        For exclusive use from 6pm to 7.30pm any day Monday through to Thursday.{" "}
        <br></br>
        The package we can do includes:<br></br>
        <br></br>- themilkroom Party Invitation Cards<br></br>
        <br></br>- Waffles/or Pancakes - design your own, children can have fun
        putting all the
        <br></br>
        <br></br>
        toppings on with variety of choices including sauces, creams,
        marshmallows etc
        <br></br>
        <br></br>- Birthday Donuts (4) To take home for the birthday boy/girl
        which we will bring out with candles to sing happy birthday <br></br>
        <br></br>- Unlimited cordial juice drinks <br></br>
        <br></br>- We will decorate with balloons and will be playing party
        music of your choice. <br></br>
        <br></br>- Party games (if desired) <br></br>
        <br></br>Minimum number of children 10, maximum 20 <br></br>
        <br></br>
        <p className="partyP">£12 per child</p>
        <br></br>
        Add on design your own milkshakes for a further £2 per child <br></br>
        We might be able to accommodate different times/days depending on your
        booking.
        <div className="navOffersDiv">
          <Link to="/about">
            <button className="navButtonParty">ENQUIRE</button>
          </Link>
        </div>
      </p>
      <div className="PartyIMGDiv">
        <img className="PartyIMG" src={party1} alt="customers Partying"></img>
        <img className="PartyIMG" src={party2} alt="customers Partying"></img>
        <img className="PartyIMG" src={party3} alt="customers Partying"></img>
      </div>
    </main>
  );
};

export default Parties;
