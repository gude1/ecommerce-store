import { isEmpty, sortByCreatedAt } from "../../utils";
import {
  RESET,
  PROCESSING,
  LOG_OUT,
  SET_PRODUCTS,
  UPDATE_PRODUCTS,
} from "../actiontypes";

const INITIAL_STATE = {
  list: [],
  fetching: false,
  prev: null,
  next: null,
};

const handleProcessing = (key, value, state) => {
  if (isEmpty(key) || isEmpty(state) || isEmpty(value)) {
    return state;
  }
  switch (key) {
    case "productfetching":
      return { ...state, fetching: value };
    default:
      return state;
  }
};

const reducer = (state, action) => {
  let reducerdata = null;
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, list: action.payload };
    case UPDATE_PRODUCTS:
      let newproducts = action.payload;
      reducerdata = state.list.map((productitem) => {
        let index = newproducts.findIndex(
          (item) => item?._id == productitem?._id
        );
        if (index > -1) {
          newproducts.splice(index, 1);
          return { ...productitem, ...newproducts[index] };
        }
        return productitem;
      });
      reducerdata = sortByCreatedAt([...reducerdata, ...newproducts]);
      return { ...state, list: reducerdata };
    case RESET:
      return action.payload == "productreducer" ? INITIAL_STATE : state;
    case PROCESSING:
      return handleProcessing(action.payload.key, action.payload.value, state);
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default { INITIAL_STATE, reducer };
