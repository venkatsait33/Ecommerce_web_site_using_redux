import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex p-2 border-t-2 max-[560px]:flex-col max-[560px]:justify-center gap-2 dark:bg-gray-900 text-center ">
        <div className="flex-1 mr-3 border-r-2 border-gary-300 dark:border-white max-[560px]:border-hidden">
          <span className="mx-auto mb-2 text-xl border-b-2 ">
            online shopping
          </span>
          <ul className="flex flex-col gap-2">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home</li>
            <li>Beauty</li>
            <li>Footwear</li>
          </ul>
        </div>
        <div className="flex-1 mr-3 border-r-2 border-gary-300 dark:border-white max-[560px]:border-hidden">
          <span className="mx-auto text-xl border-b-2">Customer policies</span>
          <ul className="flex flex-col gap-2 mt-2 ">
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Privacy police</li>
          </ul>
        </div>
        <div className="flex-1">
          <span className="mx-auto text-xl border-b-2">keep in touch</span>
          <ul className="flex flex-row justify-center gap-3 mt-2 ">
            <li>
              <FaFacebook className="text-2xl duration-75 hover:scale-150" />
            </li>
            <li>
              <FaInstagram className="text-2xl duration-75 hover:scale-150" />
            </li>
            <li>
              <FaTwitter className="text-2xl duration-75 hover:scale-150" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center border-t-2 border-gray-300 shadow-md dark:bg-gray-900 dark:text-white">
        <h3 className="mx-auto mt-2 text-xl">© 2024 T.VENKATA SAI All rights reserved.</h3>
      </div>
    </>
  );
};

export default Footer;
