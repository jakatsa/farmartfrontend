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
      <h1>products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {animals.map((animal) => (
          <ProductCard key={animal.animal_id} animal={animal} />
        ))}
      </div>
    </>
  );
};
