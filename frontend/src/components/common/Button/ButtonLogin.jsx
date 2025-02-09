import * as S from "../../../pages/LoginSignup/LoginSignup.style"

const Button = ({ text, onClick, disabled }) => {
  return (
    <S.ButtonLogin onClick={onClick} disabled={disabled}>
      {text}
    </S.ButtonLogin>
  );
};

export default Button;
