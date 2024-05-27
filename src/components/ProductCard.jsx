import React from "react";

function ProductCard({ brand, category, gender, image, name, price }) {
  return (
    <div className="w-full gap-2 p-4 mx-auto text-center transition-all bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg ">
      {" "}
      <img src={image} alt="" className="w-[80%] mb-2 object-contain" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <h3 className="font-medium text-gray-500">Price: {price}</h3>
      <p className="font-medium text-gray-500">Brand: {brand}</p>
      <p className="font-medium text-gray-500">Category: {category}</p>
      <p className="font-medium text-gray-500">Gender: {gender}</p>
      <button className="p-2 mt-2 text-center bg-blue-400 rounded-md hover:bg-blue-600">
        Edit
      </button>
    </div>
  );
}

export default ProductCard;
