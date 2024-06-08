import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Admin from "./Admin";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import EditPage from "./EditPage";
import ProductDetails from "../components/ProductDetails";
import Layout from "./Layout";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import PageNotFound from "./PageNotFound";
import Address from "./Address";
import Orders from "./Orders";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-product"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditPage />
            </PrivateRoute>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/address" element={<Address />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
