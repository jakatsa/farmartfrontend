import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("https://farmartbackend-1.onrender.com/api/auth/logout/");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="sticky top-0 bg-white z-10 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 lg:py-8">
          <Link to="/HomePage" className="text-4xl font-medium">
            Farmart
          </Link>
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FiMenu className="text-2xl" />
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center ${
              menuOpen ? "block" : "hidden"
            } justify-end`}
          >
            <div className="flex gap-4 mt-4 lg:mt-0">
              <div className="icon__wrapper">
                <AiOutlineUser className="text-2xl" />
              </div>
              <div className="icon__wrapper relative">
                <Link to="/Cart">
                  <AiOutlineShoppingCart className="text-2xl" />
                </Link>
              </div>
              <button onClick={handleLogout} className="text-2xl ml-auto">
                <FiLogOut className="mr-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
