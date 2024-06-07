import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  deleteFromCart,
  increaseQuantity,
} from "../redux/cartReducer/action";
import { Link, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import TabTitle from "../components/TabTitle";
import emptyCart from "../assets/empty-cart.png";

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
  TabTitle("Cart-Page");

  return (
    <>
      <div className="w-full h-full p-4 mx-auto overflow-y-auto border-2 rounded cart-page border-b-yellow-400">
        <h2 className="pb-2 mb-4 text-2xl font-semibold border-b-2">Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            <p className="text-2xl font-semibold">Your cart is empty</p>
            <img className="w-[50%] mx-auto" src={emptyCart} alt="" />
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-4">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="flex gap-2 p-2 border-2 rounded-md shadow shadow-orange-400 max-[560px]:flex-col">
                  <div className="flex-1">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[30%]  max-[1080px]:w-[50%] rounded p-2 object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-between flex-1 gap-1 p-2">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="text-xl font-semibold">{item.name} </h3>
                    </Link>

                    <p>brand:&nbsp;{item.brand}</p>
                    <p>color: &nbsp;{item.color}</p>
                    <p className="text-base ">size: &nbsp;{item.sizes}</p>
                    <p>Quantity:&nbsp;{item.quantity}</p>
                    <div className="flex flex-col justify-between">
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
                    <button
                      onClick={() => handleDeleteFromCart(item.id)}
                      className="items-center w-[50%] mt-2 px-4 py-2 text-white bg-red-500 rounded"
                    >
                      Delete
                    </button>
                  </div>
                  <h2 className="flex-wrap mt-2 text-xl text-red-500">
                    ${item.price}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {cartItems.length === 0 ? (
        <div></div>
      ) : (
        <div className="flex flex-col justify-between p-2 mx-auto">
          <p className="mt-2 text-xl font-bold ">Shipping Free</p>
          <p className="mt-2 text-xl font-bold ">
            Total: ${totalAmount.toFixed(2)}
          </p>{" "}
          <button
            onClick={handleClearCart}
            className="items-center w-[30%] mt-2 px-4 py-2 text-white bg-red-500 rounded"
          >
            Clear Cart
          </button>
          <button
            onClick={handleCheckout}
            className="items-center w-[30%] mt-2 px-4 py-2 text-white bg-orange-500 rounded flex justify-between"
          >
            Checkout{" "}
            <span>
              <CiShoppingCart size={24} className="dark:text-white" />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default CartPage;
