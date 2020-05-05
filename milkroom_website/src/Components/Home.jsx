import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
// import slide1 from "../Components/images/IMG_1604.jpg";
import slide2 from "../Components/images//Prods.jsx/prod111.JPG";
import slide1 from "../Components/images/IMG_4339.jpg";
import slide3 from "../Components/images/HPWaffle1.jpg";
import Filler from "./Filler";
import IsLoading from "./IsLoading";

const slideImages = [slide1, slide3, slide2];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  isLoading: true,
};

class Home extends Component {
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
                className="each-slideDiv"
                style={{
                  backgroundImage: `url(${slideImages[0]})`,
                }}
              >
                {/* <span>Slide 1</span> */}
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                {/* <span>Slide 2</span> */}
              </div>
            </div>
            <div className="each-slide">
              <div
                className="rotated"
                style={{ backgroundImage: `url(${slideImages[2]})` }}
              >
                {/* <span>Slide 3</span> */}
              </div>
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

export default Home;
