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

class App extends Component {
  render() {
    return (
      <main className="mainApp">
        <Header />
        <Nav />
        <Router>
          <Slideshow path="/" />
          <Menu path="/menu" />
        </Router>
      </main>
    );
  }
}
export default App;
