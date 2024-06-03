import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productReducer/action";
import { Link } from "react-router-dom";
import Add_Delete_Btn from "./Add_Delete_Btn";
import { addToCart } from "../redux/cartReducer/action";
import { toast } from "react-toastify";
function ProductCard({
  brand,
  category,
  gender,
  image,
  name,
  price,
  id,
  showButtons,
}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id));
    toast.error(`Product ${name} deleted`)
  };

  return (
    <>
      <div>
        <div className="w-full h-full gap-2 p-2 mx-auto text-center transition-all bg-white border border-gray-300 border-solid rounded-lg shadow-md cursor-pointer  hover:shadow-lg dark:bg-gray-900">
          <div className="flex items-center justify-center text-center ">
            <Link to={`/product/${id}`}>
              <img
                src={image}
                alt=""
                className="max-w-[80px]  mx-auto rounded-lg max-h-[100px]"
              />
              <h2 className="text-xl font-semibold">{name}</h2>

              <h3 className="font-medium text-gray-500 dark:text-white">
                Price: $ {price}
              </h3>
              <p className="font-medium text-gray-500 dark:text-white">
                Brand: {brand}
              </p>
              <p className="font-medium text-gray-500 dark:text-white">
                Category: {category}
              </p>
              <p className="font-medium text-gray-500 dark:text-white">
                Gender: {gender}
              </p>
            </Link>
          </div>
          {showButtons && (
            <Add_Delete_Btn handleDelete={handleDelete} id={id} />
          )}
          
        </div>
      </div>
    </>
  );
}

export default ProductCard;
