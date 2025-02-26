import logo from '../../images/logo.png';
import * as S from './Header.style'; // Import your styled-components
import { Link } from 'react-router-dom';
import { ModalLogout } from '../Modal/ModalLogout/ModalLogout';
import { useState } from 'react';

function Header({ isLoggedIn, setIsLoggedIn }) {
  // const token = localStorage.getItem('token');
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setOpenModal(true);
  };

  return (
    <S.Header>
      <S.HeaderObj>
        <Link to="/">
          <S.Img src={logo} alt="Logo" />
        </Link>
        <nav>
          <S.NavLinks>
            <S.NavLinkItem>
              {isLoggedIn ? (
                <S.StyledLink onClick={handleLogout}>로그아웃</S.StyledLink>
              ) : (
                <Link to="/login">
                  <S.StyledLink>로그인</S.StyledLink>
                </Link>
              )}
              {/* <Link to="/auth">
                <S.StyledLink>{token ? '로그아웃' : '로그인'}</S.StyledLink>
              </Link> */}
            </S.NavLinkItem>
            <S.NavLinkItem>
              <Link to="/savelist">
                <S.StyledLink>저장 목록</S.StyledLink>
              </Link>
            </S.NavLinkItem>
            <S.NavLinkItem>
              <Link to="/account">
                <S.StyledLink>내 계정</S.StyledLink>
              </Link>
            </S.NavLinkItem>
          </S.NavLinks>
        </nav>
      </S.HeaderObj>

      <ModalLogout openModal={openModal} setOpenModal={setOpenModal} />
    </S.Header>
  );
}

export default Header;
