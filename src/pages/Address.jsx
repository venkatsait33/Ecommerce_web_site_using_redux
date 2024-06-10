import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../redux/orderReducer/action";
import { clearCart } from "../redux/cartReducer/action";
import TabTitle from "../components/TabTitle";
import { toast } from "react-toastify";

const Address = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const cartItems = useSelector((store) => store.cartReducer.cartItems);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      id: new Date().getTime(), // Generate a unique id for the order
      products: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        size: item.size, // Add size to order
      })),
      address: { name, mobile, address },
      price: totalAmount,
    };

    dispatch(addOrder(order));
    dispatch(clearCart());
    navigate("/orders");
    toast("order placed successfully");
  };
  TabTitle("Address-page");

  return (
    <div className="p-4 w-[80%] mx-auto m-4">
      <h1 className="mb-4 text-2xl font-bold">Address</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full mt-1 bg-gray-100 border-gray-300 rounded-md dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Mobile Number
          </label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="block w-full mt-1 bg-gray-100 border-gray-300 rounded-md shadow-sm dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Address
          </label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="block w-full mt-1 bg-gray-100 border-gray-300 rounded-md dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Address;
