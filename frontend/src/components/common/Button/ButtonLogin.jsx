import * as S from "../../../pages/LoginSignup/LoginSignup.style"

const ButtonLogin = ({ text, onClick, disabled }) => {
  return (
    <S.ButtonLogin onClick={onClick} disabled={disabled}>
      {text}
    </S.ButtonLogin>
  );
};

export default ButtonLogin;
