import styled from 'styled-components';

export const PlaceCard = styled.div`
  width: 261.33px;
  height: 347px;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 20px 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;

  &:hover {
    cursor: pointer;
  }
  &:hover img {
    transform: scale(1.1);
    transition: all 0.2s linear;
  }
`;

export const ImageContainer = styled.div`
  width: 229.33px;
  height: 247px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
`;

export const PlaceImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-left: 0;
`;

export const PlaceholderText = styled.span`
  color: #aaa;
`;
export const TextFrame = styled.div`
  width: 100%;
  padding: 8px;
`;

export const NameSave = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const PlaceName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const HeartbuttonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PlaceLocation = styled.p`
  width: 100%;
  text-align: left;
  font-size: 16px;
  color: #555;
  margin-left: 40px;
  padding: 0px 20px;
`;
