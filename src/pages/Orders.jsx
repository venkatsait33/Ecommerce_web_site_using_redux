import React from "react";
import { useSelector } from "react-redux";
import TabTitle from "../components/TabTitle";

const Orders = () => {
  const orders = useSelector((store) => store.orderReducer.list);
  TabTitle("orders-Page");

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Orders</h1>
      <table className="min-w-full bg-white dark:bg-gray-900">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">S.No</th>
            <th className="px-4 py-2 border-b">Product ID</th>
            <th className="px-4 py-2 border-b">Address</th>
            <th className="px-4 py-2 border-b">Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td className="px-4 py-2 border-b">{index + 1}</td>
              <td className="px-4 py-2 border-b">
                {order.products.map((product) => product.id).join(", ")}
              </td>
              <td className="px-4 py-2 border-b">
                {order.address.name}, {order.address.mobile},{" "}
                {order.address.address}
              </td>
              <td className="px-4 py-2 border-b">${order.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
