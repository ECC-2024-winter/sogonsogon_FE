import React, { useState } from "react";
import HeartButton from "./common/HeartButton";
import "../styles/PlaceCard.css";

const PlaceCard = ({ imageUrl, placeName, location, onSave }) => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
    if (onSave) {
      onSave();
    }
  };

  return (
    <div className="place-card">
      {/* 이미지 영역 */}
      <div className="image-container">
        {imageUrl ? (
          <img src={imageUrl} alt={placeName} className="place-image" />
        ) : (
          <span className="placeholder-text">이미지 없음</span>
        )}
      </div>

      {/* 이미지 아래 영역 */}
      <div className="frame">
        <div className="frame-2">
          <h3 className="place-name">{placeName}</h3>
          {/* HeartButton 컴포넌트 */}
          <div className="heart-button-container">
            <HeartButton onClick={onSave} />
          </div>
        </div>
      </div>
      {/* 장소 위치 */}
      <div className="place-info">
        <p className="place-location">{location}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
