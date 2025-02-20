import * as S from './ModalMemo.style';
import ButtonModal from '../../common/Button/ButtonModal';
import ButtonBasic from '../../common/Button/ButtonBasic';
import { IoIosStar, IoMdClose, IoIosCalendar } from 'react-icons/io';
import Calendar from '../../calender/Calendar';
import Rating from '../../common/Rating';
import { useState } from 'react';

export const ModalMemo = ({ openModal, setOpenModal, onSaveMemo }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <S.Overlay>
      <S.EditContainer>
        <S.CloseButton>
          <ButtonBasic
            type="button"
            onClick={() => {
              setOpenModal(false);
            }}>
            <IoMdClose />
          </ButtonBasic>
          {!openModal ? setOpenModal(true) : null}
        </S.CloseButton>
        <S.Title>기록하기</S.Title>
        <S.Calendar>
          <IoIosCalendar /> &nbsp; 방문 날짜 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Calendar onSelectDate={date => setSelectedDate(date)} />
        </S.Calendar>
        <S.Rating>
          <IoIosStar /> &nbsp; 만족도
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Rating onSelectRating={rating => setSelectedRating(rating)} />
        </S.Rating>
        {/*확인 버튼*/}
        <S.SaveButton>
          <ButtonModal
            type="button"
            onClick={() => {
              onSaveMemo(selectedDate, selectedRating);
              setOpenModal(false);
            }}>
            확인
          </ButtonModal>
          {!openModal ? setOpenModal(true) : null}
        </S.SaveButton>
      </S.EditContainer>
    </S.Overlay>
  );
};
