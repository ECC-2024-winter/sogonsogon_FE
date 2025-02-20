import * as S from './ModalPW.style';
import ButtonModal from '../../common/Button/ButtonModal';
import ButtonBasic from '../../common/Button/ButtonBasic';
import { IoMdClose, IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useState } from 'react';

export const ModalPW = ({ openModal, setOpenModal }) => {
  const [showPW, setShowPW] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  //비밀번호 숨기기, 보이기
  const togglePWVisible = field => {
    setShowPW(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const [errorMessage, setErrorMessage] = useState('');

  //새 비밀번호 불일치할 경우 + 기존 비밀번호 불일치할 경우우의 경고 메시지
  const handleSave = () => {
    if (passwords.current !== '현재 비밀번호') {
      //TODO: '현재 비밀번호'에 실제 비밀번호 데이터 넣기
      setErrorMessage('현재 비밀번호가 올바르지 않습니다.');
    } else if (passwords.new !== passwords.confirm) {
      setErrorMessage('새 비밀번호가 일치하지 않습니다.');
    } else {
      setErrorMessage('');
      setOpenModal(false);
      //TODO: 비밀번호 변경되도록 하는 코드 삽입
    }
  };

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

        <S.Text>현재 비밀번호</S.Text>
        <S.InputWrapper>
          <S.InputField
            type={showPW.current ? 'text' : 'password'}
            placeholder="현재 비밀번호를 입력해주세요"
            value={passwords.current}
            onChange={e => setPasswords({ ...passwords, current: e.target.value })}
          />
          <S.Icon onClick={() => togglePWVisible('current')}>{showPW.current ? <IoMdEye /> : <IoMdEyeOff />}</S.Icon>
        </S.InputWrapper>

        <S.Text>새 비밀번호</S.Text>
        <S.InputWrapper>
          <S.InputField
            type={showPW.new ? 'text' : 'password'}
            placeholder="새 비밀번호를 입력해주세요"
            value={passwords.new}
            onChange={e => setPasswords({ ...passwords, new: e.target.value })}
          />
          <S.Icon onClick={() => togglePWVisible('new')}>{showPW.new ? <IoMdEye /> : <IoMdEyeOff />}</S.Icon>
        </S.InputWrapper>

        <S.Text>새 비밀번호 확인</S.Text>
        <S.InputWrapper>
          <S.InputField
            type={showPW.confirm ? 'text' : 'password'}
            placeholder="새 비밀번호를 다시 입력해주세요"
            value={passwords.confirm}
            onChange={e => setPasswords({ ...passwords, confirm: e.target.value })}
          />
          <S.Icon onClick={() => togglePWVisible('confirm')}>{showPW.confirm ? <IoMdEye /> : <IoMdEyeOff />}</S.Icon>
        </S.InputWrapper>

        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

        <S.SaveButton>
          <ButtonModal type="button" onClick={handleSave}>
            확인
          </ButtonModal>
          {!openModal ? setOpenModal(true) : null}
        </S.SaveButton>
      </S.EditContainer>
    </S.Overlay>
  );
};
