import React from "react";
import staff from "../Components/images/staff.JPG";
import phpForm from "../Components/Contact.php";

const Offers = () => {
  return (
    <div className="about">
      <form action={phpForm} method="post" className="aboutUsText">
        <h2 className="aboutH2">CONTACT US</h2>
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
        <br></br>
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
        <br></br>
        <label className="formOption" value="enquiry">
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
        <label className="formButtonComment" value="comments">
          Comment:
          <input
            required
            className="formComment"
            type="text"
            name="comments"
            placeholder=" Comment"
          ></input>
        </label>
        <label className="formSubmitButton">
          <input
            className="navButtonSubmitContact"
            type="submit"
            value="SUBMIT"
            // disabled="true"
          />
        </label>
      </form>
      <img className="aboutImg" src={staff} alt="staff"></img>
    </div>
  );
};
export default Offers;
