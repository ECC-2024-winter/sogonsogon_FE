import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LogInContainer from "../components/LogInContainer";
import InputField from "../components/InputField";
import Button from "../ui/Button/ButtonLogin";
import "../styles/LoginSignup.css"

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("로그인:", { email, password });
    };
    
    return (
        <div className= "LoginPage">
            <Header></Header>
            <LogInContainer title="로그인">
            <InputField label="이메일 주소" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button text="로그인" onClick={handleLogin} />
            <p className="login-footer"> 
            소근소근이 처음이신가요? <span onClick={() => navigate("/signup")}>회원가입하기</span>
            </p>
            </LogInContainer>
        </div>
    );
};

export default LoginPage;
