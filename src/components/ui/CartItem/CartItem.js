import React from "react";
import CounterInput from "../CounterInput/CounterInput";
import "./CartItem.css";

function CartItem({}) {
  return (
    <div className="cartitem-ctn">
      <img src="https://boxinbucket.s3.amazonaws.com/media/uploads/htt.jpeg" />
      <div className="cartitem-detailsctn">
        {/* <div>
          <h5>Name</h5>
          <span>Ref No</span>
        </div> */}
        <CounterInput className={"cartitem-counterinput"} />
        <span>N4000</span>
      </div>
    </div>
  );
}

export default CartItem;
