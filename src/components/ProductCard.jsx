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
          className="w-full h-96 cursor-pointer overflow-hidden"
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
              <h2 className="font-titleFont text-base font-bold">
                {animal.animal_name.substring(0, 15)}
              </h2>
            </div>
            <div className="flex gap-2 relative overflow-hidden w-28 text-sm justify-end">
              <div
                className="flex gap-2 transform group-hover:translate-x-24
              transition-transform duration-500"
              >
                <p className="text-gray-500">${animal.animal_price}</p>
                <p className="font-semibold">Age: {animal.animal_age}</p>
              </div>
              <p
                className="absolute z-20 w-[100px] text-gray-500
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
            <p> {animal.animal_breed}</p>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /** <div className="p-4 border rounded-lg shadow-lg">
      <img
        src={animal.animal_picture}
        alt={animal.animal_name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{animal.animal_name}</h2>
        <p className="text-gray-700">{animal.animal_description}</p>
        <p className="text-green-500">${animal.animal_price}</p>
        <p className="text-gray-600">Type: {animal.animal_type}</p>
        <p className="text-gray-600">Age: {animal.animal_age}</p>
        <p className="text-gray-600">Location: {animal.animal_location}</p>
        <p className="text-gray-600">Breed: {animal.animal_breed}</p>
        <p className="text-gray-600">Available: {animal.available}</p>
      </div>
      <button
        className="rounded-lg px-4 py-2 bg-green-300 hover:bg-green-400 duration-300"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div> */
}
