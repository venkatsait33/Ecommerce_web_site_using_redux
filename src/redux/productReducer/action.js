import axios from "axios";
import {
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionTypes";

export const addProduct = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("http://localhost:3001/products", newProduct)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: POST_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: PRODUCT_FAILURE, payload: error.message });
    });
};

export const getProducts = (object) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get("http://localhost:3001/products?", object)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: PRODUCT_FAILURE, payload: error.message });
    });
};
