import { useState } from 'react';
import { LogInContainer, InputField, ButtonLogin } from '../../components';
import * as S from './LoginSignup.style';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    console.log('회원가입:', { nickname, email, pw, agree });
  };

  return (
    <div>
      <LogInContainer title="회원가입">
        <InputField label="닉네임" type="text" value={nickname} onChange={e => setNickname(e.target.value)} />
        <InputField label="이메일 주소" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <InputField label="비밀번호" type="pw" value={pw} onChange={e => setPassword(e.target.value)} />
        <S.CheckboxContainer>
          <S.HiddenCheckbox id="check" checked={agree} onChange={() => setAgree(!agree)}></S.HiddenCheckbox>
          <S.CheckButton htmlFor="check" $checked={agree}>
            [필수] 서비스 이용 약관에 동의합니다.
          </S.CheckButton>
        </S.CheckboxContainer>
        <ButtonLogin text="회원가입" onClick={handleSignup} disabled={!agree} />
        <S.LoginFooter>
          이미 계정이 있으신가요?
          <S.FooterLink onClick={() => navigate('/login')}>로그인 하러가기</S.FooterLink>
        </S.LoginFooter>
      </LogInContainer>
    </div>
  );
};

export default SignupPage;
