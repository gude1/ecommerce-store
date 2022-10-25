import { isEmpty, sortByCreatedAt } from "../../utils";
import {
  RESET,
  PROCESSING,
  LOG_OUT,
  SET_ORDERS,
  UPDATE_ORDERS,
} from "../actiontypes";

const INITIAL_STATE = {
  list: [],
  fetching: false,
};

const handleProcessing = (key, value, state) => {
  if (isEmpty(key) || isEmpty(state) || isEmpty(value)) {
    return state;
  }
  switch (key) {
    case "orderfetching":
      return { ...state, fetching: value };
    default:
      return state;
  }
};

const reducer = (state, action) => {
  let reducerdata = null;
  switch (action.type) {
    case SET_ORDERS:
      return { ...state, list: action.payload };
    case UPDATE_ORDERS:
      let neworders = action.payload;
      reducerdata = state.list.map((orderitem) => {
        let index = neworders.findIndex((item) => item?._id == orderitem?._id);
        if (index > -1) {
          neworders.splice(index, 1);
          return { ...orderitem, ...neworders[index] };
        }
        return orderitem;
      });
      reducerdata = sortByCreatedAt([...reducerdata, ...neworders]);
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
