import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, fetchProducts } from "../redux/productReducer/action";
import { Link } from "react-router-dom";
import Add_Delete_Btn from "./Add_Delete_Btn";
function ProductCard({
  brand,
  category,
  gender,
  image,
  name,
  price,
  id,
  showButtons,
}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <div>
        <div className=" max-w-[300px] max-h-[300px] gap-2 p-2 mx-auto transition-all bg-white rounded-lg shadow-md border border-gray-300 border-solid cursor-pointer text-center hover:shadow-lg dark:bg-gray-900">
          <div className="flex items-center justify-center text-center ">
            <Link to={`/product/${id}`}>
              <img
                src={image}
                alt=""
                className="max-w-[80px]  mx-auto rounded-lg max-h-[100px]"
              />
              <h2 className="text-xl font-semibold">{name}</h2>

              <h3 className="font-medium text-gray-500 dark:text-white">
                Price: $ {price}
              </h3>
              <p className="font-medium text-gray-500 dark:text-white">
                Brand: {brand}
              </p>
              <p className="font-medium text-gray-500 dark:text-white">
                Category: {category}
              </p>
              <p className="font-medium text-gray-500 dark:text-white">
                Gender: {gender}
              </p>
            </Link>
          </div>
          {showButtons && (
            <Add_Delete_Btn handleDelete={handleDelete} id={id} />
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
