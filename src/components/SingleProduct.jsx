import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { useLocation, useParams } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export const SingleProduct = () => {
  const [animal, setAnimal] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (location.state && location.state.item) {
      setAnimal(location.state.item);
      setLoading(false);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(
          `https:farmartbackend-3.onrender.com/api/animals/${id}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setAnimal(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (!location.state || !location.state.item) {
      fetchAnimals();
    }
  }, [id, location.state]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <NavBar />
      <div className="max-w-screen-xl mx-auto my-10 p-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-shrink-0">
            <img
              src={animal.animal_picture}
              alt={animal.animal_name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">{animal.animal_name}</h1>
              <p className="font-semibold mb-2">Age: {animal.animal_age}</p>
              <p className="text-gray-500 mb-4">${animal.animal_price}</p>
              <p className="text-gray-700 mb-4">{animal.animal_description}</p>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition duration-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};