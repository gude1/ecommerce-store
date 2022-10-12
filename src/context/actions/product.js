import { SET_PRODUCTS, UPDATE_PRODUCTS } from "../actiontypes";

export const setProducts = (data = []) => {
  return {
    type: SET_PRODUCTS,
    payload: data,
  };
};

export const updateProducts = (data = []) => {
  return {
    type: UPDATE_PRODUCTS,
    payload: data,
  };
};
