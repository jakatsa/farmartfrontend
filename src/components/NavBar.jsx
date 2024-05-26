import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi"; // Import menu icon for mobile
import { Link } from "react-router-dom";
export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 bg-white z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4 lg:py-8">
            <Link to="/HomePage">
              {" "}
              <h1 className="text-4xl font-medium">Farmart</h1>{" "}
            </Link>
            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <FiMenu className="text-2xl" />
              </button>
            </div>
            <div
              className={`lg:flex flex-grow items-center ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <div className="relative w-full lg:max-w-[500px] mt-4 lg:mt-0">
                <input
                  className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
                  type="text"
                  placeholder="search livestock"
                />
                <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" />
              </div>
              <div className="flex gap-4 mt-4 lg:mt-0 lg:ml-4">
                <div className="icon__wrapper">
                  <AiOutlineUser className="text-2xl" />
                </div>
                <div className="icon__wrapper relative">
                  <Link to="/Cart">
                    <AiOutlineShoppingCart className="text-2xl" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
