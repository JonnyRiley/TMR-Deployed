import React from "react";
import shakeItUp from "../Components/images/IMG_1111.JPG";
import waffleWed from "../Components/images/IMG_1112.JPG";
import homeAlone from "../Components/images/IMG_1114.JPG";
import freakshake from "../Components/images/FreakshakeOffer.JPG";
import { Link } from "@reach/router";

const Offers = () => {
  return (
    <main className="offerMain">
      <h1 className="ProductsTitle">OUR DAILY OFFERS</h1>
      <div className="divOne">
        <img className="homeAlone" src={homeAlone} alt="HomeAloneOffer"></img>
        <ul className="OffersUL">
          <h2 className="offersH2">HOME ALONE</h2>
          <li className="offersLi">
            Take advantage of this amazing delivery deal!<br></br>- 1 LARGE
            INDULGENT SHAKE<br></br>- 1 ORGINAL WAFFLE OR PANCAKES<br></br> You
            choose your favourite flavour!
          </li>
          <div className="navOffersDiv">
            <Link to="/menu">
              <button className="navButtonOffers">MENU</button>
            </Link>
          </div>
          <div className="navOffersDiv">
            <a
              className="navButtonOffers"
              href="https://deliveroo.co.uk/menu/southport/birkdale/the-milk-room#"
            >
              DELIVEROO
            </a>
          </div>
          <li className="offersLiSmallPrint">
            <br></br>This offer does not include our standard delivery charge.
            Available on Deliveroo and telephone orders (01704 829547) This
            offer is only available on Friday/ Saturday 6pm -10pm and can only
            be used on items listed from themilkroom menu. No refund are
            available for this offer.
          </li>
        </ul>
      </div>
      <div className="divTwo">
        <img className="homeAlone" src={shakeItUp} alt="ShakeItUpOffer"></img>
        <ul className="OffersUL">
          <h2 className="offersH2">SHAKE IT UP</h2>
          <li className="offersLi">
            - 4 LARGE SHAKES FOR THE PRICE OF 4 REGULAR SHAKES<br></br>
            for £12.00<br></br>
            You choose your favourite flavours!
          </li>
          <div className="navOffersDiv">
            <Link to="/menu">
              <button className="navButtonOffers">MENU</button>
            </Link>
          </div>
          <div className="navOffersDiv">
            <a
              className="navButtonOffers"
              href="https://deliveroo.co.uk/menu/southport/birkdale/the-milk-room#"
            >
              DELIVEROO
            </a>
          </div>
          <li className="offersLiSmallPrint">
            Small print This offer is not available for Indulgent milkshakes and
            is for standard milkshakes only. This offer does not include our
            standard delivery charge. Available on Deliveroo and telephone
            orders (01704 829547) This offer is only available on Friday/
            Saturday 6pm -10pm and can only be used on items listed from
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
        <ul className="OffersUL">
          <h2 className="offersH2">WAFFLE WEDNESDAY</h2>
          <li className="offersLi">
            - ANY HOMEMADE WAFFLE FOR £4.50 ALL DAY LONG<br></br> You choose
            your favourite flavour!<br></br> Available in store, collection or
            via delivery every Wednesday
          </li>
          <div className="navOffersDiv">
            <Link to="/menu">
              <button className="navButtonOffers">MENU</button>
            </Link>
          </div>
          <div className="navOffersDiv">
            <a
              className="navButtonOffers"
              href="https://deliveroo.co.uk/menu/southport/birkdale/the-milk-room#"
            >
              DELIVEROO
            </a>
          </div>
          <li className="offersLiSmallPrint">
            {" "}
            This offer does not include our standard delivery charge. Available
            on Deliveroo and telephone orders (01704 829547) This offer is only
            available on Wednesday – delivery is available from 10am -2pm. This
            offer can only be used on items listed from themilkroom menu. No
            refund are available for this offer.
          </li>
        </ul>
      </div>
      <div className="divTwo">
        <img className="homeAlone1" src={freakshake} alt="DessertsOffer"></img>
        <ul className="OffersUL">
          <h2 className="offersH2">FREEKSHAKE FRIDAY</h2>
          <li className="offersLi">
            - Any regular freakshake for £4.95<br></br>All day long<br></br>Get
            that Friday Feeling
          </li>
          <br></br>
          <div className="navOffersDiv">
            <Link to="/menu">
              <button className="navButtonOffers">MENU</button>
            </Link>
          </div>
          <li className="offersLiSmallPrintFreakshake">
            This offer is only available in store and not available for delivery
            or take out.<br></br> This offer is only available on a Friday from
            10am -10pm and can only be used for regular freakshakes. No refund
            are available for this offer.
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Offers;
