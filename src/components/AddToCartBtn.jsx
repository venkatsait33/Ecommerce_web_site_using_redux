import React from "react";

const AddToCartBtn = ({ handleAddToCart }) => {
  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
