import axios from "axios";
import { ADD_ORDER } from "../actionTypes";

export const addOrder = (order) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3001/orders", order);
    dispatch({ type: ADD_ORDER, payload: response.data });
  } catch (error) {
    console.error("Error adding order:", error);
  }
};
