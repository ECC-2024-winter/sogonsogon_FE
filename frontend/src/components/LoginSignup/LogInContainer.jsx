import * as S from '../../pages/LoginSignup/LoginSignup.style';
import logo from '../../images/onlylogo.png';

const LogInContainer = ({ title, children }) => {
  return (
    <S.LoginsignupContainer>
      <S.LogoContainer>
        <S.LogoImage src={logo} alt="only-logo" />
        <S.LoginsignupTitle>{title}</S.LoginsignupTitle>
      </S.LogoContainer>
      <S.LoginsignupFrame>{children}</S.LoginsignupFrame>
    </S.LoginsignupContainer>
  );
};

export default LogInContainer;
