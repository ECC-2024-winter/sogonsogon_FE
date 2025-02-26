import * as S from './ModalUserEdit.style';
import ButtonModal from '../../common/Button/ButtonModal';

export const ModalUserEdit = ({ setUserEditOpenModal, setOpenModal }) => {
  const handleUserEdit = () => {
    setUserEditOpenModal(false);
    setOpenModal(false);
  };

  return (
    <S.Overlay>
      <S.Container>
        <S.Text>회원정보를 수정하였습니다.</S.Text>
        <S.SaveButton>
          <ButtonModal type="button" onClick={handleUserEdit}>
            확인
          </ButtonModal>
        </S.SaveButton>
      </S.Container>
    </S.Overlay>
  );
};
