export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});

export const applyDiscount = (item) => ({
  type: "APPLY_DISCOUNT",
  payload: item,
});
