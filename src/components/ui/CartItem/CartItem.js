import React from "react";
import CounterInput from "../CounterInput/CounterInput";
import IconButton from "../IconButton/IconButton";
import "./CartItem.css";

function CartItem({ className }) {
  return (
    <div className={`cartitem-ctn ${className}`}>
      <img
        src="https://boxinbucket.s3.amazonaws.com/media/uploads/htt.jpeg"
        className="cartitem-img"
      />
      <div className="cartitem-panel">
        <h5 className="cartitem-productname">
          Bespoke trousers in calvary twill
        </h5>
        <CounterInput />
      </div>
    </div>
  );

  return (
    <div className={`cartitem-ctn ${className}`}>
      <div className="cartitem-panel">
        <img
          src="https://boxinbucket.s3.amazonaws.com/media/uploads/htt.jpeg"
          className="cartitem-img"
        />
        <div className="cartitem-detailsctn">
          <h5 className="cartitem-productname">
            Bespoke trousers in calvary twill
          </h5>
        </div>
      </div>
      <IconButton name={"close"} className="cartitem-removebtn" />
    </div>
  );
}

export default CartItem;
