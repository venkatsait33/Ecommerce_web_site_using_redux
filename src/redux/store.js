import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as productReducer } from "./productReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";
import { thunk } from "redux-thunk";

// there are two reducers in the code so then use the combine reducers function from redux

const rootReducer = combineReducers({
  productReducer,
  authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
