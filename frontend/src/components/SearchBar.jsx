import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons"; // 검색 아이콘
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("검색어:", query);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="지역/장소/활동 등을 검색하세요."
        />
        <button type="submit" className="search-button">
          <SearchOutlined />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
