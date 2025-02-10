import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, LogInContainer, InputField, ButtonLogin } from "../../components";
import * as S from "./LoginSignup.style"

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("로그인:", { email, password });
    };
    
    return (
        <div>
            <Header />
            <LogInContainer title="로그인">
            <InputField label="이메일 주소" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <ButtonLogin text="로그인" onClick={handleLogin} />
            <S.LoginFooter> 소근소근이 처음이신가요? 
                <S.FooterLink 
                    onClick={() => navigate("/signup")}>회원가입하기
                </S.FooterLink>
            </S.LoginFooter>
            </LogInContainer>
        </div>
    );
};

export default LoginPage;
