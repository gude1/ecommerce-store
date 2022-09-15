import { UPDATE_ADMIN } from "../actiontypes";

export const updateAdmin = (data = {}) => {
  return {
    type: UPDATE_ADMIN,
    payload: data,
  };
};
