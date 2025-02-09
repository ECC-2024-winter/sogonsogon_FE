import * as S from "../../pages/LoginSignup/LoginSignup.style";

const InputField = ({ label, type, value, onChange}) => {
  return (
    <S.InputContainer>
      <S.InputLabel>{label}</S.InputLabel>
      <input type={type} value={value} onChange={onChange}/>
    </S.InputContainer>
  );
};

export default InputField;
