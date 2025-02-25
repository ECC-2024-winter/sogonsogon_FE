import * as S from './AccountPage.style';
import Title from '../../components/common/Title';
import { FaCommentAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import { MemoCard } from '../../components/common/MemoCard/MemoCard';
import { Link } from 'react-router-dom';

/*가상 데이터*/
const places = [
  {
    id: 1,
    placeName: '프로토콜 연희점',
    location: '서울 서대문구 연희로 109 2층',
    comment:
      '커피가 맛있고,, 조용해서 작업하기 좋았다..다크 초콜릿향,,단 카라멜향.여러 견과향이 나며 오렌지와 귤의 화사한 산미와 단맛과 실키한 🍯 꿀같은 부드러움과 중후한 여운과 클린한 마무리감이 너무나도 좋은 프로토콜의 첫번째 블렌드 슈퍼노멀은 달달한 디저트와 너무 잘 어울리고 집중하고 싶을 때 선택해서 마시기 너무 너무 좋았다...🎼🌈☺🥰🙏🌳 만들어주신 멋진 선생님들께 ((감사드립니다))🌼🌿🌷🌳 정말 독서, 작업하기 좋은 카페다! 의자랑 테이블 넓직하고 커피 산미도 완전 제 취향이고 무화과고르곤졸라휘낭시에는 특이한 메뉴라 시켜봤는데 꼬릿한 치즈향과 무화과 조합이 아주 좋았다! 오래 집중하고 싶을 때 또 방문할 것 같다!!☕️',
    myStarRating: 4,
    date: '2025.01.26',
  },
  {
    id: 2,
    placeName: '텅',
    location: '서울 종로구 율곡로 82 701호',
    comment: '남산 바라보며 책 읽는 시간 보냈다 😌',
    myStarRating: 5,
    date: '2025.01.24',
  },
  {
    id: 3,
    placeName: '온센 안국점',
    location: '서울 종로구 율곡로 57-4 온센 안국점',
    comment:
      '텐동에 튀김 양도 은근 많고 바삭바삭하니 맛있었다! 튀긴 돼지고기 올라간 카레도 밥이랑 섞어먹다 보니 순식간에 다 먹었는데, 갠적으로 마제우동은 간이 덜 되어 있는 것 같아서 아쉬웠다…. 그래도 전체적인 가게 내부는 깔끔해서 좋았다!',
    myStarRating: '4',
    date: '2025.01.12',
  },
  {
    id: 4,
    placeName: '오레노라멘 인사점',
    location: '서울 종로구 율곡로 49-4 1층',
    comment:
      '내가 먹어본 라멘집 중에 진짜 탑이다.. 날씨가 엄청 추웠는데 따뜻한 국물 먹으니깐 정말 행복했다. 혼밥해도 눈치 안 보이고 줄 서서 먹을 만한 맛집!👍🏻👍🏻',
    myStarRating: '5',
    date: '2025.01.10',
  },
  {
    id: 5,
    placeName: '고유',
    location: '서울 서대문구 연희로 90-1 2층 202호',
    comment:
      '카페 코지코지하고 너무 귀여웠다🤍 취향 저격🧸💕 드립 커피 두 종류 모두 깔끔하고 좋았다 ~☕️🤎고구마 케이키도 귀여운데 넘 맛있어..🍠🍰',
    myStarRating: '4',
    date: '2025.01.04',
  },
];

export function AccountPage() {
  return (
    <div>
      <Title>내 계정</Title>
      <S.TabContainer>
        <S.TabSelected>
          <S.Icon>
            <FaCommentAlt />
          </S.Icon>
          기록 모아 보기
        </S.TabSelected>
        <Link to="/myinfo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <S.TabUnselected>
            <S.Icon>
              <IoPersonSharp />
            </S.Icon>
            회원정보 수정
          </S.TabUnselected>
        </Link>
      </S.TabContainer>

      <S.MemoCardContainer>
        {places.map(({ id, placeName, location, comment, myStarRating, date }) => (
          <Link
            key={id}
            to={`/detail/${encodeURIComponent(placeName)}`}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <MemoCard
              placeName={placeName}
              location={location}
              comment={comment}
              myStarRating={myStarRating}
              date={date}
            />
          </Link>
        ))}
      </S.MemoCardContainer>
    </div>
  );
}
