import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productReducer/action";

const initialState = {
  name: "",
  image: "",
  brand: "",
  category: "",
  gender: "",
  price: "",
};

function Admin() {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      // we covert the price string to a number
      return { ...prev, [name]: name === "price" ? Number(value) : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    // reset the form
    setProduct(initialState)
  };

  return (
    <div className="w-[70%] p-3 border-[1px]border-solid mx-auto bg-slate-300 rounded-md shadow-sm mt-2">
      <form
        action=""
        className="flex flex-col gap-3 justify-center items-center p-3 w-[90%] mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="mt-2 text-xl font-bold text-center">Add Product</h1>
        <input
          type="text"
          placeholder="product Name"
          className="w-[90%] rounded p-2 placeholder:font-black"
          onChange={(e) => handleChange(e)}
          value={product.name}
          name="name"
        />

        <input
          type="text"
          placeholder="product image"
          className="w-[90%] rounded p-2  placeholder:font-black"
          onChange={(e) => handleChange(e)}
          value={product.image}
          name="image"
        />
        <input
          type="text"
          placeholder="product Brand"
          className="w-[90%] rounded p-2  placeholder:font-black"
          onChange={(e) => handleChange(e)}
          value={product.brand}
          name="brand"
        />
        <input
          type="text"
          placeholder="product Price"
          className="w-[90%] rounded p-2 placeholder:font-black"
          onChange={(e) => handleChange(e)}
          value={product.price}
          name="price"
        />
        <select
          className="w-[90%] rounded p-2 placeholder:font-black"
          onChange={(e) => handleChange(e)}
          value={product.category}
          name="category"
        >
          <option value="" disabled selected>
            Category
          </option>
          <option value="t-shirt">t-shirt</option>
          <option value="jeans">jeans</option>
          <option value="shoes">shoes</option>
          <option value="shorts">shorts</option>
        </select>

        <select
          className="w-[90%] rounded p-2 placeholder:font-black"
          onChange={(e) => handleChange(e)}
          value={product.gender}
          name="gender"
        >
          <option value="" disabled selected>
            Gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="kid">kid</option>
        </select>
        <button
          className="w-[90%] bg-[#0a2b9f] text-white rounded p-2 cursor-pointer hover:bg-[#0a2b9f]/80"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Admin;
