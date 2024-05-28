import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../redux/productReducer/action";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const ProductDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, []);
  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <span>
        <button onClick={handleBack}>
          <IoMdArrowBack />
        </button>
      </span>
      <div className="flex items-center justify-center w-[80%] h-full  p-2 mx-auto mt-10 text-center bg-white rounded-lg shadow-lg">
        <div className="sticky bottom-0 w-[30%] right-0 z-0 rounded-l-lg ">
          <img
            src={products.image}
            alt={products.name}
            className="w-full rounded"
          />
        </div>

        <div className="w-[70%] h-full bg-transparent p-3 gap-3 flex flex-col justify-center bg-slate-50 ">
          <h2 className="text-xl font-semibold">{products.name}</h2>
          <h3 className="font-medium text-gray-500">
            Price: ${products.price}
          </h3>
          <p className="font-medium text-gray-500">Brand: {products.brand}</p>
          <p className="font-medium text-gray-500">
            Category: {products.category}
          </p>
          <p className="font-medium text-gray-500">Gender: {products.gender}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
