import React from "react";
import RenderStars from "./RenderStars";

const Review = () => {
  return (
    <div className="w-full px-4 py-5 mx-auto dark:bg-gray-900">
      <div div className="">
        <RenderStars rating={3.5} />
        <p>May 22 2024</p>
        <h1 className="text-xl font-bold">Shops S</h1>
        <h3> Light, cool & comfy</h3>
        <p>
          I am using this laptop from last 4 months and it's working very well.
          It's fast because of SSD and RAM. Display is also very good. It's a
          good laptop for general use.
        </p>
      </div>
    </div>
  );
};

export default Review;
