import React from "react";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";

function HomePage() {
  return (
    <div className="flex p-2 dark:bg-gray-900 dark:text-white">
      <div
        className="sticky w-[15%] max-[668px]:absolute  border-r-[2px] border-solid border-gray-300 rounded-l-lg dark:bg-gray-800 dark:border-white-700 tablet:w-[170px]"
      >
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
