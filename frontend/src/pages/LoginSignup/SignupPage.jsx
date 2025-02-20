import { useState } from 'react';
import { LogInContainer, InputField, ButtonLogin } from '../../components';
import * as S from './LoginSignup.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../Api';

const SignupPage = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const isValidNickname = nickname => /^[ㄱ-ㅎ가-힣a-zA-Z]+$/.test(nickname);
  const isValidEmail = email => email.includes('@');
  const isValidPassword = pw => /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/.test(pw);

  const handleSignup = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!isValidNickname(nickname)) {
      setError('닉네임은 한글, 영어만 입력할 수 있고 공백이 없어야 합니다.');
      return;
    }
    if (!isValidEmail(email)) {
      setError('올바른 이메일 형식이 아닙니다.');
      return;
    }
    if (!isValidPassword(pw)) {
      setError('비밀번호는 영문, 숫자 포함 8자 이상이어야 합니다.');
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/user/signup`, { nickname, email, pw });
      setSuccess(response.data.success);
      setTimeout(() => navigate('/login'), 1000); //성공 시 로그인 페이지로 이동
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setError('올바르지 않은 데이터입니다.');
        } else if (error.response.status === 409) {
          setError('이미 사용 중인 아이디입니다.');
        } else if (error.response.status === 500) {
          setError('Server Error');
        }
      } else {
        setError('회원가입 실패');
      }
    }
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
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        {success && <S.SuccessMessage>{success}</S.SuccessMessage>}
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
