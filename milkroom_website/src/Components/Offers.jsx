import React from "react";
import "node_modules/video-react/dist/video-react.css";
import offer1 from "./images/offer1";

const Offers = () => {
  return (
    <div className="Offers-page">
      <Player playsInline poster="/images/offer1.mp4" src={offer1} />
    </div>
  );
};

export default Offers;
