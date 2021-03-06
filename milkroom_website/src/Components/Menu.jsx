import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import slide1 from "../Components/images/Screenshot.png";
import slide2 from "../Components/images/Screenshot1.png";
import slide3 from "../Components/images/Screenshot2.png";
import Filler from "./Filler";
import IsLoading from "./IsLoading";

const slideImages = [slide1, slide2, slide3];

const properties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

class Menu extends Component {
  state = {
    loading: true,
  };
  render() {
    const { loading } = this.state;
    if (loading) return <IsLoading loading={this.state.loading} />;
    return (
      <main>
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${slideImages[0]})`,
                }}
              ></div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
            </div>
            <div className="each-slide">
              <div
                className="rotated"
                style={{ backgroundImage: `url(${slideImages[2]})` }}
              ></div>
            </div>
          </Slide>
        </div>
        <Filler />
      </main>
    );
  }

  componentDidMount() {
    this.setState({ loading: false });
  }
}
export default Menu;
