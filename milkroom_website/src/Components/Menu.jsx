import React, { Component } from "react";
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Filler from "./Filler";
import IsLoading from "./IsLoading";

class Menu extends Component {
  state = {
    loading: true,
  };
  render() {
    const { loading } = this.state;
    if (loading) return <IsLoading loading={this.state.loading} />;
    return (
      <main>
        <Carousel />
        <Filler />
      </main>
    );
  }

  componentDidMount() {
    this.setState({ loading: false });
  }
}
export default Menu;
