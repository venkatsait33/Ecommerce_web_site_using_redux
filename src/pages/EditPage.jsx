import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct } from "../redux/productReducer/action";
import { IoMdArrowBack } from "react-icons/io";
import { toast } from "react-toastify";

export default function EditPage() {
  let { id } = useParams();
  const product = useSelector((store) =>
    store.productReducer.products.find((item) => item.id === parseInt(id))
  );
  const dispatch = useDispatch();

  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  // console.log(products);
  useEffect(() => {
    if (product) {
      setPrice(product.price);
      setBrand(product.brand);
      setCategory(product.category);
      setName(product.name);
      setImage(product.image);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: parseInt(id),
      name,
      brand,
      category,
      image,
      price: parseFloat(price),
    };
    dispatch(editProduct(updatedProduct));
    console.log(updatedProduct);
    toast.success("product updated successfully");
  };

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className="flex mx-auto h-[70vh] border border-solid border-gray-300 dark:border-white rounded-lg p-4">
      {" "}
      <span>
        <button
          onClick={handleBack}
          className="px-4 py-2 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 dark:text-black"
        >
          <IoMdArrowBack />
        </button>
      </span>
      <div className="flex flex-col items-center p-4 mx-auto mt-5 rounded-lg shadow-md bg-slate-500 w-[60%] h-[60vh] laptop:h-[80vh] mb-2">
        <h1 className="mb-4 text-2xl font-semibold">{id}</h1>
        {product ? (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-3">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="p-2 border-2 border-gray-300 rounded-lg w-[80%] dark:text-black"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border-2 border-gray-300 rounded-lg w-[80%] dark:text-black"
              />
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="p-2 border-2 border-gray-300 rounded-lg w-[80%] dark:text-black"
              />
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="p-2 border-2 border-gray-300 rounded-lg w-[80%] dark:text-black"
              />
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="p-2 border-2 border-gray-300 rounded-lg w-[80%] dark:text-black"
              />

              <button
                type="submit"
                className="px-4  py-2 mx-auto w-[80%] text-white bg-blue-400 border rounded-lg hover:bg-blue-500"
              >
                update
              </button>
            </div>
          </form>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
