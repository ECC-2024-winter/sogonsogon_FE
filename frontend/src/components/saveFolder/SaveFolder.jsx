// TODO: import React 제거
// https://so-so.dev/react/import-react-from-react/
import imageIcon from "../../images/imageicon.png";
import * as S from "./SaveFolder.style";

const SaveFolder = ({ imageUrls, folderName }) => {
  const images = imageUrls.length > 0 ? imageUrls : [imageIcon];

  return (
    <S.SaveFolder>
      <S.ImageContainer>
        {images.map((url, index) => (
          <S.PlaceImage key={index} src={url || imageIcon} />
        ))}
      </S.ImageContainer>
      <S.FolderName>{folderName || "폴더"}</S.FolderName>
    </S.SaveFolder>
  );
};

export default SaveFolder;
