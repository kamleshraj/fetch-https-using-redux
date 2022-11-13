import { ALL_PRODUCTS } from "../types";

export const getAllProducts = () => (dispatch) => {
  fetch("https://mernecom1.herokuapp.com/products/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: ALL_PRODUCTS,
        payload: data.products
      });
    });
};
