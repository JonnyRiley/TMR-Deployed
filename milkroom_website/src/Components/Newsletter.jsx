import React from "react";
import { SocialIcon } from "react-social-icons";
//import validator from "validator";
import { Link } from "@reach/router";

const NewsletterForm = () => {
  return (
    <main className="Form">
      <h2 className="aboutH2">
        Join our newsletter for our latest offers and updates
      </h2>
      <form className="NewsletterForm">
        <label className="formOption">
          Name:
          <input type="text" name="name" placeholder="Name" />
        </label>
        <label className="formOption">
          Email:
          <input type="text" name="email" placeholder="Email" />
        </label>
        <input type="submit" value="Subscribe" disabled="true" />
      </form>
      <div className="Icons">
        <SocialIcon url="http://facebook.com/themilkroomsouthport/" />
        <SocialIcon url="http://twitter.com/themilkroom" />
        <SocialIcon url="http://instagram.com/themilkroom" />
      </div>
      <Link to="/terms&conditions">
        <button className="TC">Terms and Conditions</button>
      </Link>
      <Link to="/cookies">
        <button className="Cookies">Cookie Policy</button>
      </Link>
    </main>
  );
};

export default NewsletterForm;
