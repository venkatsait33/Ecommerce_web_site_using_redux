import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../redux/productReducer/action";

function Products() {
  // const products = useSelector((state) => state.products);
  // const dispatch = useDispatch();
  // const addProduct = (product) => dispatch(addProduct(product));
  // const removeProduct = (id) => dispatch(removeProduct(id));
  // const updateProduct = (product) => dispatch(updateProduct(product));
  const getProducts = () => useDispatch(getProduct());
  console.log(getProducts);
  useEffect(() => {
    getProducts();
  }, []);
  return <div>Products</div>;
}

export default Products;
