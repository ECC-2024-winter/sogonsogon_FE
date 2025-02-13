import * as S from './ModalMemo.style';
import ButtonModal from '../../common/Button/ButtonModal';
import ButtonBasic from '../../common/Button/ButtonBasic';
import { IoIosStar, IoMdClose, IoIosCalendar } from 'react-icons/io';
import Calendar from '../../calender/Calendar';
import Rating from '../../common/Rating';

export const ModalMemo = ({ openModal, setOpenModal }) => {
  return (
    <S.Overlay>
      <S.EditContainer>
        {/*닫힘 버튼*/}
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
          <Calendar />
        </S.Calendar>
        <S.Rating>
          <IoIosStar /> &nbsp; 만족도
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Rating />
        </S.Rating>
        {/*확인 버튼*/}
        <S.SaveButton>
          <ButtonModal
            type="button"
            onClick={() => {
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
