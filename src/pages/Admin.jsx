import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productReducer/action";
import { toast } from "react-toastify";

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
    toast.success("product added successfully");
    // reset the form
    setProduct(initialState);
  };

  return (
    <div className="flex items-center justify-center h-full mb-2">
      <div className="w-[70%] p-3 border-[1px] border-solid mx-auto bg-slate-300 rounded-md shadow-sm mt-2">
        <form
          action=""
          className="flex flex-col gap-3 justify-center items-center p-3 w-[90%] mx-auto"
          onSubmit={handleSubmit}
        >
          <h1 className="mt-2 text-xl font-bold text-center dark:text-black">
            Add Product
          </h1>
          <input
            type="text"
            placeholder="product Name"
            className="w-[90%] rounded p-2 placeholder:font-black"
            onChange={(e) => handleChange(e)}
            value={product.name}
            name="name"
            required
          />

          <input
            type="text"
            placeholder="product image"
            className="w-[90%] rounded p-2  placeholder:font-black"
            onChange={(e) => handleChange(e)}
            value={product.image}
            name="image"
            required
          />
          <input
            type="text"
            placeholder="product Brand"
            className="w-[90%] rounded p-2  placeholder:font-black"
            onChange={(e) => handleChange(e)}
            value={product.brand}
            name="brand"
            required
          />
          <input
            type="text"
            placeholder="product Price"
            className="w-[90%] rounded p-2 placeholder:font-black"
            onChange={(e) => handleChange(e)}
            value={product.price}
            name="price"
            required
          />
          <select
            className="w-[90%] rounded p-2 placeholder:font-black dark:text-black"
            onChange={(e) => handleChange(e)}
            value={product.category}
            name="category"
            required
          >
            <option value="" disabled selected className="dark:text-black">
              Category
            </option>
            <option value="t-shirt" className="dark:text-black">
              t-shirt
            </option>
            <option value="jeans" className="dark:text-black">
              jeans
            </option>
            <option value="shoes" className="dark:text-black">
              shoes
            </option>
            <option value="shorts" className="dark:text-black">
              shorts
            </option>
            <option value="footwear" className="dark:text-black">
              footwear
            </option>
            <option value="womenTop" className="dark:text-black">
              womenTop
            </option>
            <option value="salwar" className="dark:text-black">
              salwar
            </option>
          </select>

          <select
            className="w-[90%] rounded p-2 placeholder:font-black dark:text-black"
            onChange={(e) => handleChange(e)}
            value={product.gender}
            name="gender"
            required
          >
            <option value="" disabled selected className="dark:text-black">
              Gender
            </option>
            <option value="male" className="dark:text-black">
              male
            </option>
            <option value="female" className="dark:text-black">
              female
            </option>
            <option value="kid" className="dark:text-black">
              kid
            </option>
          </select>
          <button
            className="w-[90%] bg-[#0a2b9f] text-white rounded p-2 cursor-pointer hover:bg-[#0a2b9f]/80"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
