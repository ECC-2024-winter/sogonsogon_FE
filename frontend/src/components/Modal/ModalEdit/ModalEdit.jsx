import ButtonModal from '../../common/Button/ButtonModal';
import ButtonBasic from '../../common/Button/ButtonBasic';
import { IoMdClose } from 'react-icons/io';
import Edit from './Edit';
import * as S from './ModalEdit.style';

export const ModalEdit = ({ openModal, setOpenModal }) => {
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
        <S.FolderName>
          <Edit />
        </S.FolderName>
        <S.SaveButton>
          <ButtonModal
            type="button"
            onClick={() => {
              setOpenModal(false);
            }}>
            저장하기
          </ButtonModal>
          {!openModal ? setOpenModal(true) : null}
        </S.SaveButton>
      </S.EditContainer>
    </S.Overlay>
  );
};
