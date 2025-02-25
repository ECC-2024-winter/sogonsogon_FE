import * as S from './DetailPage.style';
import { LuPenLine } from 'react-icons/lu';
import { FaRegTrashAlt, FaPen } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';
import { ModalMemo, ModalMemoDelete, ModalMemoEdit, StarNumber, HeartButton } from '../../components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

/*가상데이터*/
const PlaceInfo = [
  {
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211117_235%2F1637111766001h166z_JPEG%2F04531D1F-5E55-40C2-B669-919206DBFB60.jpeg',
    placeName: '프로토콜 연희점',
    address: '서울 서대문구 연희로 109 2층 (우)03708',
    openTime: '매일 10:30 ~ 22:00',
    contact: '010-3927-6159',
    starRating: '4.3',
    comment:
      '커피가 맛있고,, 조용해서 작업하기 좋았다..다크 초콜릿향,,단 카라멜향.여러 견과향이 나며 오렌지와 귤의 화사한 산미와 단맛과 실키한 🍯 꿀같은 부드러움과 중후한 여운과 클린한 마무리감이 너무나도 좋은 프로토콜의 첫번째 블렌드 슈퍼노멀은 달달한 디저트와 너무 잘 어울리고 집중하고 싶을 때 선택해서 마시기 너무 너무 좋았다...🎼🌈☺🥰🙏🌳 만들어주신 멋진 선생님들께 ((감사드립니다))🌼🌿🌷🌳 정말 독서, 작업하기 좋은 카페다! 의자랑 테이블 넓직하고 커피 산미도 완전 제 취향이고 무화과고르곤졸라휘낭시에는 특이한 메뉴라 시켜봤는데 꼬릿한 치즈향과 무화과 조합이 아주 좋았다! 오래 집중하고 싶을 때 또 방문할 것 같다!!☕️',
    myStarRating: 4,
    date: '2025. 01. 26',
  },
  {
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240618_22%2F17186870982432nacB_JPEG%2FIMG_4279.jpg',
    placeName: '텅',
    address: '서울 종로구 율곡로 82 701호',
    openTime: '매일 9:00 ~ 23:00',
    contact: '02-766-1933',
    starRating: '4.7',
    comment: '남산 바라보며 책 읽는 시간 보냈다 😌',
    myStarRating: 5,
    date: '2025. 01. 24',
  },
  {
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230217_49%2F1676604522315KXQMN_JPEG%2F%25BF%25C2%25BC%25BE%25C5%25D9%25B5%25BF.jpg',
    placeName: '온센 안국점',
    address: '서울 종로구 율곡로 57-4 온센 안국점',
    openTime: '매일 11:00~20:30 (15:10~17:00 브레이크타임 / 14:30, 19:50 라스트오더)',
    contact: '02-741-2325',
    starRating: '4.1',
    comment:
      '텐동에 튀김 양도 은근 많고 바삭바삭하니 맛있었다! 튀긴 돼지고기 올라간 카레도 밥이랑 섞어먹다 보니 순식간에 다 먹었는데, 갠적으로 마제우동은 간이 덜 되어 있는 것 같아서 아쉬웠다…. 그래도 전체적인 가게 내부는 깔끔해서 좋았다!',
    myStarRating: '4',
    date: '2025.01.12',
  },
  {
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240530_30%2F1717032756468w7aI1_JPEG%2F%25BF%25C0%25B7%25B9%25B3%25EB%25B6%25F3%25B8%25E0%25C0%25CC%25B9%25CC%25C1%25F6%25BB%25E7%25C1%25F8.jpg',
    placeName: '오레노라멘 인사점',
    address: '서울 종로구 율곡로 82 701호',
    openTime: '매일 10:30 ~ 20:30',
    contact: '0507-1341-3539',
    starRating: '4.8',
    comment:
      '내가 먹어본 라멘집 중에 진짜 탑이다.. 날씨가 엄청 추웠는데 따뜻한 국물 먹으니깐 정말 행복했다. 혼밥해도 눈치 안 보이고 줄 서서 먹을 만한 맛집!👍🏻👍🏻',
    myStarRating: '5',
    date: '2025.01.10',
  },
  {
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240107_57%2F1704620911865zGP3o_JPEG%2FIMG_7566.jpeg',
    placeName: '고유',
    address: '서울 서대문구 연희로 90-1 2층 202호',
    openTime: '매일 9:00 ~ 23:00',
    contact: '02-766-1933',
    starRating: '4.7',
    comment:
      '카페 코지코지하고 너무 귀여웠다🤍 취향 저격🧸💕 드립 커피 두 종류 모두 깔끔하고 좋았다 ~☕️🤎고구마 케이키도 귀여운데 넘 맛있어..🍠🍰',
    myStarRating: '4',
    date: '2025.01.04',
  },
];

export const DetailPage = ({ onSave }) => {
  const [saved, setSaved] = useState(false);
  const handleSave = () => {
    setSaved(!saved);
    if (onSave) {
      onSave();
    }
  };
  // 각 모달에 대한 개별 상태
  const [openModalMemo, setOpenModalMemo] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const { placeName } = useParams();
  const placeData = PlaceInfo.find(place => place.placeName === decodeURIComponent(placeName));

  if (!placeData) {
    return <div>해당 장소를 찾을 수 없습니다.</div>;
  }

  const { imageUrl, address, openTime, contact, starRating, comment, myStarRating, date } = placeData;

  return (
    <div>
      <S.PlaceContainer>
        {/* 이미지 영역 */}
        <S.PlaceImg>
          {imageUrl ? <S.PlaceImage src={imageUrl} alt={placeName} /> : <S.NoImg>No Image</S.NoImg>}
        </S.PlaceImg>
        {/* 정보 텍스트 */}
        <S.TextFrame>
          <S.PlaceName>{placeName}</S.PlaceName>
          {/* HeartButton 컴포넌트 */}
          <S.HeartbuttonContainer>
            <HeartButton onClick={handleSave} />
          </S.HeartbuttonContainer>
        </S.TextFrame>
        {/*별점*/}
        <S.Rating>
          <S.Star>
            <IoStar />
          </S.Star>
          후기 {starRating}
        </S.Rating>
        {/* 장소 위치 및 정보 */}
        <S.PlaceInfo>주소 : &nbsp; {address}</S.PlaceInfo>
        <S.PlaceInfo>영업 시간 : &nbsp; {openTime}</S.PlaceInfo>
        <S.PlaceInfo>전화 번호 : &nbsp;{contact}</S.PlaceInfo>
      </S.PlaceContainer>
      {/* 메모 입력 영역 */}
      <S.MemoContainer>
        <S.MemoTitle>
          <S.Pencil>
            <FaPen />
          </S.Pencil>
          기록하기
          <S.Text>쉬었다 간 흔적을 남겨주세요</S.Text>
        </S.MemoTitle>
        <S.Memo>
          <S.InputField type="text" placeholder="오늘의 이 장소는 어땠나요?" />
          <S.AddButton
            type="button"
            onClick={() => {
              setOpenModalMemo(true);
            }}>
            등록
          </S.AddButton>
          {openModalMemo && <ModalMemo openModal={openModalMemo} setOpenModal={setOpenModalMemo} />}
        </S.Memo>
        <S.Saved>
          <S.SavedMemo>{comment}</S.SavedMemo>
          <S.SavedRating>
            <StarNumber>{myStarRating}</StarNumber>
            <S.SavedDate>{date}</S.SavedDate>
          </S.SavedRating>
          <S.EditButton
            type="button"
            onClick={() => {
              setOpenModalEdit(true);
            }}>
            <LuPenLine size={20} />
          </S.EditButton>
          {openModalEdit && (
            <ModalMemoEdit openModal={openModalEdit} setOpenModal={setOpenModalEdit} initialValue={comment} />
          )}
          <S.EditButton
            type="button"
            onClick={() => {
              setOpenModalDelete(true);
            }}>
            <FaRegTrashAlt size={20} />
          </S.EditButton>
          {openModalDelete && <ModalMemoDelete openModal={openModalDelete} setOpenModal={setOpenModalDelete} />}
        </S.Saved>
      </S.MemoContainer>
    </div>
  );
};
