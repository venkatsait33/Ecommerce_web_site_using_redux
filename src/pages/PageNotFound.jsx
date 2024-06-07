import React from "react";
import { Link } from "react-router-dom";
import TabTitle from "../components/TabTitle";

const PageNotFound = () => {
  TabTitle("404-page-not-found");
  return (
    <div className="flex flex-col items-center justify-center mt-2 mb-4 h-[80vh] w-full dark:bg-gray-900">
      <div className="flex items-center justify-center mb-5">
        <img
          src="/src/assets/error-404-page-not-found-vector-14463951.jpg"
          alt="404_pagenotfound"
          className="w-[50%] rounded-sm"
        />
      </div>
      <div>
        <Link to="/">
          <span className="p-3 text-2xl font-bold text-center text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-700">
            Go Home
          </span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
