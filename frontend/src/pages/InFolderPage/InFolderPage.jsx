import { IoArrowBackSharp } from 'react-icons/io5';
import * as S from './InFolderPage.style';
import { PlaceCard } from '../../components';

// 임시 데이터
const folders = [
  {
    folderName: '북카페/작업하기 좋은 카페',
    places: [
      {
        placeId: 1,
        imageUrl: 'https://blog.kakaocdn.net/dn/dizeYM/btrN5vZONwk/0ShfJor6t6KANhKzI3Qr1k/img.jpg',
        placeName: '텅',
        location: '서울 종로구 북촌로 701호',
      },
      {
        placeId: 2,
        placeName: '프로토콜 연희점',
        location: '서울 서대문구 연희로 10길 2층',
      },
      { placeId: 3, placeName: '장소', location: '위치' },
      { placeId: 4, placeName: '장소', location: '위치' },
      { placeId: 5, placeName: '장소', location: '위치' },
      { placeId: 6, placeName: '장소', location: '위치' },
      { placeId: 7, placeName: '장소', location: '위치' },
      { placeId: 8, placeName: '장소', location: '위치' },
      { placeId: 9, placeName: '장소', location: '위치' },
    ],
  },
];

function InFolderPage() {
  const handleSave = () => {
    alert('장소가 저장되었습니다!');
  };

  return (
    <div>
      {folders.map(({ folderName, places }) => (
        <div key={folderName}>
          <S.PageTop>
            <S.BackIcon href="/savelist">
              <IoArrowBackSharp />
            </S.BackIcon>
            <S.SaveTitle>{folderName}</S.SaveTitle>
          </S.PageTop>
          <S.PlaceCardContainer>
            {places.map(({ placeId, imageUrl, placeName, location }) => (
              <PlaceCard
                key={placeId}
                imageUrl={imageUrl}
                placeName={placeName}
                location={location}
                onSave={handleSave}
              />
            ))}
          </S.PlaceCardContainer>
        </div>
      ))}
    </div>
  );
}

export default InFolderPage;
