import { PiStarFill, PiStarLight } from 'react-icons/pi';
import styled from 'styled-components';

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StarRating = ({ children }) => {
  const rating = Math.round(children);

  return (
    <StarContainer>
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <PiStarFill key={index} size={21} color="#FFBF87" />
        ) : (
          <PiStarLight key={index} size={21} color="##FFBF87" />
        ),
      )}
    </StarContainer>
  );
};

export default StarRating;
