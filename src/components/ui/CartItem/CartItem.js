import React from "react";
import CounterInput from "../CounterInput/CounterInput";
import IconButton from "../IconButton/IconButton";
import "./CartItem.css";

function CartItem({ className }) {
  return (
    <div className={`cartitem-ctn ${className}`}>
      <div className="cartitem-panel"></div>
      <IconButton name={"close"} className="cartitem-removebtn" />
    </div>
  );
  return (
    <div className={`cartitem-ctn ${className}`}>
      <img src="https://boxinbucket.s3.amazonaws.com/media/uploads/htt.jpeg" />
      <div className="cartitem-detailsctn">
        <div>
          <h5>Name</h5>
          <span>Ref No</span>
        </div>
        <CounterInput className={"cartitem-counterinput"} />
        <span>N4000</span>
      </div>
    </div>
  );
}

export default CartItem;
