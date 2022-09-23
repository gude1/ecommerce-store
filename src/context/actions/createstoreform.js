import { SET_CREATESTORE_ERRORS, SET_CREATESTORE_INPUTS } from "../actiontypes";

export const setCreateStoreInputs = (data = {}) => {
  return {
    type: SET_CREATESTORE_INPUTS,
    payload: data,
  };
};

export const setCreateStoreErrors = (data = {}) => {
  return {
    type: SET_CREATESTORE_ERRORS,
    payload: data,
  };
};
