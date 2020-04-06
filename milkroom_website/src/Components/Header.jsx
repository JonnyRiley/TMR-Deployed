import React from "react";
import logo from "../Components/images/milkroom-logo.jpg";

const Header = () => {
  return (
    <header className="Header">
      {/* <h1 className="MainHeader">theMilkroom</h1> */}
      <img className="logo" src={logo} alt="Milkroom_Logo"></img>
    </header>
  );
};

export default Header;
