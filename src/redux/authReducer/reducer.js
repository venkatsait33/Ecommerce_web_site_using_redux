import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionTypes";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: "",
  errorMessage: "",
  user: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        isError: false,
        token: payload,
        user: payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        errorMessage: payload,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        isError: false,
        user: null,
      };

    default:
      return state;
  }
};
