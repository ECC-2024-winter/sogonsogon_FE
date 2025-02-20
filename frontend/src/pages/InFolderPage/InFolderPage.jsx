import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoArrowBackSharp } from 'react-icons/io5';
import * as S from './InFolderPage.style';
import { PlaceCard } from '../../components';
import { useParams } from 'react-router-dom';

/*가상 데이터
const folders = [
  {
    folderName: '북카페/ 작업하기 좋은 카페',
    places: [
      {
        placeId: 1,
        imageUrl: 'https://blog.kakaocdn.net/dn/dizeYM/btrN5vZONwk/0ShfJor6t6KANhKzI3Qr1k/img.jpg',
        placeName: '텅',
        address: '서울 종로구 북촌로 701호',
      },
      {
        placeId: 2,
        placeName: '프로토콜 연희점',
        address: '서울 서대문구 연희로 10길 2층',
      },
      { placeId: 3, placeName: '장소', address: '위치' },
      { placeId: 4, placeName: '장소', address: '위치' },
      { placeId: 5, placeName: '장소', address: '위치' },
      { placeId: 6, placeName: '장소', address: '위치' },
      { placeId: 7, placeName: '장소', address: '위치' },
      { placeId: 8, placeName: '장소', address: '위치' },
      { placeId: 9, placeName: '장소', address: '위치' },
    ],
  },
  {
    folderName: '혼밥 맛집',
    places: [
      {
        placeId: 1,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230217_49%2F1676604522315KXQMN_JPEG%2F%25BF%25C2%25BC%25BE%25C5%25D9%25B5%25BF.jpg',
        placeName: '온센 안국점',
        address: '서울 종로구 율곡로 57-4 온센 안국점',
      },
      {
        placeId: 2,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240530_30%2F1717032756468w7aI1_JPEG%2F%25BF%25C0%25B7%25B9%25B3%25EB%25B6%25F3%25B8%25E0%25C0%25CC%25B9%25CC%25C1%25F6%25BB%25E7%25C1%25F8.jpg',
        placeName: '오레노라멘 인사점',
        address: '서울 종로구 율곡로 49-4 1층',
      },

    ],
  },
];*/

function InFolderPage() {
  const { folderName } = useParams();
  const [places, setPlaces] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(
          `http://sogonsogon-env.eba-kczhd36e.ap-northeast-2.elasticbeanstalk.com/folders/${encodeURIComponent(folderName)}`,
        );
        setPlaces(response.data);
      } catch (error) {
        console.error('에러 발생', error);
        setError(error);
      }
    };

    fetchPlaces();
  }, [folderName]);

  const handleSave = () => {
    alert('장소가 저장되었습니다!');
  };

  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }
  if (!places) {
    return <div>해당 폴더에 저장된 장소가 없습니다.</div>;
  }

  return (
    <div>
      <S.PageTop>
        <S.BackIcon href="/savelist">
          <IoArrowBackSharp />
        </S.BackIcon>
        <S.SaveTitle>{decodeURIComponent(folderName)}</S.SaveTitle>
      </S.PageTop>
      <S.PlaceCardContainer>
        {places.map(({ placeId, imageUrl, placeName, location }) => (
          <PlaceCard key={placeId} imageUrl={imageUrl} placeName={placeName} location={location} onSave={handleSave} />
        ))}
      </S.PlaceCardContainer>
    </div>
  );
}

export default InFolderPage;
