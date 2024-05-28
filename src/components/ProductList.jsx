import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProducts } from "../redux/productReducer/action";
import ProductCard from "./ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

function ProductList() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  console.log(products);
  const location = useLocation();

  const object = {
    params: {
      gender: searchParams.getAll("gender"),
      category: searchParams.getAll("category"),
      _sort: searchParams.getAll("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(object));
  }, [location.search]);

  if (!Array.isArray(products)) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    dispatch(fetchProducts(currentPage, itemsPerPage));
  }, [dispatch, currentPage]);
  const totalPages = Math.ceil(10 / itemsPerPage);

  return (
    <div className="grid grid-cols-2 tablet:grid-cols-3 items-center justify-center w-[83%] gap-3 p-5 mx-auto bg-white rounded-lg shadow-lg h-full">
      {/* we use and operator to show that if the data is passed from the server or not. if the data is not present it will shows the blank products */}
      {products &&
        products.map((element) => {
          return <ProductCard key={element.id} {...element} />;
        })}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      ;
    </div>
  );
}

export default ProductList;
