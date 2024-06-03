import { legacy_createStore, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./rootReducer";

// there are two reducers in the code so then use the combine reducers function from redux

const persistConfig = {
  key: "root",
  storage,
  whileList: ["authReducer", "cartReducer"],
};

//const persistedState = loadState();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);

{
  /*store.subscribe(() => {
  saveState({
    cartReducer: store.getState().cartReducer,
  });
});*/
}
