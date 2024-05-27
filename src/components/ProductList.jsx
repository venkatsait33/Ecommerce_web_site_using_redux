import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productReducer/action";
import ProductCard from "./ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";

function ProductList() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const products = useSelector((store) => store.productReducer.products);
  console.log(products);

  const object = {
    params: {
      gender: searchParams.getAll("gender"),
      category: searchParams.getAll("category"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(object));
  }, [location.search]);

  return (
    <div className="grid grid-cols-2 tablet:grid-cols-3 items-center justify-center w-[83%] gap-3 p-5 mx-auto bg-white rounded-lg shadow-lg h-full">
      {/* we use and operator to show that if the data is passed from the server or not. if the data is not present it will shows the blank products */}
      {products &&
        products.map((element) => {
          return <ProductCard key={element.id} {...element} />;
        })}
    </div>
  );
}

export default ProductList;
