import React from "react";
import staff from "../Components/images/staff.JPG";

const Offers = () => {
  return (
    <div className="about">
      <form name="contactUs" method="post" className="aboutUsText">
        <input type="hidden" name="form-name" value="contactUs" />
        <p>
          <h2 className="aboutH4">CONTACT US</h2>
          <label className="formButton">
            Name:
            <input
              required
              className="aboutInput"
              type="text"
              name="name"
              placeholder=" Name"
            ></input>
          </label>
        </p>
        <p>
          <label className="formButton">
            Email:
            <input
              required
              className="aboutInput"
              type="text"
              name="email"
              placeholder=" Email"
            ></input>
          </label>
        </p>
        <p>
          <label className="formOption">
            Enquiry:
            <select className="formInput" name="enquiry">
              <option value="Party">PARTY</option>
              <option value="Table Booking">TABLE BOOKING</option>
              <option value="Gift Voucher">GIFT VOUCHER</option>

              <option value="Other">OTHER</option>
            </select>
          </label>
        </p>
        <p>
          <label className="formButtonComment" value="comments">
            Comment:
            <textarea
              required
              className="formComment"
              name="comments"
              placeholder=" Comment"
            ></textarea>
          </label>
        </p>
        <p>
          <label className="formSubmitButton">
            <button className="navButtonSubmitContact" type="submit">
              SUBMIT
            </button>
          </label>
        </p>
      </form>
      <img className="aboutImg" src={staff} alt="staff"></img>
    </div>
  );
};
export default Offers;
