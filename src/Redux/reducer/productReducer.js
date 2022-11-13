import { ALL_PRODUCTS } from "../types";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return [...action.payload];
    default:
      return state;
  }
};
