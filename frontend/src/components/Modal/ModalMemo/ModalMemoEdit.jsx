import ButtonModal from '../../common/Button/ButtonModal';
import ButtonBasic from '../../common/Button/ButtonBasic';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';
import { useState } from 'react';

export const ModalMemoEdit = ({ openModal, setOpenModal, initialValue }) => {
  // useState로 기존 메모 값을 관리
  const [memo, setMemo] = useState(initialValue);

  // 메모 입력 변경 핸들러
  const handleChange = event => {
    setMemo(event.target.value);
  };

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
        </CloseButton>
        <InputField
          type="text"
          value={memo} // input 필드의 값에 memo 상태 연결
          onChange={handleChange} // 값이 변경될 때마다 상태 업데이트
        />
        <SaveButton>
          <ButtonModal
            type="button"
            onClick={() => {
              setOpenModal(false);
              // 여기에 memo 저장하는 로직 추가 가능
            }}>
            확인
          </ButtonModal>
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
  height: auto;
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const InputField = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 15px;
  width: 450px;
  height: 100px;
  text-align: left;
  padding: 10px;
  border: 1px solid #ffbf87;
  border-radius: 15px;
  margin-top: 10px;
  resize: none;
  overflow-y: auto;
`;

const SaveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
