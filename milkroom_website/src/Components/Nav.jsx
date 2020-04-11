import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <button className="navButton">HOME</button>
      </Link>
      <Link to="/menu">
        <button className="navButton">MENU</button>
      </Link>
      <Link to="/offers">
        <button className="navButton">OFFERS</button>
      </Link>
      <Link to="/products">
        <button className="navButton">PRODUCTS</button>
      </Link>
      <Link to="/delivery">
        <button className="navButton">DELIVERY</button>
      </Link>
      <Link to="/about">
        <button className="navButton">ABOUT US</button>
      </Link>
      <Link to="/orders">
        <button className="navButton">ORDERS</button>
      </Link>
    </nav>
  );
};

export default Nav;
