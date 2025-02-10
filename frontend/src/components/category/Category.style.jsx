import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
    padding: 35px;
`;

export const CategoryItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
`;

/* 아이콘 감싸는 원형 배경 */
export const CategoryIcon = styled.div`
    width: 56px;
    height: 56px;
    background-color: #FFBF8766;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #000;
`;

export const CategoryName = styled.span`
    margin-top: 8px;
    font-size: 13px;
    font-weight: bold;
    color: #000;
`;