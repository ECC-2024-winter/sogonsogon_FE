import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons"; // 검색 아이콘
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`); // 검색 결과 페이지로 이동
    }
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