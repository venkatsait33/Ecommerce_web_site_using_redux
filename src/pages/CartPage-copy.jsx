
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "../redux/cartReducer/action";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cartReducer.cartItems);
  //console.log(cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleDeleteFromCart = (productId) => {
    dispatch(deleteFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="h-full p-4 mx-auto overflow-y-auto cart-page">
      <h2 className="text-2xl font-bold ">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="h-[30vh]">Your cart is empty</p>
      ) : (
        <div className="flex flex-col items-center justify-between gap-3 mt-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex border rounded-lg cart-item">
              <div className="flex">
                <div className="w-[30%] p-2 flex flex-col justify-between">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[50%] rounded p-2 object-cover"
                  />
                </div>

                <div className="w-[40%] p-2 flex flex-col justify-between">
                  <h3 className="text-xl font-bold">
                    productBrand:{item.brand}
                  </h3>
                  <h3 className="text-xl font-semibold">
                    productName:
                    {item.name}
                  </h3>
                  <p>category:{item.category}</p>
                  <p>gender:{item.gender}</p>
                  <p className="text-lg font-semibold">${item.price}</p>
                </div>

                <div className="w-[20%] p-2 flex flex-col justify-between">
                  <p>Quantity: {item.quantity}</p>
                  <div className="flex mt-2 space-x-2">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="px-4 py-2 text-white bg-red-500 rounded"
                    >
                      -
                    </button>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="px-4 py-2 text-white bg-green-500 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-[15%] p-2 flex flex-col justify-between items-center mx-auto">
                  <button
                    onClick={() => handleDeleteFromCart(item.id)}
                    className="items-center p-2 text-white bg-red-500 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="w-[30%] p-2 flex flex-col justify-between mx-auto">
            <h3 className="text-xl font-bold">
              Total: ${totalAmount.toFixed(2)}
            </h3>
            <button
              onClick={handleClearCart}
              className="px-4 py-2 mt-2 text-white bg-red-500 rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="px-4 py-2 mt-2 text-white bg-green-500 rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
