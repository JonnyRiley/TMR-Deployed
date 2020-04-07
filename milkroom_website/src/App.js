import React, { Component } from "react";
import "./App.css";
// import Nav from "./Components/Nav";
// import * as Api from "./Api";
import "./Components/Home";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import { Router } from "@reach/router";
import Menu from "./Components/Menu";
import Offers from "./Components/Offers";
import Products from "./Components/Products";
import About from "./Components/About";

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
        </Router>
      </main>
    );
  }
}
export default App;
