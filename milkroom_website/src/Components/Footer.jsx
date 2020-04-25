import React from "react";
import { Link } from "@reach/router";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <main>
      <div className="footerDiv">
        <nav className="footerBar">
          <Link to="/parties">
            <button className="navFooter">EVENTS</button>
          </Link>
          <Link to="/faq">
            <button className="navFooter">FAQ</button>
          </Link>
          <Link to="/about">
            <button className="navFooter">ABOUT US</button>
          </Link>
          <Link to="/orders">
            <button className="navFooter">ORDERS</button>
          </Link>
        </nav>
        <h1 className="TitleFooter">NEWSLETTER SIGNUP</h1>
        <div className="footerColumn">
          <Link to="/newsletter">
            <button className="navButtonFooter">SUBSCRIBE</button>
          </Link>
        </div>
        <div className="footerRow">
          <div className="Icons">
            <SocialIcon
              className="Icon"
              url="http://facebook.com/themilkroomsouthport/"
            />
            <SocialIcon className="Icon" url="http://twitter.com/themilkroom" />
            <SocialIcon
              className="Icon"
              url="http://instagram.com/themilkroom"
            />
          </div>
          <div className="Policies">
            <Link to="/terms&conditions">
              <button className="navButtonPolicies">
                Terms and Conditions
              </button>
            </Link>
            <Link to="/privacy">
              <button className="navButtonPolicies">Privacy Policy</button>
            </Link>
            <Link to="/cookies">
              <button className="navButtonPolicies">Cookie Policy</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
