import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartReducer/action";

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

  return (
    <div className="h-[70vh] p-4 w-[80%] mx-auto overflow-y-auto checkout-page">
      <h2 className="pb-2 mb-4 text-2xl font-semibold border-b-2">CheckOut</h2>
      {cartItems.length === 0 ? (
        <p className="text-2xl font-semibold">Your cart is empty</p>
      ) : (
        <div className="flex justify-between">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 mt-4 border rounded-lg shadow-md cart-item"
            >
              <div className="flex">
                <div className="">
                  <img
                    src={item.image}
                    className="object-cover w-[30%]  rounded-lg"
                    alt=""
                  />
                </div>
                <div className="w-[60%] flex gap-3 flex-col border-l-2 pl-2">
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
