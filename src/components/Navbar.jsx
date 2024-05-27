import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 right-0 z-10 flex flex-row items-center justify-between p-4 mb-2 overflow-hidden bg-white border-b border-gray-200 shadow-md">
      <h1 className="text-2xl font-bold">Product List</h1>
      <Link to="/">Home</Link>
      <Link to="/add-product">Admin Page</Link>
      <Link to="/edit/1">Edit</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Navbar;
