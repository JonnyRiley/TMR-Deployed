import React, { Component } from "react";
import "./App.css";
// import Nav from "./Components/Nav";
// import * as Api from "./Api";
import "./Components/SlideShow";
import Slideshow from "./Components/SlideShow";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import { Router } from "@reach/router";
import Menu from "./Components/Menu";
import Offers from "./Components/Offers";
import Products from "./Components/Products";

class App extends Component {
  render() {
    return (
      <main className="mainApp">
        <Header />
        <Nav />
        <Router>
          <Slideshow path="/" />
          <Menu path="/menu" />
          <Offers path="/offers" />
          <Products path="/products" />
        </Router>
      </main>
    );
  }
}
export default App;
