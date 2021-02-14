import React from "react";
import shop2 from "../Components/images/shop2.JPG";
import brunch from "../Components/images/brunch.JPG";
import halloween from "../Components/images/halloweenFreaksake.jpg";
import giftCard from "../Components/images/giftCard1.jpg";
import { Link } from "@reach/router";
import SocialMedia from "./SocialMedia";
import Popup from "./Popup";

const Filler = () => {
  return (
    <main className="fillerMain">
      <a className="TitleHome" href="http://instagram.com/themilkroom">
        @themilkroom
      </a>
      <div className="about">
        <img className="aboutImg1" src={brunch} alt="shop1"></img>
        <div className="aboutUsText">
          <h2 className="brunchTitle">LET'S DO BRUNCH</h2>
          <p>
          Catching up with friends and family has never been easier. We have all
          your brunch favourites at themilkroom.<br></br>
          <br></br> Why not try our popular Breakfast Waffle!
          </p>
          <Link to="/menu">
            <button className="navButtonMenuFiller">MENU</button>
          </Link>
        </div>
      </div>
      <div className="about">
        <div className="aboutUsTextSecondP">
          <h3 className="brunchTitle">IT'S PARTY TIME</h3>
          <p>Are you looking to host a party?<br></br>
          We have the perfect venue for you and have specialised packages for
          your event<br></br>
          </p>
          <Link to="/parties">
            <button className="navButtonOffersParty">FIND OUT MORE</button>
          </Link>
        </div>
        <img className="aboutImg" src={shop2} alt="shop2"></img>
      </div>
      <div className="about">
        <img className="aboutImg1" src={halloween} alt="halloween"></img>
        <div className="aboutUsText">
          <h2 className="brunchTitle">SEASONAL TREATS</h2>
          <p>Be sure to keep up to date with our social media accounts
          <br></br>so that you don't miss out on our crazy seasonal products.
          <br></br>
          </p>
          <Link to="/seasonalProducts">
            <button className="navButtonOffersParty">SEASONAL TREATS</button>
          </Link>
        </div>
      </div>
      <div className="about">
        <div className="aboutUsTextSecondP">
          <h3 className="brunchTitle">GIFT VOUCHER!</h3>
          <p>
          Looking for the perfect gift?<br></br> We can help you out at
          themilkroom.<br></br>Gift cards can be collected in store or posted.
          <br></br>
          </p>
          <Popup />
        </div>
        <img className="aboutImg1" src={giftCard} alt="shop1"></img>
      </div>

      <SocialMedia />
    </main>
  );
};
export default Filler;
