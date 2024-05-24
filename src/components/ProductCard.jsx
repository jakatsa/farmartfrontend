import React from "react";
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

  return (
    <div className="p-4 border rounded-lg shadow-lg">
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
    </div>
  );
};
