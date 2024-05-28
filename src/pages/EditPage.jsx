import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../redux/productReducer/action";

export default function EditPage() {
  let { id } = useParams();
  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();
  const [price, setPrice] = useState("");

  ;
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
    <div>
      <h1>{id}</h1>
      <input type="number" value={price} onChange={handleChange} />
      <button onClick={handleEdit}>update</button>
    </div>
  );
}
