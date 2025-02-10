import { useState } from "react";
import { Header, LogInContainer, InputField, ButtonLogin } from "../../components";
import * as S from "./LoginSignup.style";

const SignupPage = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSignup = () => {
    console.log("회원가입:", { nickname, email, password, agree });
  };

  return (
      <div>
        <Header />
        <LogInContainer title="회원가입">
        <InputField label="닉네임" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <InputField label="이메일 주소" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <S.CheckboxContainer>
        <S.HiddenCheckbox id="check" checked={agree} onChange={() => setAgree(!agree)}></S.HiddenCheckbox>
        <S.CheckButton htmlFor="check" $checked={agree}> [필수] 서비스 이용 약관에 동의합니다.</S.CheckButton>
        </S.CheckboxContainer>

        <ButtonLogin text="회원가입" onClick={handleSignup} disabled={!agree} />
        </LogInContainer>
      </div>
    
  );
};

export default SignupPage;
