import styled from "styled-components";

export const Wrapper = styled.div`
    height: 1000px;
`;
export const PlaceCardContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 30px;
  gap: 30px;
  padding: 20px 500px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Pagination = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;