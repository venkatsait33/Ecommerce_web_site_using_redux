import React from "react";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";

function HomePage() {
  return (
    <div className="flex h-screen p-2 mb-5 dark:bg-gray-900 dark:text-white">
      <div className="sticky w-[15%] max-[668px]:absolute  border-r-[2px] border-solid border-gray-300  dark:border-white-700 tablet:w-[170px] h-full solid bg-white  dark:bg-gray-900 dark:text-white  dark:border-white-700  dark:border-r-[2px] dark:border-solid rounded-l-lg  max-[668px]:hidden ">
        <SideBar />
      </div>
      <div
        className="h-[100vh] mx-auto  flex-auto overflow-y-scroll  bg-white 
      rounded-r-lg dark:bg-gray-900 dark:text-white "
      >
        <ProductList />
      </div>
    </div>
  );
}

export default HomePage;
