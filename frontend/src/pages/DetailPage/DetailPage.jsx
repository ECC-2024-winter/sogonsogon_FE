import * as S from './DetailPage.style';
import { Link } from 'react-router-dom';
import { ModalMemo } from '../../components';
import HeartButton from '../../components/common/Button/HeartButton/HeartButton';
import { useState } from 'react';
import { IoStar } from 'react-icons/io5';
import { FaPen } from 'react-icons/fa';

/*가상데이터*/
const PlaceInfo = {
  imageUrl:
    'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211117_235%2F1637111766001h166z_JPEG%2F04531D1F-5E55-40C2-B669-919206DBFB60.jpeg',
  placeName: '프로토콜 연희점',
  location: '서울 서대문구 연희로 109 2층 (우)03708',
  time: '매일 10:30 ~ 22:00',
  contact: '010-3927-6159',
  starRating: '4.3',
};

const DetailPage = ({ onSave }) => {
  const { imageUrl, placeName, location, time, contact, starRating } = PlaceInfo;
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
    if (onSave) {
      onSave();
    }
  };

  const [openModal, setOpenModal] = useState(false);

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
        <S.PlaceInfo>주소 : &nbsp; {location}</S.PlaceInfo>
        <S.PlaceInfo>영업 시간 : &nbsp; {time}</S.PlaceInfo>
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
              setOpenModal(true);
            }}>
            등록
          </S.AddButton>
          {openModal ? <ModalMemo openModal={openModal} setOpenModal={setOpenModal} /> : null}
        </S.Memo>
      </S.MemoContainer>
    </div>
  );
};

export default DetailPage;
