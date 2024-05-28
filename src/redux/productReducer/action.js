import axios from "axios";
import {
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_DETAILS,
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
    .get("http://localhost:3001/products", object)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: PRODUCT_FAILURE, payload: error.message });
    });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  let payload = [];
  axios.get("http://localhost:3001/products").then((response) => {
    payload = response.data.filter((item) => item.id !== id);
  });

  axios
    .delete(`http://localhost:3001/products/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: PRODUCT_FAILURE, payload: error.message });
    });
};

export const editProduct = (id, data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .patch(`http://localhost:3001/products/${id}`, data)
    .then((response) => {
      console.log(response.data);

      dispatch({ type: EDIT_PRODUCT_SUCCESS });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: PRODUCT_FAILURE, payload: error.message });
    });
};

export const fetchProductDetails = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`http://localhost:3001/products/${id}`)
    .then((response) => {
      console.log(response.data);

      dispatch({ type: FETCH_PRODUCT_DETAILS, payload: response.data });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({ type: PRODUCT_FAILURE, payload: error.message });
    });
};
export const fetchProducts =
  (page = 1, limit = 10) =>
  (dispatch) => {
    dispatch({ type: PRODUCT_REQUEST });
    axios
      .get(`http://localhost:3001/products?_page=${page}&_limit=${limit}`)

      .then((response) => {
        console.log(response.data);

        dispatch({ type: FETCH_PRODUCTS, payload: response.data });
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: PRODUCT_FAILURE, payload: error.message });
      });
  };
