import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeartButton from '../common/Button/HeartButton/HeartButton';
import * as S from './PlaceCard.style';

const PlaceCard = ({ imageUrl, placeName, location, onSave }) => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
    if (onSave) {
      onSave();
    }
  };

  return (
    <S.PlaceCard>
      {/* 이미지 영역 */}
      <S.ImageContainer as={Link} to={`/detail/${encodeURIComponent(placeName)}`}>
        {imageUrl ? (
          <S.PlaceImage src={imageUrl} alt={placeName} />
        ) : (
          <S.PlaceholderText>이미지 없음</S.PlaceholderText>
        )}
      </S.ImageContainer>

      {/* 이미지 아래 영역 */}
      <S.TextFrame>
        <S.NameSave>
          <S.PlaceName as={Link} to={`/detail/${encodeURIComponent(placeName)}`} style={{ textDecoration: 'none' }}>
            {placeName}
          </S.PlaceName>
          {/* HeartButton 컴포넌트 */}
          <S.HeartbuttonContainer>
            <HeartButton onClick={onSave} />
          </S.HeartbuttonContainer>
        </S.NameSave>
      </S.TextFrame>
      {/* 장소 위치 */}
      <S.PlaceLocation as={Link} to={`/detail/${encodeURIComponent(placeName)}`} style={{ textDecoration: 'none' }}>
        {location}
      </S.PlaceLocation>
    </S.PlaceCard>
  );
};

export default PlaceCard;
