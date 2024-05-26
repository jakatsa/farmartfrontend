
import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { useLocation, useParams } from "react-router-dom";

export const SingleProduct = () => {
  const [animal, setAnimal] = useState({});
  const location = useLocation();
  const {id} = useParams()
  console.log(id)

  useEffect(() => {
    if (location.state && location.state.item) {
      setDetails(location.state.item);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(
          `https://farmartbackend-3.onrender.com/api/animals/${id}`
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

    fetchAnimals();
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
          <div>
            <p>{animal.animal_name}</p>
            <img src = {animal.animal_picture} alt = {animal.animal_name}/>
          </div>
        </div>
      </div>
    </>
  );

};
