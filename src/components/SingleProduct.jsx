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
  const storedToken = localStorage.getItem("token");
  const customerId = localStorage.getItem("customer_id"); // Assuming customer ID is stored in localStorage
  const quantity = 1; // Default quantity, you can adjust this as needed

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
          `http://127.0.0.1:8000/api/animals/${id}`
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

  const addToCart = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/orders/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${storedToken}`,
        },
        body: JSON.stringify({
          customer: customerId,
          animal: animal.id,
          quantity: quantity,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Order created successfully:", data);
        alert("Order created successfully!");
      } else {
        console.error("Error:", data);
        alert("Failed to create order.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create order.");
    }
  };

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
              onClick={addToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
