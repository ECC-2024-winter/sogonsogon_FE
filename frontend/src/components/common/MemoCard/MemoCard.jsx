import styled from 'styled-components';
import { StarNumber } from '..';

/*가상데이터*/

export const MemoCard = ({ placeName, location, comment, myStarRating, date }) => {
  return (
    <Container>
      <PlaceName>{placeName}</PlaceName>
      <PlaceLocation>{location}</PlaceLocation>
      <MemoContainer>
        <Memo>{comment}</Memo>
        <BottomContainer>
          <StarNumberStyled>{myStarRating}</StarNumberStyled>
          <Date>{date}</Date>
        </BottomContainer>
      </MemoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  outline: none;
  height: 350px;
  width: 280px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  font-family: 'Pretendard';
  cursor: pointer;
  padding: 16px;
  background: #ffffff;

  margin-top: 20px;
  margin-left: 20px;

  &:active,
  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

const PlaceName = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 5px;
`;

const PlaceLocation = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

const MemoContainer = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  border: 1px solid #ffbf87;
  padding: 20px;
  margin-top: 10px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Memo = styled.div`
  font-size: 17px;
  line-height: 1.5;
  width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

const BottomContainer = styled.div`
  position: abolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #ffbf87;
`;
const StarNumberStyled = styled(StarNumber)`
  color: #ffbf87;
`;

const Date = styled.div`
  color: #ffbf87;
`;
