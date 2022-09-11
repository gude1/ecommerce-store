import React, { useEffect } from "react";
import { combineReducers } from "../utils";

export const Store = React.createContext();

export const initialState = {
  admin: {},
};

export function StoreProvider(props) {
  const [state, dispatch] = combineReducers({
    user: React.useReducer(UserReducer.reducer, UserReducer.INITIAL_STATE),
  });

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
