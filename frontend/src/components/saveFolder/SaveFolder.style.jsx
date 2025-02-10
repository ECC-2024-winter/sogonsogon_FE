import styled from "styled-components";

export const SaveFolder = styled.div`
  border: none;
  outline: none;
  width: 300px;
  height: 348px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 150px;
  grid-auto-rows: 150px;
  border: 1px solid #b2b2b2;
  border-radius: 12px;
  gap: 2px;
  padding: 0px;
`;

export const PlaceImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  margin-left: 0px;
`;

export const NoImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  margin-left: 0px;
`;

export const PlaceHolderText = styled.div`
  font-size: 14px;
  color: #aaa;
`;

export const FolderName = styled.div`
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  margin-top: 10px;
  text-align: center;
`;
