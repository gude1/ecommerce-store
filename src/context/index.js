import React from "react";
import { combineReducers } from "../utils";
import AdminReducer from "./reducers/AdminReducer";
import CreateStoreReducer from "./reducers/CreateStoreReducer";
import SigninReducer from "./reducers/SigninReducer";
import SignupReducer from "./reducers/SignupReducer";

export const Store = React.createContext();

export const initialState = {
  admin: AdminReducer.INITIAL_STATE,
  signupform: SignupReducer.INITIAL_STATE,
  signinform: SigninReducer.INITIAL_STATE,
  createstoreform: CreateStoreReducer.INITIAL_STATE,
};

export function StoreProvider(props) {
  const [state, dispatch] = combineReducers({
    admin: React.useReducer(AdminReducer.reducer, AdminReducer.INITIAL_STATE),
    signupform: React.useReducer(
      SignupReducer.reducer,
      SignupReducer.INITIAL_STATE
    ),
    signinform: React.useReducer(
      SigninReducer.reducer,
      SigninReducer.INITIAL_STATE
    ),
    createstoreform: React.useReducer(
      CreateStoreReducer.reducer,
      CreateStoreReducer.INITIAL_STATE
    ),
  });

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
