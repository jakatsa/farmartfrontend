import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { useLocation } from "react-router-dom";

export const SingleProduct = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.item) {
      setDetails(location.state.item);
    }
  }, [location.state]);

  return (
    <>
      <NavBar />
      <div>
        <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
          <div>gold</div>
        </div>
      </div>
    </>
  );
};
