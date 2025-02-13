import styled from 'styled-components';

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
  .pagination {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    list-style: none;

    > * {
      cursor: pointer;
    }
  }

  .page-link {
    transition: all 0.25s;
    padding: 0.2rem 0.6rem;
    border-radius: 0.3rem;
  }

  .active {
    background-color: #ffbf87;
    border-radius: 20px;
    color: white;
  }
`;
