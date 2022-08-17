import React from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import CartItem from "../../components/ui/CartItem/CartItem";
import "./Cart.css";

function Cart() {
  return (
    <div>
      <SubHeader title="Cart" />
      <div className="cartlist-ctn slideInUp">
        <CartItem className={"cartlist-item"} />
        <CartItem className={"cartlist-item"} />
        <CartItem className={"cartlist-item"} />
      </div>
    </div>
  );
}

export default Cart;
