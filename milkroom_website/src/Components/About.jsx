import React from "react";
import shop from "../Components/images/shop.png";
import shop2 from "../Components/images/shop2.JPG";
import shop3 from "../Components/images/shop3.JPG";
import staff from "../Components/images/staff.JPG";

const About = () => {
  return (
    <main>
      <h1 className="Title">About Us</h1>
      <div className="about">
        <img className="aboutImg" src={shop3} alt="shop1"></img>
        <img className="aboutImg" src={shop2} alt="shop2"></img>
      </div>
      <div className="left">
        <h2 className="aboutH2">the milkroom</h2>
        <p className="aboutUsText">
          In 2017, themilkroom was founded by our family. The aim was to bring
          delicious desserts to Southport within a family friendly setting. We
          completely redesigned our store to make it fit for purpose for our
          customers to enjoy. The idea was created around our kitchen table as
          we had a passion for all things desserts!! Themilkroom has grown to
          employing our amazing staff team and provide deliveries for residents
          in Southport. This has been an exciting journey, and not one without
          its challenges but we have been overwhelmed by our customers response
          to our store and we thank you very much, your support is so
          appreciated. We will continue our to bring you the latest desserts
          whether that’s in store or through take aways and delivery. Best
          Wishes from us all, themilkroom team.
        </p>
      </div>
      <div className="right">
        <form className="contactUsForm">
          <h2 className="aboutH2Title">Contact Us</h2>
          <label className="formButton">
            Name:
            <input type="text" name="name" placeholder="Name"></input>
          </label>
          <br></br>
          <label className="formButton">
            Email:
            <input type="text" name="email" placeholder="Email"></input>
          </label>
          <br></br>
          <label className="formButton">
            Select option:
            <select>
              <option value="Party">Party Enquiry</option>
              <option value="Table Booking">Table Booking</option>
              <option value="Gift Voucher">Gift Voucher</option>
              <option value="Table Booking">Table Booking</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br></br>
          <label className="formButton">
            Your comment:
            <input
              className="formComment"
              type="text"
              name="email"
              // placeholder="Comment"
            ></input>
          </label>
          <label className="formButton">
            <input
              className="formSubmit"
              type="submit"
              value="Submit"
              disabled="true"
            />
          </label>
        </form>
      </div>
      <div className="about">
        <img className="aboutImg1" src={shop} alt="shop3"></img>
        <img className="aboutImg" src={staff} alt="staff"></img>
      </div>

      <iframe
        title="fbook"
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthemilkroomsouthport%2Fposts%2F2521262098192396&width=500"
        width="500"
        height="569"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </main>
  );
};

export default About;
