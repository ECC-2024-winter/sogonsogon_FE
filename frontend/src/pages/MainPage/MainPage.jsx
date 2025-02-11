import { SearchBar, PlaceCard, Category } from '../../components';
import * as S from './Main.style';

// 임시 데이터
const recommendations = [
  {
    title: '🔥 이번 주 가장 많이 뜨고 있는 Top 3',
    places: [
      {
        id: 1,
        imageUrl: 'https://blog.kakaocdn.net/dn/dizeYM/btrN5vZONwk/0ShfJor6t6KANhKzI3Qr1k/img.jpg',
        placeName: '텅',
        location: '서울 종로구 북촌로 701호',
      },
      {
        id: 2,
        imageUrl: '',
        placeName: '프로토콜 연희점',
        location: '서울 서대문구 연희로 10길 2층',
      },
      { id: 3, imageUrl: '', placeName: '장소', location: '위치' },
    ],
  },
  {
    title: '👍 이 달의 맛집 Best 3',
    places: [
      { id: 4, imageUrl: '', placeName: '장소', location: '위치' },
      { id: 5, imageUrl: '', placeName: '장소', location: '위치' },
      { id: 6, imageUrl: '', placeName: '장소', location: '위치' },
    ],
  },
  {
    title: '😎 이런 장소는 어때요?',
    places: [
      { id: 7, imageUrl: '', placeName: '장소', location: '위치' },
      { id: 8, imageUrl: '', placeName: '장소', location: '위치' },
      { id: 9, imageUrl: '', placeName: '장소', location: '위치' },
    ],
  },
];

function MainPage() {
  const handleSave = () => {
    alert('장소가 저장되었습니다!');
  };

  return (
    <S.MainContainer>
      <SearchBar />
      <Category />
      <S.RecommendationContainer>
        {/* TODO: 디스트럭쳐링 해봅시다 */}
        {recommendations.map(({ title, places }) => (
          // TODO: key 왜 index 썼나요? => https://ko.react.dev/learn/rendering-lists#rules-of-keys
          <S.RecommendationSection key={title}>
            {/* Title */}
            <S.RecommendationTitle>{title}</S.RecommendationTitle>
            {/* PlaceCard 가로 정렬 */}
            <S.PlaceCardContainer>
              {places.map(({ id, imageUrl, placeName, location }) => (
                <PlaceCard
                  key={id}
                  // NOTE: API 연동 전 임시 랜덤 이미지 적용
                  imageUrl={imageUrl || `https://picsum.photos/600/400?random=${id}`}
                  placeName={placeName}
                  location={location}
                  onSave={handleSave}
                />
              ))}
            </S.PlaceCardContainer>
          </S.RecommendationSection>
        ))}
      </S.RecommendationContainer>
    </S.MainContainer>
  );
}

export default MainPage;
