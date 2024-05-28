import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionTypes";

export const login = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  // in the axios we send the data by adding in the body of the link to pass the data to the body to fetch the login
  // we use return the login as function a promise. if we not use return it will only send the data
  return axios
    .post("https://reqres.in/api/login", userData)
    .then((response) => {
      console.log(response);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    });
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
