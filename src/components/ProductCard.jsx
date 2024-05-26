import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

export const ProductCard = ({ animal }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    const item = {
      ...animal,
      id: animal.animal_id, // Ensure there's an `id` property
      price: animal.animal_price, // Ensure there's a `price` property
    };
    console.log("Item to be added to cart:", item); // Log the item object
    addItem(item);
  };
  const navigate = useNavigate();
  const _id = animal.animal_name;
  const idString = (_id) => {
    return String(_id).toLowerCase().split("").join("");
  };
  const rootId = idString(_id);
  const handleDetails = () => {
    navigate(`/SingleProduct/${rootId}`),
      {
        state: {
          item: animal,
        },
      };
  };
  return (
    <>
      <div className="group">
        <div
          onClick={handleDetails}
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 cursor-pointer overflow-hidden"
        >
          <img
            src={animal.animal_picture}
            alt={animal.animal_name}
            className="w-full h-full object-cover group-hover:scale-110 duration-500"
          />
        </div>
        <div className="w-full border-[1px] px-2 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-titleFont text-sm sm:text-base md:text-lg font-bold">
                {animal.animal_name.substring(0, 15)}
              </h2>
            </div>
            <div className="flex gap-2 relative overflow-hidden w-24 sm:w-28 md:w-32 text-xs sm:text-sm md:text-base justify-end">
              <div
                className="flex gap-2 transform group-hover:translate-x-24
          transition-transform duration-500"
              >
                <p className="text-gray-500">${animal.animal_price}</p>
                <p className="font-semibold">Age: {animal.animal_age}</p>
              </div>
              <p
                className="absolute z-20 w-[80px] sm:w-[100px] text-gray-500
          hover:text-gray-900 flex items-center gap-1 top-0 transform
          -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer
          duration-500 "
                onClick={handleAddToCart}
              >
                Add To Cart
                <span>
                  <BsArrowRight />
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs sm:text-sm md:text-base">
              {animal.animal_breed}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
