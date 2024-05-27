import React from "react";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";

function HomePage() {
  return (
    <div className="flex w-full p-2 ">
      <div className="sticky bottom-0 right-0 z-0 h-[100vh] bg-white rounded-l-lg shadow-md ">
        <SideBar />
      </div>
      <ProductList />
    </div>
  );
}

export default HomePage;
