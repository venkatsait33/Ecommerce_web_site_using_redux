import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartReducer/action";
import TabTitle from "../components/TabTitle";
import emptyCart from "../assets/empty-cart.png";

const CheckoutPage = () => {
  const cartItems = useSelector((store) => store.cartReducer.cartItems);
  const dispatch = useDispatch();
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleCheckout = () => {
    // Add your checkout logic here (e.g., payment processing)
    alert("Checkout successful!");
    dispatch(clearCart());
  };
  TabTitle("Checkout");

  return (
    <div className="z-10 w-full h-screen p-4 mx-auto overflow-y-auto checkout-page">
      <h2 className="pb-2 mb-4 text-2xl font-semibold border-b-2">CheckOut</h2>
      {cartItems.length === 0 ? (
        <div>
          <p className="text-2xl font-semibold">Your cart is empty</p>
          <img className="w-[50%] mx-auto" src={emptyCart} alt="" />
        </div>
      ) : (
        <div className="flex items-center flex-col justify-between text-center w-[80%] mx-auto max-[560px]:flex-col ">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center w-[80%] justify-between p-4 mt-4 border rounded-lg shadow-md cart-item max-[560px]:flex-col"
            >
              <div className="flex items-center justify-between w-[80%]">
                <div className="">
                  <img
                    src={item.image}
                    className="object-cover w-[80%]  rounded-lg"
                    alt=""
                  />
                </div>
                <div className="w-[50%] flex gap-3 flex-col border-l-2  justify-center  mx-auto">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="text-xl font-semibold">${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="text-xl font-bold">
              Total: ${totalAmount.toFixed(2)}
            </h3>
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

export default CheckoutPage;
