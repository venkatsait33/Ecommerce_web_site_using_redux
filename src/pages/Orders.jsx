import React from "react";
import { useSelector } from "react-redux";
import TabTitle from "../components/TabTitle";

const Orders = () => {
  const orders = useSelector((store) => store.orderReducer.list);
  TabTitle("orders-Page");

  return (
    <div className="h-screen p-1 m-2 dark:bg-gray-900">
      <h1 className="mb-4 text-2xl font-bold border-b-2">Orders</h1>
      <table className="mx-auto overflow-x-auto bg-white dark:bg-gray-900">
        <thead>
          <tr>
            <th className="px-2 py-3 text-xs font-medium text-left text-gray-500 uppercase bg-gray-50">
              S.No
            </th>
            <th className="px-2 py-3 text-xs font-medium text-left text-gray-500 uppercase bg-gray-50">
              Product ID
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
              Name
            </th>
            <th className="px-2 py-3 text-xs font-medium text-left text-gray-500 uppercase bg-gray-50">
              Quantity
            </th>

            <th className="px-2 py-3 text-xs font-medium text-left text-gray-500 uppercase bg-gray-50">
              Price
            </th>
            <th className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase bg-gray-50">
              Address
            </th>
            <th className="px-2 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:bg-gray-900">
              Total Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td className="px-4 py-2 border-b">{index + 1}</td>
              {order.products.map((product) => (
                <>
                  <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                  <td className="px-6 py-4 ">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.quantity}
                  </td>

                  <td className="px-6 py-4 ">{product.price}</td>
                </>
              ))}
              <td className="px-6 py-4">
                <p>Name: &nbsp;{order.address.name}</p>
                <p>Mobile No:&nbsp;{order.address.mobile}</p>
                <p className="overflow-scroll">
                  Address:&nbsp;{order.address.address}
                </p>
              </td>
              <td className="px-6 py-4 ">{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
