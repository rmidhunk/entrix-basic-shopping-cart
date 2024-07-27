import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [discountCoupon, setDiscountCoupon] = useState("");

  // =============== function for Appling Discount ===============
  const handleApplyDiscount = () => {
    dispatch({ type: "APPLY_DISCOUNT", payload: discountCoupon });
  };
  return (
    <div className="cart-container">
      <h4>Booking Summary</h4>
      <div className="cart-summary">
        <div className="cart">
          <div className="cart-header-container">
            <div className="cart-icon-container">
              <img src="/cart.svg" alt="Cart" />
            </div>
            <p className="cart-header">Cart summary</p>
          </div>
          <table>
            <tr className="table-header">
              <td>Ticket</td>
              <td>Quantity</td>
              <td>Amount</td>
            </tr>
            <CartList />
          </table>
          <div className="discount-code">
            <div className="ticket-container">
              <img src="/discount-ticket.svg" alt="Discount Ticket" />
            </div>
            <input
              type="text"
              placeholder="Enter Discount code"
              onChange={(e) => setDiscountCoupon(e.target.value)}
            />
            <button onClick={handleApplyDiscount}>Add</button>
          </div>
          <p className="discount-description">Apply "DISCOUNT10" for 10% discount</p>
        </div>
        <CartTotal />
      </div>
    </div>
  );
};

export default ShoppingCart;
