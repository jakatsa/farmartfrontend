import React, { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { SingleProduct } from "./SingleProduct";

export const Products = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(400);
  const [displayedAnimals, setDisplayedAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(
          "https://farmartbackend.onrender.com/api/animals/"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setAnimals(data);
        setDisplayedAnimals(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  useEffect(() => {
    const filteredAnimals = animals.filter((animal) => {
      const matchesSearchTerm = animal.animal_type
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesBreeds =
        selectedBreeds.length === 0 ||
        selectedBreeds.includes(animal.animal_breed);
      const matchesAgeRange =
        animal.animal_age >= minAge && animal.animal_age <= maxAge;
      return matchesSearchTerm && matchesBreeds && matchesAgeRange;
    });
    setDisplayedAnimals(filteredAnimals);
  }, [animals, searchTerm, selectedBreeds, minAge, maxAge]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBreedChange = (e) => {
    const breed = e.target.value;
    if (e.target.checked) {
      setSelectedBreeds([...selectedBreeds, breed]);
    } else {
      setSelectedBreeds(selectedBreeds.filter((b) => b !== breed));
    }
  };

  const handleMinAgeChange = (e) => {
    setMinAge(parseInt(e.target.value));
  };

  const handleMaxAgeChange = (e) => {
    setMaxAge(parseInt(e.target.value));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="py-10">
        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Search by animal type"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 p-2 mb-4 w-full max-w-md rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:border-transparent transition duration-300 ease-in-out"
            style={{
              "--tw-ring-color": "#8EC711",
            }}
          />

          <div className="flex flex-col mb-4"></div>
          <div className="flex items-center gap-2">
            <label>Min Age:</label>
            <input
              type="number"
              value={minAge}
              onChange={handleMinAgeChange}
              className="border border-gray-300 p-2 mb-4 w-full max-w-md rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:border-transparent transition duration-300 ease-in-out"
              style={{
                "--tw-ring-color": "#8EC711",
              }}
            />
          </div>
          <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedAnimals.map((animal) => (
              <ProductCard key={animal.animal_id} animal={animal} />
            ))}
          </div>
          <p>Total animals: {displayedAnimals.length}</p>
        </div>
      </div>
    </>
  );
};

export default Products;
