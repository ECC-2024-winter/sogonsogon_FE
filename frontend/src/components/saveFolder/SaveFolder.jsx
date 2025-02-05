// TODO: import React 제거
// https://so-so.dev/react/import-react-from-react/
import React from "react";
import "./SaveFolder.css";
import imageIcon from "../images/imageicon.png";

const SaveFolder = ({
  imageUrl1,
  imageUrl2,
  imageUrl3,
  imageUrl4,
  folderName,
}) => {
  return (
    <div className="save-folder">
      <div className="image-container">
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
      </div>
      <div>
        {folderName ? (
          <p className="folder-name">{folderName}</p>
        ) : (
          <p className="folder-name">폴더</p>
        )}
      </div>
    </div>
  );
};

export default SaveFolder;
