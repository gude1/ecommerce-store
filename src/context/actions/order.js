import { SET_ORDERS, UPDATE_ORDERS } from "../actiontypes";

export const setOrders = (data = []) => {
  return {
    type: SET_ORDERS,
    payload: data,
  };
};

export const updateOrders = (data = []) => {
  return {
    type: UPDATE_ORDERS,
    payload: data,
  };
};
