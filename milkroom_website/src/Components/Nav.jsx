import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <button className="navButton">Home</button>
      </Link>
      <Link to="/menu">
        <button className="navButton">Menu</button>
      </Link>
      <Link to="/offers">
        <button className="navButton">Offers</button>
      </Link>
      <Link to="/products">
        <button className="navButton">Products</button>
      </Link>
      <Link to="/delivery">
        <button className="navButton">Delivery</button>
      </Link>
      <Link to="/about">
        <button className="navButton">About Us</button>
      </Link>
      <Link to="/orders">
        <button className="navButton">Orders</button>
      </Link>
    </nav>
  );
};

export default Nav;
