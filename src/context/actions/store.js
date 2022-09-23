import { UPDATE_STORE } from "../actiontypes";

export const updateStore = (data = {}) => {
  return {
    type: UPDATE_STORE,
    payload: data,
  };
};
