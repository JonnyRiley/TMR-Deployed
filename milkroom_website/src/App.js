import React, { Component } from "react";
import "./App.css";
import "./Components/Home";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import { Router } from "@reach/router";
import Menu from "./Components/Menu";
import Offers from "./Components/Offers";
import Products from "./Components/Products";
import About from "./Components/About";
import Delivery from "./Components/Delivery";
import NewsletterForm from "./Components/Newsletter";
import Orders from "./Components/Orders";
import TC from "./Components/TC";
import Cookie from "./Components/Cookies";
import Parties from "./Components/Parties";
import Footer from "./Components/Footer";
import FAQ from "./Components/FAQ";

class App extends Component {
  render() {
    return (
      <main className="mainApp">
        <Header />
        <Nav />
        <Router>
          <Home path="/" />
          <Menu path="/menu" />
          <Offers path="/offers" />
          <Products path="/products" />
          <About path="/about" />
          <Delivery path="/delivery" />
          <Orders path="/orders" />
          <TC path="/terms&conditions" />
          <Cookie path="/cookies" />
          <Parties path="/parties" />
          <NewsletterForm path="/newsletter" />
          <FAQ path="/faq" />
        </Router>
        <Footer />
        {/* <NewsletterForm /> */}
      </main>
    );
  }
}
export default App;
