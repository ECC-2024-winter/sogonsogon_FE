import logo from '../../images/logo.png';
import * as S from './Header.style'; // Import your styled-components
import { Link } from 'react-router-dom';

function Header() {
  return (
    <S.Header>
      <S.HeaderObj>
        <Link to="/">
          <S.Img src={logo} alt="Logo" />
        </Link>
        <nav>
          <S.NavLinks>
            <S.NavLinkItem>
              <Link to="/savelist">
                <S.StyledLink>저장 목록</S.StyledLink>
              </Link>
            </S.NavLinkItem>
            <S.NavLinkItem>
              <Link to="/memo">
                <S.StyledLink>기록</S.StyledLink>
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
    </S.Header>
  );
}

export default Header;
