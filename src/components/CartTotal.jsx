import React from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const { discount, total } = useSelector((state) => state.cart);

  return (
    <div className="booking-summary">
      <div class="kid-image-container">
        <img src="/kid-riding.svg" alt="Kid Riding" />
      </div>
      <div className="summary-header">Total Cart Value</div>
      <table className="total-table">
        <tr className="summary-value">
          <td className="table-key">Cart value: </td>
          <td className="table-value">QAR {total}</td>
        </tr>
        <tr className="summary-value">
          <td className="table-key">Discounts: </td>
          <td className="table-value">{discount}%</td>
        </tr>
        <tr className="total-value">
          <td className="table-key">Total: </td>
          <td className="table-value">QAR {total}</td>
        </tr>
      </table>
      <a href="/" className="continue-button">
        <p>Continue</p>
        <span>
          <img src="/right-arrow.svg" alt="Right Arrow" />
        </span>
      </a>
    </div>
  );
};

export default CartTotal;
