// TODO: import React 제거
// https://so-so.dev/react/import-react-from-react/
import imageIcon from "../images/imageicon.png";
import * as S from "./SaveFolder.style";

const SaveFolder = ({
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
  folderName,
}) => {
  const imageUrls = [imageUrl1, imageUrl2, imageUrl3, imageUrl4];

  return (
    <S.SaveFolder>
      <S.ImageContainer>
        {imageUrls.map((url, index) => (
          <S.PlaceImage
            key={index}
            src={url || imageIcon}
            className={url ? "place-image" : "no-img"}
          />
        ))}
      </S.ImageContainer>
      <S.FolderName>{folderName || "폴더"}</S.FolderName>
    </S.SaveFolder>
  );
};

export default SaveFolder;
