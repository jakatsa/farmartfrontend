import React from "react";
import { CategoryCard } from "./CategoryCard";
const data = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Casual T-Shirt 1",
    text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
    type: "Poultry",
    size: ["XL", "L", "M", "S"],
    color: ["black", "gray", "green"],
    gender: "male",
    price: 45,
  },

  {
    id: "2",
    img: "https://images.unsplash.com/photo-1582661629051-43eadd614098?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Casual T-Shrit 2",
    text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
    type: "Meat Animals",
    size: ["M", "L", "XL"],
    color: ["black", "red", "brown"],
    gender: "male",
    price: 55,
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1624895831644-bb1d9ef2de06?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Casual T-Shrit 3",
    text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
    type: "Work Animals",
    size: ["L", "XL"],
    color: ["brown", "gray", "yellow"],
    gender: "female",
    price: 75,
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1503190766327-73a7d9e9e844?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Casual T-Shrit 4",
    text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
    type: "Dairy Animals",
    size: ["M", "L", "XL"],
    color: ["gray", "orange", "blue"],
    gender: "female",
    price: 25,
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1624895831644-bb1d9ef2de06?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Casual T-Shrit 5",
    text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
    type: "Dairy Animals",
    size: ["M", "L", "XL"],
    color: ["black", "brown", "blue"],
    gender: "female",
    price: 15,
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1624895831644-bb1d9ef2de06?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Casual T-Shrit 6",
    text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
    type: "Dairy Animals",
    size: ["M", "L", "XL"],
    color: ["gray", "purple", "yellow"],
    gender: "female",
    price: 25,
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1624895831644-bb1d9ef2de06?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Casual T-Shrit 7",
    text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
    type: "Dairy Animals",
    size: ["M", "L", "XL"],
    color: ["black", "orange", "blue"],
    gender: "male",
    price: 25,
  },
  {
    id: "8",
    img: "https://images.unsplash.com/photo-1624895831644-bb1d9ef2de06?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Casual T-Shrit 8",
    text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
    type: "Dairy Animals",
    size: ["M", "XL"],
    color: ["gray", "red", "blue"],
    gender: "male",
    price: 35,
  },
];
export const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => {
          <CategoryCard
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          />;
        })}
      </div>
    </div>
  );
};
