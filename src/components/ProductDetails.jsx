import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../redux/productReducer/action";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { addToCart } from "../redux/cartReducer/action";

const ProductDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, []);
  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleAddToCart = () => {
    dispatch(addToCart(products));
  };

  return (
    <>
      <div className="flex mx-auto h-[70vh] border border-solid border-gray-300 dark:border-white rounded-lg p-4">
        <span>
          <button
            onClick={handleBack}
            className="px-4 py-2 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 dark:text-black"
          >
            <IoMdArrowBack />
          </button>
        </span>
        <div className="flex items-center justify-center w-[80%] p-2 mx-auto  text-center bg-white rounded-lg shadow-lg dark:bg-gray-900 gap-4 h-[50vh] mt-4 border border-solid border-gray-300 dark:border-white">
          <div className="sticky bottom-0 w-[30%] right-0 z-0 rounded-l-lg ">
            <img
              src={products.image}
              alt={products.name}
              className=" ml-2 w-[40%] text-center rounded-lg h-full"
            />
          </div>

          <div className="w-[60%] flex flex-col justify-center h-full gap-3 p-3 bg-transparent border-l-2 border-gray-900  bg-slate-50 dark:border-white">
            <h2 className="text-xl font-semibold dark:text-white">
              {products.name}
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
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 mx-auto mt-4 text-white bg-blue-500 rounded dark:bg-gray-200 dark:text-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
