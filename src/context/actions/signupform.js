import { SET_SIGNUP_ERRORS, SET_SIGNUP_INPUTS } from "../actiontypes";

export const setSignupInputs = (data = {}) => {
  return {
    type: SET_SIGNUP_INPUTS,
    payload: data,
  };
};

export const setSignupErrors = (data = {}) => {
  return {
    type: SET_SIGNUP_ERRORS,
    payload: data,
  };
};

export const signUser = (data = {}) => {
  return async (dispatch, state) => {};
};
