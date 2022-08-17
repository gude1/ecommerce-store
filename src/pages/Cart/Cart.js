import React from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import CartItem from "../../components/ui/CartItem/CartItem";
import "./Cart.css";

function Cart() {
  return (
    <div>
      <SubHeader title="Cart" />
      <div className="slideInUp cartlist-ctn">
        <CartItem className={"cartlist-item"} />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}

export default Cart;
