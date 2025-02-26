import * as S from './ModalLogout.style';
import ButtonModal from '../../common/Button/ButtonModal';
import axios from 'axios';
import { API_URLS } from '../../../consts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const ModalLogout = ({ openModal, setOpenModal }) => {
  // const [error, setError] = useState('');
  const navigate = useNavigate();
  if (!openModal) return null;

  const handleLogout = () => {
    setOpenModal(false);
    navigate('/');
  };

  // if (!openModal) return null;

  // const handleLogout = async () => {
  //   setError('');

  //   const jwtAccessToken = localStorage.getItem('jwtAccessToken');

  //   try {
  //     await axios.get(API_URLS.signout, {
  //       headers: {
  //         Authorization: `Bearer ${jwtAccessToken}`,
  //       },
  //     });
  //     localStorage.removeItem('jwtAccessToken');
  //     localStorage.removeItem('userInfo');
  //     setOpenModal(false);
  //     navigate('/');
  //   } catch (err) {
  //     if (err.response) {
  //       if (err.response.status === 401) {
  //         setError('인증 토큰이 없습니다.');
  //       } else if (err.response.status === 500) {
  //         setError('Server Error');
  //       }
  //     } else {
  //       setError('로그아웃 실패');
  //     }
  //   }
  // };

  return (
    <S.Overlay>
      <S.Container>
        <S.Text>소곤소곤에서 로그아웃 하였습니다.</S.Text>
        {/* {error && <S.ErrorMessage>{error}</S.ErrorMessage>} */}
        {/*확인 버튼*/}
        <S.SaveButton>
          <ButtonModal type="button" onClick={handleLogout}>
            확인
          </ButtonModal>
        </S.SaveButton>
      </S.Container>
    </S.Overlay>
  );
};
