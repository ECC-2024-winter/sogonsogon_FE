import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./SearchBar.style";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    // TODO: 왜 trim 써야하는지?
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`); // 검색 결과 페이지로 이동
    }
  };

  return (
    <S.SearchContainer>
      <S.SearchBar id="search" onSubmit={handleSearch}>
        <S.SearchInput
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="지역/장소/활동 등을 검색하세요."
        />
        <S.SearchButton type="submit">
          <S.SearchIcon />
        </S.SearchButton>
      </S.SearchBar>
    </S.SearchContainer>
  );
};

export default SearchBar;
