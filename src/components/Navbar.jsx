import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getProducts } from "../redux/productReducer/action";
import { logout } from "../redux/authReducer/action";
import { IoMoon } from "react-icons/io5";
import { FaBars, FaSun, FaTimes } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { toast } from "react-toastify";
import SearchBar from "./SearchBar";
import logo from "../assets/isometric-laptop-with-shopping-cart-keypad.png";

function Navbar() {
  const [query, setQuery] = useState("");
  const auth = useSelector((store) => store.authReducer.isAuth);
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((store) => store.cartReducer.cartItems);
  let ref = useRef();
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

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
    //console.log("logout sucessfull");
    navigate("/login");
    toast.error("logout successful");
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full border-b-2 border-gray-300 navbar dark:bg-gray-900 dark:text-white">
      <div className="navbar-container">
        <Link to="/">
          <div className="flex flex-row items-center">
            <img src={logo} alt="" className="w-[50px] h-[50px] mr-2 solid" />
            &nbsp;
            <h1 className="text-xl font-bold dark:text-white navbar-brand">
              Ecom-Cart
            </h1>
          </div>
        </Link>
        <div className="relative menu-icon">
          <button onClick={toggleMenu} className="text-black dark:text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul
          ref={menuRef}
          className={`${
            isOpen ? "nav-menu active" : "nav-menu"
          } dark:text-white dark:bg-gray-900`}
        >
          <div>
            <SearchBar />
          </div>
          <li className="nav-item">
            <NavLink
              to="/home"
              exact
              className="text-black dark:text-white nav-links"
              activeClassName="active font-bold"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/add-product"
              exact
              className="text-black dark:text-white nav-links"
              activeClassName="active font-bold"
            >
              Admin Page
            </NavLink>
          </li>
          {/*<li className="nav-item">
            <NavLink
              to="/edit/1"
              className="text-black dark:text-white nav-links"
              exact
              activeClassName="active font-bold"
            >
              Edit
            </NavLink>
          </li>*/}

          {auth ? (
            <div className="flex ">
              <li className="nav-item">
                <NavLink
                  to="/orders"
                  exact
                  activeClassName="active"
                  className="text-black dark:text-white nav-links"
                >
                  Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={handleLogout}
                  to="/login"
                  exact
                  activeClassName="active "
                  className="text-black dark:text-white nav-links"
                >
                  Logout
                </NavLink>
              </li>
            </div>
          ) : (
            <li className="nav-item">
              <NavLink
                to="/login"
                exact
                activeClassName="active"
                className="text-black dark:text-white nav-links"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="p-1 ml-4">
        <Link to="/cart" className="relative">
          <CiShoppingCart size={24} className="dark:text-white" />
          {totalItems > 0 && (
            <span className="absolute flex items-center justify-center w-5 h-5 text-white bg-red-500 rounded-full -top-3 -right-2 dark:bg-red-900">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
      {/*      <div className="p-1 ml-4">
        <Link to="/checkout">
          <MdShoppingCartCheckout size={24} className="dark:text-white" />
        </Link>
      </div>*/}
      <button
        onClick={() => darkModeHandler()}
        className="p-1 ml-4 bg-gray-500 rounded dark:bg-yellow-500 "
      >
        {dark && <FaSun className="dark:text-white w-[25px] h-[25px]  " />}
        {!dark && <IoMoon className="w-[25px] h-[25px]  " />}
      </button>
    </nav>
  );
}

export default Navbar;
