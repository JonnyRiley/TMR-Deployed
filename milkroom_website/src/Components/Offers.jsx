import React from "react";
import homeAlone from "../Components/images/IMG_1111.JPG";
import shakeItUp from "../Components/images/IMG_1112.JPG";
import waffleWed from "../Components/images/IMG_1114.JPG";
import desserts from "../Components/images/Desserts.jpg";

const Offers = () => {
  return (
    <main>
      <h1 className="Title">Offers</h1>
      <div className="divOne">
        <img className="homeAlone" src={homeAlone} alt="HomeAloneOffer"></img>
        <ul>
          <h2>Home Alone</h2>
          <li>
            Take advantage of this amazing delivery deal 1 LARGE INDULGENT SHAKE
            1 ORGINAL WAFFLE OR PANCAKES You choose your favourite flavour! **
            Link to Menu** ** Link to Deliveroo** Small print This offer does
            not include our standard delivery charge. Available on Deliveroo and
            telephone orders (01704 829547) This offer is only available on
            Friday/ Saturday 6pm -10pm and can only be used on items listed from
            themilkroom menu. No refund are available for this offer.
          </li>
        </ul>
      </div>
      <div className="divTwo">
        <img className="homeAlone" src={shakeItUp} alt="ShakeItUpOffer"></img>
        <ul>
          <h2>Shake It Up</h2>
          <li>
            4 LARGE SHAKES FOR THE PRICE OF 4 REGULAR SHAKES Yours for £12.00
            You choose your favourite flavour! ** Link to Menu** ** Link to
            Deliveroo** Small print This offer is not available for Indulgent
            milkshakes and is for standard milkshakes only. This offer does not
            include our standard delivery charge. Available on Deliveroo and
            telephone orders (01704 829547) This offer is only available on
            Friday/ Saturday 6pm -10pm and can only be used on items listed from
            themilkroom menu. No refund are available for this offer.
          </li>
        </ul>
      </div>
      <div className="divOne">
        <img
          className="homeAlone"
          src={waffleWed}
          alt="WaffleWednesdayOffer"
        ></img>
        <ul>
          <h2>Waffle Wednesday Deal</h2>
          <li>
            ANY ORIGINAL WAFFLE FOR £4.50 ALL DAY LONG You choose your favourite
            flavour! Available in store, collection or via delivery every
            Wednesday ** Link to Menu** ** Link to Deliveroo** Small print This
            offer does not include our standard delivery charge. Available on
            Deliveroo and telephone orders (01704 829547) This offer is only
            available on Wednesday – delivery is available from 10am -2pm. This
            offer can only be used on items listed from themilkroom menu. No
            refund are available for this offer.
          </li>
        </ul>
      </div>
      <div className="divTwo">
        <img className="homeAlone" src={desserts} alt="DessertsOffer"></img>
        <ul>
          <h2>milkroom Desserts</h2>
          <li>Delivery Only</li>
        </ul>
      </div>
    </main>
  );
};

export default Offers;
