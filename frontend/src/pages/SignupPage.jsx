import React, { useState } from "react";
import Header from "../components/Header";
import LogInContainer from "../components/LogInContainer";
import InputField from "../components/InputField";
import Button from "../ui/Button/ButtonLogin";
import "../styles/LoginSignup.css"

const SignupPage = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleRegister = () => {
    console.log("회원가입:", { nickname, email, password, agree });
  };

  return (
      <div className= "SignupPage">
        <Header></Header>
        <LogInContainer title="회원가입">
        <InputField label="닉네임" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <InputField label="이메일 주소" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className="checkbox-container">
        <input type="checkbox" id="check" checked={agree} onChange={() => setAgree(!agree)} />
        <label htmlFor="check"> [필수] 서비스 이용 약관에 동의합니다.</label>
        </div>

        <Button text="회원가입" onClick={handleRegister} disabled={!agree} />
        </LogInContainer>
      </div>
    
  );
};

export default SignupPage;
