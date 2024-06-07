import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../redux/productReducer/action";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { addToCart } from "../redux/cartReducer/action";
import { toast } from "react-toastify";
import RenderStars from "../components/RenderStars";
import Details from "./Details";
import Review from "./Review";

const ProductDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate(-2);
  }, [navigate]);

  const handleAddToCart = () => {
    dispatch(addToCart(products));
    toast.success("Added to cart successfully!");
  };

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [id]);

  return (
    <>
      <span>
        <button
          onClick={handleBack}
          className="px-4 py-2 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 dark:text-black"
        >
          <IoMdArrowBack />
        </button>
      </span>
      <div className="flex flex-wrap w-full p-4 mx-auto max-[560px]:flex-col max-[560px]:w-[100%]">
        <div className="flex items-center justify-center w-[90%] p-2 mx-auto  text-center dark:bg-gray-900 gap-4 mt-4 max-[560px]:flex-col max-[560px]:w-[80%]">
          <div className="w-[50%] flex items-center justify-center  rounded-l-lg ">
            <img
              src={products.image}
              alt={products.name}
              className="w-[45%] max-[560px]:w-[40%] text-center rounded-lg "
            />
          </div>

          <div className="w-[60%] flex flex-col h-full gap-3 p-3  border-gray-900 dark:border-white">
            <h2 className="text-xl font-semibold dark:text-white">
              {products.name}
              <div>
                Rating: <RenderStars rating={products.rating} />
              </div>
            </h2>
            <h3 className="font-medium text-gray-500 dark:text-white">
              Price: ${products.price}
            </h3>
            <p className="font-medium text-gray-500 dark:text-white">
              Brand: {products.brand}
            </p>
            <p className="font-medium text-gray-500 dark:text-white">
              Category: {products.category}
            </p>
            <p className="font-medium text-gray-500 dark:text-white">
              Gender: {products.gender}
            </p>
            <p className="font-medium text-gray-500 dark:text-white">
              Color: {products.color}
            </p>

            <button
              onClick={handleAddToCart}
              className="px-4 py-2 mx-auto mt-4 text-white bg-blue-500 rounded dark:bg-blue-400 dark:text-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Details />
      <div className="grid grid-cols-2 w-full p-4 mx-auto max-[560px]:grid-cols-1 max-[560px]:w-[100%]">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </>
  );
};

export default ProductDetails;
