import React from "react";
import logo from "../Components/images/milkroom-logo.jpg";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <img className="logo" src={logo} alt="Milkroom_Logo"></img>
      </Link>
    </header>
  );
};

export default Header;
