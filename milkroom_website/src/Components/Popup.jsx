import Popup from "reactjs-popup";
import React from "react";
import { Link } from "@reach/router";
export default () => (
  <Popup
    trigger={
      <div className="popupDiv">
        <button className="navButtonOffersParty">GIFT VOUCHER</button>
      </div>
    }
    modal
  >
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <h1 className="header">Gift Voucher</h1>
        <p className="content">
          Looking for the perfect gift? We can help you out at themilkroom.
          Order your gift card in-store, over the phone or by filling out our
          Contact Us form. Gift cards can be collected in store or posted.
          <div className="popupDiv">
            <Link to="/about">
              <button className="navButtonContact">CONTACT US</button>
            </Link>
          </div>
        </p>
        <h2 className="header">Terms and Conditions</h2>
        <p className="content">
          Gift vouchers can only be redeemed in store or for delivery (do not
          include the delivery charge this must be paid separately not with
          voucher) Must be used within 1 year of purchase date. Gift vouchers
          are non-refundable and CANNOT be exchanged for cash or credit. No
          change is eligible if full value of the voucher is not used and nor
          can another voucher be issued for the unused amount. Gift vouchers can
          only be used in-store whilst eating in or for takeaway collections or
          delivery Gift vouchers must be produced on point of sale. Cannot be
          used in conjunction with some offers. The milkroom is not responsible
          if a gift voucher is lost, stolen, destroyed or used without
          permission and no replacement will be provided in these circumstances.
        </p>
      </div>
    )}
  </Popup>
);
