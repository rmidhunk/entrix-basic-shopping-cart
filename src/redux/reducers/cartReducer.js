const initialState = {
  cart: [
    { id: 1, name: "All day Ticket", price: 520, quantity: 2 },
    { id: 2, name: "Cabana", price: 1200, quantity: 1 },
  ],
  discount: 0,
  total: 1720,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const addItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);

      let updatedAddCart;
      if (addItemIndex >= 0) {
        updatedAddCart = state.cart.map((item, index) =>
          index === addItemIndex ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        updatedAddCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        cart: updatedAddCart,
        total: state.total + action.payload.price,
      };

    case "REMOVE_ITEM":
      const removeItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);

      if (removeItemIndex >= 0 && state.cart[removeItemIndex].quantity > 0) {
        const updatedRemoveCart = state.cart.map((item, index) =>
          index === removeItemIndex ? { ...item, quantity: item.quantity - 1 } : item,
        );

        return {
          ...state,
          cart: updatedRemoveCart,
          total: state.total - action.payload.price,
        };
      }

      return state;
    case "APPLY_DISCOUNT":
      let appliedDiscount = 0;
      if (!state.discount && action.payload === "DISCOUNT10") {
        appliedDiscount = 10;
      } else {
        return state;
      }
      return {
        ...state,
        discount: appliedDiscount,
        total: state.total * ((100 - appliedDiscount) / 100),
      };
    default:
      return state;
  }
};

export default cartReducer;
