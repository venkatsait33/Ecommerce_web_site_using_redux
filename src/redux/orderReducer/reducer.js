import { ADD_ORDER } from "../actionTypes";

const initialState = {
  list: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};

export default orderReducer;
