import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProducts } from "../redux/productReducer/action";
import ProductCard from "./ProductCard";
import { useLocation, useParams, useSearchParams } from "react-router-dom";


function ProductList() {
  const dispatch = useDispatch();
  const location = useLocation();
  const products = useSelector((store) => store.productReducer.products);
  const totalItems = useSelector((store) => store.productReducer.totalItems);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  //console.log(products);

  useEffect(() => {
    dispatch(fetchProducts(currentPage, itemsPerPage));
  }, [dispatch, currentPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

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

  return (
    <div className="h-full p-4 product-list">
      <div className=" grid ml-5 items-center justify-center w-[95%] grid-cols-2 gap-3 bg-white tablet:grid-cols-3 laptop:grid-cols-4 dark:bg-gray-900">
        {/* we use and operator to show that if the data is passed from the server or not. if the data is not present it will shows the blank products */}
        {products &&
          products.map((element) => {
            return (
              <div key={element.id}>
                <ProductCard
                  key={element.id}
                  {...element}
                  showButtons={true}
                  products={products}
                />
              </div>
            );
          })}
      </div>
      <div className="flex flex-row items-center justify-center mt-4 pagination-controls">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 text-white bg-gray-500 rounded"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 ml-2 text-white bg-gray-500 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductList;
