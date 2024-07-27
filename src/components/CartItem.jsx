import React from "react";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // ========== function for increasing item in cart ==========
  const handleAddItem = () => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  // ========== function for decreasing item in cart ==========
  const handleRemoveItem = () => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  return (
    <tr className="cart-item">
      <td className="item-details">
        <div className="item-icon">
          <img src="/tickets.svg" alt="Ticket" />
        </div>
        <div className="item-name">{item.name}</div>
      </td>
      <td className="item-quantity">
        <div>
          <button onClick={handleRemoveItem}>
            <img src="/subtract-button.svg" alt="Subtract" />
          </button>
          <span className="quantity">{item.quantity}</span>
          <button onClick={handleAddItem}>
            <img src="/add-button.svg" alt="Add" />
          </button>
        </div>
      </td>
      <td className="item-price">QAR {item.price * item.quantity}</td>
    </tr>
  );
};

export default CartItem;
