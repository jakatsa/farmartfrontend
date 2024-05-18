import React from "react";

export const NavBar = () => {
  return (
    <>
      <div
        className=" p-4 w-full flex justify-center items-center"
        style={{ backgroundColor: " #8EC711" }}
      >
        <h1 className="text-white font-inter text-2xl font-bold">Farmart</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center p-4">
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <img
            className="h-28 w-auto" // Adjusted to maintain aspect ratio
            src="https://cdn.vectorstock.com/i/1000v/34/79/farm-logo-design-agriculture-logo-design-vector-38473479.jpg"
            alt="store"
          ></img>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="text-black text-base font-inter font-medium text-center">
            Logout
          </button>
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="font-inter text-base font-medium tracking-normal leading-none text-center ml-2">
              Wish List
            </p>
          </div>

          <div className="flex flex-row items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#000"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>

            <p className="font-inter text-base font-medium tracking-normal leading-none text-center ml-2">
              Shopping Bag
            </p>
          </div>
        </div>
      </div>

      <div
        className=" p-4 w-full flex flex-col md:flex-row items-center justify-center text-center"
        style={{ backgroundColor: " #8EC711" }}
      >
        <p className="text-white font-inter text-base font-medium">50% OFF</p>
        <p className="text-white font-inter text-base font-medium mx-0 md:mx-12">
          Free shipping and returns
        </p>
        <p className="text-white font-inter text-base font-medium">
          Different payment methods
        </p>
      </div>
    </>
  );
};
