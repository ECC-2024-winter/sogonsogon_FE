import React from "react";
import { IoIosRestaurant } from "react-icons/io";
import { LuCoffee } from "react-icons/lu";
import { AiOutlinePicture } from "react-icons/ai";
import { SlDrawer } from "react-icons/sl";
import { BsPersonWorkspace } from "react-icons/bs";
import "../styles/Category.css";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "맛집", icon: <IoIosRestaurant />, hashtag: "#맛집" },
  { id: 2, name: "카페", icon: <LuCoffee />, hashtag: "#카페" },
  { id: 3, name: "전시회", icon: <AiOutlinePicture />, hashtag: "#전시회" },
  { id: 4, name: "소품샵", icon: <SlDrawer />, hashtag: "#소품샵" },
  { id: 5, name: "연극/공연", icon: <BsPersonWorkspace />, hashtag: "#연극/공연" },
];

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (hashtag) => {
    navigate(`/search?query=${encodeURIComponent(hashtag)}`);
  };

  return (
    <div className="category-container">
      {categories.map((category) => (
        <div key={category.id} className="category-item" onClick={() => handleCategoryClick(category.hashtag)}>
          <div className="category-icon">{category.icon}</div>
          <span className="category-name">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Category;

