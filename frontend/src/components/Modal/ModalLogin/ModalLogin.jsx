import * as S from './ModalLogin.style';
import ButtonModal from '../../common/Button/ButtonModal';
import { useNavigate } from 'react-router-dom';

export const ModalLogin = ({ setIsLoginModalOpen }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoginModalOpen(false);
    navigate('/');
  };

  return (
    <S.Overlay>
      <S.Container>
        <S.Text>소곤소곤에 오신 걸 환영합니다 🤗</S.Text>
        <S.SaveButton>
          <ButtonModal type="button" onClick={handleLogin}>
            확인
          </ButtonModal>
        </S.SaveButton>
      </S.Container>
    </S.Overlay>
  );
};
