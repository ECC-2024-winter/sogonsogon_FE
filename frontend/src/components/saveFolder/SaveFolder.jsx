// TODO: import React 제거
// https://so-so.dev/react/import-react-from-react/
import imageIcon
import * as S from "./SaveFolder.style"

const SaveFolder = ({
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
  folderName,
}) => {
  return (
    <div>
    <S.SaveFolder>
      <S.ImageContainer>
        {imageUrl1 ? (
          <img src={imageUrl1} className="place-image1" />
        ) : (
          <img src={imageIcon} className="no-img" />
        )}
        {imageUrl2 ? (
          <img src={imageUrl2} className="place-image1" />
        ) : (
          <img src={imageIcon} className="no-img" />
        )}
        {imageUrl3 ? (
          <img src={imageUrl3} className="place-image1" />
        ) : (
          <img src={imageIcon} className="no-img" />
        )}
        {imageUrl4 ? (
          <img src={imageUrl4} className="place-image1" />
        ) : (
          <img src={imageIcon} className="no-img" />
        )}
      </S.ImageContainer>
      <div>
        {folderName ? (
          <p className="folder-name">{folderName}</p>
        ) : (
          <p className="folder-name">폴더</p>
        )}
      </div>
    </S.SaveFolder>
    </div>
  );
};

export default SaveFolder;
