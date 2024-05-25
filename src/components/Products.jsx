import React, { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(
          "https://farmartbackend.onrender.com/api/animals/"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setAnimals(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="py-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl bg-black text-white py-2 text-center w-80">
            our products
          </h1>
          <span className="w-20 h-[3px] bg-black"></span>
          <p className="max-w-[700px] text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
            {animals.map((animal) => (
              <ProductCard key={animal.animal_id} animal={animal} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
{
  /*** <h1>products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {animals.map((animal) => (
          <ProductCard key={animal.animal_id} animal={animal} />
        ))}
      </div> */
}
