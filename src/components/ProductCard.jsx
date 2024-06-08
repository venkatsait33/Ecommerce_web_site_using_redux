import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productReducer/action";
import { Link } from "react-router-dom";
import Add_Delete_Btn from "./Add_Delete_Btn";
import { addToCart } from "../redux/cartReducer/action";
import { toast } from "react-toastify";
import RenderStars from "./RenderStars";
function ProductCard({
  brand,
  category,
  gender,
  image,
  name,
  price,
  id,
  showButtons,
  rating,
}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id));
    toast.error(`Product ${name} deleted`);
  };

  return (
    <>
      <div>
        <div className="w-full h-full p-2 m-1 mx-auto text-center transition-all border border-gray-100 border-solid rounded-lg shadow cursor-pointer hover:shadow-lg dark:bg-gray-900">
          <div className="flex items-center justify-center text-center ">
            <Link to={`/product/${id}`}>
              <img
                src={image}
                alt=""
                className="max-w-[200px]  mx-auto rounded-lg max-h-[100px]"
              />
              <h2 className="text-xl font-semibold">{name}</h2>
              <p>
                <RenderStars rating={rating} />
              </p>

              <h3 className="font-medium text-gray-500 dark:text-white">
                Price: &#8377; {price}
              </h3>
              <p className="font-medium text-gray-500 dark:text-white">
                Brand: &nbsp; {brand}
              </p>
              <p className="font-medium text-gray-500 dark:text-white">
                Category: &nbsp; {category}
              </p>
              <p className="font-medium text-gray-500 dark:text-white">
                Gender: &nbsp; {gender}
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
