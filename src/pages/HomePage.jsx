import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";
import { FaFilter } from "react-icons/fa";
import TabTitle from "../components/TabTitle";

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth < 3000);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  TabTitle("Home");
  return (
    <>
      {isMobile && (
        <div className="static top-0 left-0 z-10 flex flex-row items-center w-full p-2 mt-2 justify-evenly ">
          <h1 className="text-xl font-bold">Products</h1>
          <button
            onClick={toggleSidebar}
            className="flex text-xl justify-evenly"
          >
            Filter
            <FaFilter />
          </button>
        </div>
      )}

      <div className="relative flex p-2 dark:bg-gray-900 dark:text-white">
        <div
          className={`inset-0 z-20 ${
            isSidebarOpen ? "block" : "hidden"
          } max-[960px]:block transition-transform duration-300`}
        >
          <SideBar />
        </div>
        <div className="h-[100vh] mx-auto  flex-auto overflow-y-scroll rounded-r-lg dark:bg-gray-900 dark:text-white">
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default HomePage;
