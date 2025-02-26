import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogInContainer, InputField, ButtonLogin } from '../../components';
import * as S from './LoginSignup.style';
import axios from 'axios';
import { COMMON_API_URL } from '../../consts';
import { ModalLogin } from '../../components/Modal/ModalLogin/ModalLogin';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const isValidEmail = email => email.includes('@');
  const isValidPassword = pw => /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/.test(pw);

  const handleLogin = async e => {
    e.preventDefault();
    setError('');

    if (!isValidEmail(email)) {
      setError('올바른 이메일 형식이 아닙니다.');
      return;
    }
    if (!isValidPassword(pw)) {
      setError('비밀번호는 영문, 숫자 포함 8자 이상이어야 합니다.');
      return;
    }

    // 임시로 localStorage에 저장
    localStorage.setItem('token', 'fake_token');
    setIsLoggedIn(true);
    setIsLoginModalOpen(true);

    // try {
    //   const response = await axios.post(`${COMMON_API_URL}/user/signin`, { params: { email, pw } });

    //   localStorage.setItem('jwtAccessToken', response.data.jwtAccessToken);
    //   localStorage.setItem('userInfo', JSON.stringify(response.data.userInfo));

    //   navigate('/');
    // } catch (error) {
    //   if (error.response) {
    //     if (error.response.status === 401) {
    //       setError('올바르지 않은 데이터입니다.');
    //     } else if (error.response.status === 404) {
    //       setError('존재하지 않는 사용자입니다.');
    //     } else if (error.response.status === 500) {
    //       setError('Server Error');
    //     }
    //   } else {
    //     setError('로그인 실패');
    //   }
    // }
  };

  return (
    <div>
      <LogInContainer title="로그인">
        <InputField label="이메일 주소" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <InputField label="비밀번호" type="password" value={pw} onChange={e => setPassword(e.target.value)} />
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        <ButtonLogin text="로그인" onClick={handleLogin} />
        <S.LoginFooter>
          소근소근이 처음이신가요?
          <S.FooterLink onClick={() => navigate('/signup')}>회원가입하기</S.FooterLink>
        </S.LoginFooter>
      </LogInContainer>

      {isLoginModalOpen && <ModalLogin setIsLoginModalOpen={setIsLoginModalOpen} />}
    </div>
  );
};

export default LoginPage;
