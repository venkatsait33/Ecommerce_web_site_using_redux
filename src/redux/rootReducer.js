import { combineReducers } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as cartReducer } from "./cartReducer/reducer";
import { reducer as productReducer } from "./productReducer/reducer";
import { LOGOUT } from "./actionTypes";
import orderReducer from "./orderReducer/reducer";

const appReducer = combineReducers({
  authReducer,
  cartReducer,
  productReducer,
  orderReducer,});

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
