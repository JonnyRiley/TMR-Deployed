import React from "react";
import shop from "../Components/images/shop.png";
import shop2 from "../Components/images/shop2.JPG";
import shop3 from "../Components/images/shop3.JPG";
import staff from "../Components/images/staff.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { MapContainer } from "./GoogleMaps";
import Popup from "../Components/Popup";
const About = () => {
  return (
    <main>
      <h1 className="Title">ABOUT US</h1>
      <div className="about">
        <img className="aboutImg" src={shop3} alt="shop1"></img>

        <p className="aboutUsText">
          <h2 className="aboutH2">themilkroom</h2>
          In 2017, themilkroom was founded by our family. The aim was to bring
          delicious desserts to Southport within a family friendly setting. We
          completely redesigned our store to make it fit for purpose for our
          customers to enjoy. The idea was created around our kitchen table as
          we had a passion for all things desserts!!<br></br>
          <br></br> themilkroom has grown to employing our amazing staff team
          and provide deliveries for residents in Southport. This has been an
          exciting journey, and not one without its challenges but we have been
          overwhelmed by our customers response to our store and we thank you
          very much, your support is so appreciated. We will continue our to
          bring you the latest desserts whether that’s in store or through take
          aways and delivery. Best Wishes from us all, themilkroom team.
        </p>
      </div>
      <div className="about">
        <p className="aboutUsTextSecondP">
          <h3 className="aboutH2">LOCATION DETAILS</h3>
          <br></br>
          191 Liverpool Road<br></br>
          Birkdale<br></br>
          PR8 4NZ
          <button
            className="navButtonOffers1"
            href="https://www.google.co.uk/maps/place/The+Milk+Room/@53.62187,-3.014419,17z/data=!3m1!4b1!4m5!3m4!1s0x487b3eae36cb798d:0x99370a02fb21d87a!8m2!3d53.6218668!4d-3.0122303"
          >
            DIRECTIONS
          </button>
        </p>

        <img className="aboutImg" src={shop2} alt="shop2"></img>
      </div>
      <div className="about">
        <img className="aboutImg1" src={shop} alt="shop3"></img>
        <p className="aboutUsText">
          <h4 className="aboutH4">OPENING HOURS:</h4>
          <br></br>
          Monday: 10:00 - 18:00<br></br> Tuesday: 10:00 - 18:00 <br></br>
          Wednesday: 10:00 - 18:00<br></br>Thursday: 10:00 - 18:00<br></br>
          Friday: 10:00 - 22:00<br></br>Saturday: 10:00 - 22:00<br></br>
          Sunday: 10:00 - 18:00<br></br>
          <br></br>
          <a className="aboutPhoneNo" href="tel:01704829457">
            <FontAwesomeIcon icon={faPhone} /> 01704 829457
          </a>
        </p>
      </div>{" "}
      <div className="about">
        <form className="contactUsForm">
          <h2 className="aboutH2">CONTACT US</h2>
          <label className="formButton">
            Name:
            <input
              className="aboutInput"
              type="text"
              name="name"
              placeholder=" Name"
            ></input>
          </label>
          <br></br>
          <label className="formButton">
            Email:
            <input
              className="aboutInput"
              type="text"
              name="email"
              placeholder=" Email"
            ></input>
          </label>
          <br></br>
          <label className="formOption">
            Enquiry:
            <select className="formInput">
              <option value="Party">PARTY</option>
              <option value="Table Booking">TABLE BOOKING</option>
              <option value="Gift Voucher">GIFT VOUCHER</option>
              {/* <option value="Table Booking">Table Booking</option> */}
              <option value="Other">OTHER</option>
            </select>
          </label>
          <br></br>
          <label className="formButtonComment">
            Comment:
            <input
              className="formComment"
              type="text"
              name="email"
              placeholder=" Comment"
            ></input>
          </label>
          <label className="formButton">
            <input
              className="navButtonOffers"
              type="submit"
              value="Submit"
              disabled="true"
            />
          </label>
        </form>
        <img className="aboutImg" src={staff} alt="staff"></img>
      </div>
      {/* <iframe
        title="fbook"
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthemilkroomsouthport%2Fposts%2F2521262098192396&width=500"
        width="500"
        height="569"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe> */}
    </main>
  );
};

export default About;
