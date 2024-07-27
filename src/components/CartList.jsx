import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      {cart?.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default CartList;
