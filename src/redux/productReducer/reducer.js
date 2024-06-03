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

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  totalItems: 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };

    case PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: [...payload],
      };
    case POST_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: state.products.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case FETCH_PRODUCT_DETAILS:
      return {
        ...state,
        products: payload,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: payload.products,
        totalItems: payload.totalItems,
      };

    default:
      return state;
  }
};
