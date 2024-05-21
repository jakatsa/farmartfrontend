import React from "react";
import { nextSlide, prevSlide, dotSlide } from "../features/slices/SliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../assets/data/DummyData";

export const Slice = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slideIndex", slideIndex);
  const dispatch = useDispatch();

  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item) => (
          <div
            key={item.id}
            className={
              parseInt(item.id) === slideIndex
                ? "opacity-100 duration-700 ease-in-out scale-100"
                : "opacity-0 duration-700 ease-in-out scale-95"
            }
          >
            <div>
              {parseInt(item.id) === slideIndex && (
                <img
                  className="h-auto w-full md:h-[600px] lg:h-[850px]"
                  src={item.img}
                  alt="livestock"
                />
              )}
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 mx-auto inset-x-0 md:inset-x-1/4 px-4 md:px-0 text-center">
              <p className="text-white text-2xl md:text-4xl font-inter font-bold tracking-normal leading-none">
                {parseInt(item.id) === slideIndex && item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-12">
        {sliderData.map((dot, index) => (
          <div className="mr-2 md:mr-4" key={dot.id}>
            <div
              className={
                index === slideIndex
                  ? "bg-green-300 rounded-full p-2 cursor-pointer"
                  : "bg-white rounded-full p-2 cursor-pointer"
              }
              onClick={() => dispatch(dotSlide(index))}
            ></div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-green-300"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-green-300"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};
