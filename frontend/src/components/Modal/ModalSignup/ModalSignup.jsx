import * as S from './ModalSignup.style';
import ButtonModal from '../../common/Button/ButtonModal';
import { useNavigate } from 'react-router-dom';

export const ModalSignup = ({ setIsSignupModalOpen }) => {
  const navigate = useNavigate();

  const handleSignup = () => {
    setIsSignupModalOpen(false);
    navigate('/login');
  };

  return (
    <S.Overlay>
      <S.Container>
        <S.Text>
          회원가입에 성공하셨습니다 !<br />
          이제 로그인 해주세요 😊
        </S.Text>
        <S.SaveButton>
          <ButtonModal type="button" onClick={handleSignup}>
            확인
          </ButtonModal>
        </S.SaveButton>
      </S.Container>
    </S.Overlay>
  );
};
