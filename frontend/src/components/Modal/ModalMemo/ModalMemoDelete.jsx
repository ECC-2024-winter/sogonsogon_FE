import ButtonModal from '../../common/Button/ButtonModal';
import ButtonBasic from '../../common/Button/ButtonBasic';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';

export const ModalMemoDelete = ({ openModal, setOpenModal }) => {
  return (
    <Overlay>
      <EditContainer>
        <CloseButton>
          <ButtonBasic
            type="button"
            onClick={() => {
              setOpenModal(false);
            }}>
            <IoMdClose />
          </ButtonBasic>
          {!openModal ? setOpenModal(true) : null}
        </CloseButton>
        <StyledText>기록을 삭제하시겠습니까?</StyledText>
        <SaveButton>
          <ButtonModal
            type="button"
            onClick={() => {
              setOpenModal(false);
            }}>
            삭제하기
          </ButtonModal>
          {!openModal ? setOpenModal(true) : null}
        </SaveButton>
      </EditContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

const EditContainer = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 170px;
  border: 1px solid #cccccc;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  font-weight: 600;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StyledText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  font-size: 15px;
  font-weight: 500px;
  margin-top: 50px;
`;
const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const SaveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
