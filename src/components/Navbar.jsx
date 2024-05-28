import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getProducts } from "../redux/productReducer/action";
import { logout } from "../redux/authReducer/action";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  const [query, setQuery] = useState("");
  const auth = useSelector((store) => store.authReducer.isAuth);

  const dispatch = useDispatch();

  let ref = useRef();

  const paramObj = {
    params: {
      q: query,
    },
  };
  useEffect(() => {
    if (ref.current) {
      clearInterval(ref.current); // Clear the interval
    }
    ref.current = setTimeout(() => {
      dispatch(getProducts(paramObj));
    }, 1000);
  }, [query]);

  const handleLogout = () => {
    dispatch(logout());
    console.log("logout sucessfull");
  };

  return (
    <div className="sticky top-0 right-0 z-10 flex flex-row items-center justify-between p-4 mb-2 overflow-hidden bg-white border-b border-gray-200 shadow-md">
      <Link to="/">
        <h1 className="text-2xl font-bold">Product List</h1>
      </Link>
      <div>
        <span className="flex items-center text-center">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            className="w-[90%] rounded p-2  outline-none"
          />
          <BsSearch />
        </span>
      </div>
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/add-product" exact activeClassName="active">
        Admin Page
      </NavLink>
      <NavLink to="/edit/1" exact activeClassName="active">
        Edit
      </NavLink>
      {auth ? (
        <NavLink
          onClick={handleLogout}
          to="/login"
          exact
          activeClassName="active"
        >
          Logout
        </NavLink>
      ) : (
        <NavLink to="/login" exact activeClassName="active">
          Login
        </NavLink>
      )}
    </div>
  );
}

export default Navbar;
