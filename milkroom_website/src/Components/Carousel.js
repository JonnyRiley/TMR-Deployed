import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../Components/images/NewMenu-1.jpg";
import slide2 from "../Components/images/NewMenu-2.jpg";
import slide3 from "../Components/images/NewMenu-3.jpg";
import slide4 from "../Components/images/NewMenu-4.jpg";

export default () => (
    <Carousel autoPlay>
        <div>
            <img alt="MenuPage1" src={slide1} />
        </div>
        <div>
            <img alt="MenuPage2" src={slide2} />
        </div>
        <div>
            <img alt="MenuPage3" src={slide3} />
        </div>
        <div>
            <img alt="MenuPage4" src={slide4} />
        </div>
        
    </Carousel>
);
