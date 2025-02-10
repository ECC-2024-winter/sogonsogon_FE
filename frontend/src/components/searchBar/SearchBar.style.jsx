import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons"; // 검색 아이콘

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 59px;
`;

export const SearchBar = styled.form`
    width: 100%;
    max-width: 705px;
    height: 44px;
    display: flex;
    align-items: center;
    background-color: #ffbf8766;
    border-radius: 32px;
    padding: 0 16px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
`;
  
export const SearchInput = styled.input`
    flex: 1;
    border: none;
    background: transparent;
    font-size: 16px;
    color: #000000;
    outline: none;

    &::placeholder {
    color: ${(props) => props.$placeholderColor || "gray"};
`;
  
export const SearchButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;
  
export const SearchIcon = styled(SearchOutlined)`
    color: "gray";
`;