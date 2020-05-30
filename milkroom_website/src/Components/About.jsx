import React from "react";
import shop from "../Components/images/shop.png";
import shop2 from "../Components/images/shop2.JPG";
import shop3 from "../Components/images/shop3.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

const About = () => {
  return (
    <main>
      <h1 className="ProductsTitle">ABOUT US</h1>
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
          very much, your support is so appreciated. We will continue to bring
          you the latest desserts whether that’s in store or through take aways
          and delivery.
          <br></br>Best Wishes from us all, themilkroom team.
        </p>
      </div>
      <div className="about">
        <p className="aboutUsTextSecondP">
          <h3 className="aboutH2">LOCATION DETAILS</h3>
          <br></br>
          191 Liverpool Road<br></br>
          Birkdale<br></br>
          PR8 4NZ
          <div className="aboutFlex">
            <a
              className="navButtonOffers1"
              href="https://www.google.co.uk/maps/place/The+Milk+Room/@53.62187,-3.014419,17z/data=!3m1!4b1!4m5!3m4!1s0x487b3eae36cb798d:0x99370a02fb21d87a!8m2!3d53.6218668!4d-3.0122303"
            >
              DIRECTIONS
            </a>
          </div>
        </p>

        <img className="aboutImg" src={shop2} alt="shop2"></img>
      </div>
      <div className="about">
        <img className="aboutImg1" src={shop} alt="shop3"></img>
        <p className="aboutUsText">
          <h4 className="aboutH2">OPENING HOURS</h4>
          <br></br>
          {/* Monday: 10:00 - 18:00<br></br> Tuesday: 10:00 - 18:00 <br></br>
          Wednesday: 10:00 - 18:00<br></br>Thursday: 10:00 - 18:00<br></br>
          Friday: 10:00 - 22:00<br></br>Saturday: 10:00 - 22:00<br></br>
          Sunday: 10:00 - 18:00<br></br> */}
          Monday: CLOSED<br></br> Tuesday: CLOSED <br></br>
          Wednesday: CLOSED<br></br>Thursday: CLOSED<br></br>
          Friday: 17:00 - 21:00<br></br>Saturday: 17:00 - 21:00<br></br>
          Sunday: 17:00 - 21:00<br></br>
          <br></br>
          <a className="aboutPhoneNo" href="tel:01704829457">
            <FontAwesomeIcon icon={faPhone} /> 01704 829457
          </a>
          <br></br>
          <p className="CovidAlertMsg">
            *TEMPORARY HOURS DUE TO COVID-19 REGULATIONS*
          </p>
        </p>
      </div>
      <ContactForm />
    </main>
  );
};

export default About;
