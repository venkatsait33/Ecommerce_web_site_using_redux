import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../redux/productReducer/action";

export default function EditPage() {
  let { id } = useParams();
  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();
  const [price, setPrice] = useState("");

  // console.log(products);
  useEffect(() => {
    const data = products.find((el) => el.id === +id);
    setPrice(data.price);
  }, []);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleEdit = () => {
    const data = { price };
    dispatch(editProduct(id, data));
  };
  return (
    <div className="flex flex-col items-center p-4 mx-auto mt-5 rounded-lg shadow-md bg-slate-500 w-[60%]">
      <h1 className="mb-4 text-2xl font-semibold">{id}</h1>
      <div className="flex flex-row items-center gap-4">
        <input
          type="number"
          value={price}
          onChange={handleChange}
          className="p-2 border-2 border-gray-300 rounded-lg w-[60%]"
        />
        <button
          onClick={handleEdit}
          className="p-2 mx-auto text-white bg-blue-400 border rounded-lg hover:bg-blue-500"
        >
          update
        </button>
      </div>
    </div>
  );
}
