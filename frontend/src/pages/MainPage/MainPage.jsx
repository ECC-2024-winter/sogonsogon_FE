import { useState, useEffect } from 'react';
import { PlaceCard } from '../../components';
import { SearchContainer } from './SearchContainer';
import * as S from './Main.style';
import { COMMON_API_URL } from '../../consts';
import axios from 'axios';

const topTrending = [
  {
    postId: 1,
    imageUrl: 'https://blog.kakaocdn.net/dn/dizeYM/btrN5vZONwk/0ShfJor6t6KANhKzI3Qr1k/img.jpg',
    place: '텅',
    address: '서울 종로구 북촌로 701호',
  },
  {
    postId: 2,
    imageUrl: '',
    place: '프로토콜 연희점',
    address: '서울 서대문구 연희로 10길 2층',
  },
  {
    postId: 7,
    place: '카페 물루',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250102_3%2F1735801237712v6ci9_JPEG%2FIMG_3845.jpeg',
    address: '서울 마포구 성미산로6길 8 1층',
  },
];
const bestRestaurants = [
  {
    postId: 1,
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230217_49%2F1676604522315KXQMN_JPEG%2F%25BF%25C2%25BC%25BE%25C5%25D9%25B5%25BF.jpg',
    place: '온센 안국점',
    address: '서울 종로구 율곡로 57-4 온센 안국점',
  },
  {
    postId: 5,
    place: '까이식당',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200227_203%2F1582732114593nBqzH_JPEG%2FvEOael5FGEvHVai4xCFzkl46.jpg',
    address: '서울 서대문구 이화여대2가길 24 1층',
  },
  {
    postId: 6,
    place: '소오',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241226_232%2F1735178171730NzSq5_JPEG%2FGJF01819.jpg',
    address: '서울 서대문구 이화여대길 50-10 1층',
  },
];
const recommendedShows = [
  {
    postId: 7,
    place: '생동하는 선',
    imageUrl:
      'https://search.pstatic.net/common?type=ofullfill&size=138x200&quality=95&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250122_209%2F1737512277677KlVlC_PNG%2F360_main_thumb_url_1737512277650.png',
    address: '무아',
  },
  {
    postId: 8,
    place: 'HIDDEN LIBRARY 2',
    imageUrl:
      'https://search.pstatic.net/common?type=ofullfill&size=138x200&quality=95&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250120_100%2F17373537302917BqtK_JPEG%2F360_main_thumb_url_1737353730268.jpg',
    address: '플로어',
  },
  {
    postId: 9,
    place: '사물들의 힘',
    imageUrl:
      'https://search.pstatic.net/common?type=ofullfill&size=138x200&quality=95&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250114_264%2F1736837488140XWi4A_JPEG%2F360_main_thumb_url_1736837488091.jpg',
    address: '스페이스 이수',
  },
];

// function useData(url) {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (url) {
//       axios
//         .get(url)
//         .then(response => {
//           if (response.data.placeInfo) {
//             setData(response.data.placeInfo);
//           }
//         })
//         .catch(err => {
//           setError(err.response?.data?.error);
//         });
//     }
//   }, [url]);
//   return { data, error };
// }

function MainPage() {
  // const { data: topTrending, error: top3Error } = useData(`${COMMON_API_URL}/main/top3`);
  // const { data: bestRestaurants, error: best3Error } = useData(`${COMMON_API_URL}/main/best3`);
  // const { data: recommendedShows, show3Error } = useData(`${COMMON_API_URL}/main/show`);

  const handleSave = () => {
    alert('장소가 저장되었습니다!');
  };

  return (
    <SearchContainer>
      <S.MainContainer>
        {/* {top3Error && <p>{top3Error}</p>}
        {best3Error && <p>{best3Error}</p>}
        {show3Error && <p>{show3Error}</p>} */}
        <S.RecommendationContainer>
          {[
            { title: '🔥 이번 주 가장 많이 뜨고 있는 Top 3', placeInfo: topTrending },
            { title: '👍 이 달의 맛집 Best 3', placeInfo: bestRestaurants },
            { title: '😎 이런 장소는 어때요?', placeInfo: recommendedShows },
          ].map(({ title, placeInfo }) => (
            <S.RecommendationSection key={title}>
              <S.RecommendationTitle>{title}</S.RecommendationTitle>
              <S.PlaceCardContainer>
                {placeInfo.map(({ postId, imageUrl, place, address }) => (
                  <PlaceCard
                    key={postId}
                    // NOTE: API 연동 전 임시 랜덤 이미지 적용
                    imageUrl={imageUrl || `https://picsum.photos/600/400?random=${postId}`}
                    placeName={place}
                    location={address}
                    onSave={handleSave}
                  />
                ))}
              </S.PlaceCardContainer>
            </S.RecommendationSection>
          ))}
        </S.RecommendationContainer>
      </S.MainContainer>
    </SearchContainer>
  );
}

export default MainPage;
