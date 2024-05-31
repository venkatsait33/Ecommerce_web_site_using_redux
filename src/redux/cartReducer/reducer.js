import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_QUANTITY,
  DELETE_FROM_CART,
  INCREASE_QUANTITY,
} from "../actionTypes";

const initialState = {
  cartItems: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === action.payload
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((cartItem) =>
            cartItem.id === action.payload
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity > 0),
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
