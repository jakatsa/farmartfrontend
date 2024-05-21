import React from "react";
import { useDispatch } from "react-redux";
import cow1 from "../../assets/images/customer-sign-up-bg.jpg";
import cow2 from "../../assets/images/farmers-sign-up-bg.jpg";
import { filterProducts } from "../../features/slices/ProductSlice";
import { Link } from "react-router-dom";
export const FilterButton = () => {
  const buttons = ["Poultry", "Meat Animals", "Work Animals", "Dairy Animals"];
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={"/FilteredProducts/" + button}>
                <button
                  className="text-black bg-gray-100 border border-gray-300 hover:bg-gray-300 transition duration-300 ease-in-out
                 px-4 py-2
                 sm:px-6 sm:py-3
                 md:px-8 md:py-4
                 lg:px-10 lg:py-5
                 xl:px-12 xl:py-6
                 rounded-lg"
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-black p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center item-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={cow1}
          alt="clothes"
        ></img>
      </div>
    </div>
  );
};
