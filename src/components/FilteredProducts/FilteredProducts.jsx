import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log("products", products);
  const { type } = useParams();
  console.log("params", type);
  return (
    <>
      <div>
        <div className="pt-16">
          <div className="pt-16">
            <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
              {type}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
