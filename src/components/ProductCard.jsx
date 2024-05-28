import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, fetchProducts } from "../redux/productReducer/action";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
function ProductCard({
  brand,
  category,
  gender,
  image,
  name,
  price,
  id,

}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <div>
        <div className=" max-w-[300px] max-h-[320px]  gap-2 p-4 mx-auto transition-all bg-white rounded-lg shadow-md cursor-pointer text-center hover:shadow-lg ">
          <div className="flex items-center justify-center text-center">
            <Link to={`/product/${id}`}>
              <img
                src={image}
                alt=""
                className="w-[50%] mb-2 mx-auto rounded-lg"
              />
              <h2 className="text-xl font-semibold">{name}</h2>

              <h3 className="font-medium text-gray-500">Price: $ {price}</h3>
              <p className="font-medium text-gray-500">Brand: {brand}</p>
              <p className="font-medium text-gray-500">Category: {category}</p>
              <p className="font-medium text-gray-500">Gender: {gender}</p>
            </Link>
          </div>
          <button className="p-2 mt-2 mr-4 text-center bg-blue-500 rounded-md hover:bg-blue-600">
            <Link to={`/edit/${id}`}>Edit</Link>
          </button>
          <button
            className="p-2 mt-2 text-center bg-red-500 rounded-md hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
       
      </div>
    </>
  );
}

export default ProductCard;
