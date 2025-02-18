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
    placeName: '',
    location: '',
    comment: '',
    myStarRating: '',
    date: '',
  },
  {
    id: 4,
    placeName: '',
    location: '',
    comment: '',
    myStarRating: '',
    date: '',
  },
  {
    id: 5,
    placeName: '',
    location: '',
    comment: '',
    myStarRating: '',
    date: '',
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
