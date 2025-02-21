import * as S from './DetailPage.style';
import { LuPenLine } from 'react-icons/lu';
import { FaRegTrashAlt, FaPen } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';
import { ModalMemo, ModalMemoDelete, ModalMemoEdit, StarNumber, HeartButton } from '../../components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { COMMON_API_URL } from '../../../consts';

/*가상데이터
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
    time: '매일 9:00 ~ 23:00',
    contact: '02-766-1933',
    starRating: '4.7',
  },
];*/

export const DetailPage = ({ onSave }) => {
  const { placeName } = useParams();
  const [placeData, setPlaceData] = useState(null);
  const [error, setError] = useState(null);

  //입력 데이터 상태 관리
  const [comment, setComment] = useState('');
  const [myStarRating, setMyStarRating] = useState(null);
  const [date, setDate] = useState('');

  //하트버튼 상태
  const [saved, setSaved] = useState(false);
  const handleSave = () => {
    setSaved(!saved);
    if (onSave) {
      onSave();
    }
  };

  // 각 모달 상태
  const [openModalMemo, setOpenModalMemo] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  useEffect(() => {
    const fetchPlaceData = async () => {
      try {
        const response = await axios.get(`${COMMON_API_URL}/place/detail/${encodeURIComponent(placeName)}`);
        setPlaceData(response.data);
      } catch (error) {
        console.error('에러 발생', error);
        setError(error);
      }
    };

    fetchPlaceData();
  }, [placeName]);

  if (error) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  if (!placeData) {
    return <div>해당 장소를 찾을 수 없습니다.</div>;
  }

  const handleCommentChange = e => {
    setComment(e.target.value);
  };

  const handleSaveMemo = (selectedRating, selectedDate) => {
    setMyStarRating(selectedRating);
    setDate(selectedDate);
    setOpenModalMemo(false);
  };

  return (
    <div>
      <S.PlaceContainer>
        {/* 이미지 영역 */}
        <S.PlaceImg>
          {placeData.imageUrl ? <S.PlaceImage src={placeData.imageUrl} alt={placeName} /> : <S.NoImg>No Image</S.NoImg>}
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
          후기 {placeData.starRating}
        </S.Rating>

        {/* 장소 위치 및 정보 */}
        <S.PlaceInfo>주소 : &nbsp; {placeData.address}</S.PlaceInfo>
        <S.PlaceInfo>영업 시간 : &nbsp; {placeData.openTime}</S.PlaceInfo>
        <S.PlaceInfo>전화 번호 : &nbsp;{placeData.contact}</S.PlaceInfo>
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
          <S.InputField
            type="text"
            placeholder="오늘의 이 장소는 어땠나요?"
            value={comment}
            onChange={handleCommentChange}
          />
          <S.AddButton
            type="button"
            onClick={() => {
              setOpenModalMemo(true);
            }}>
            등록
          </S.AddButton>
          {openModalMemo && (
            <ModalMemo openModal={openModalMemo} setOpenModal={setOpenModalMemo} onSaveMemo={handleSaveMemo} />
          )}
        </S.Memo>

        {comment && (
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
        )}
      </S.MemoContainer>
    </div>
  );
};
