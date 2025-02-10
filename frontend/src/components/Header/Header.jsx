import logo from "../../images/logo.png";
import * as S from "./Header.style"; // Import your styled-components

function Header() {
  return (
    <S.Header>
      <S.HeaderObj>
        <S.Img src={logo} alt="Logo" />
        <nav>
          <S.NavLinks>
            <S.NavLinkItem>
              <S.StyledLink href="/savelist">저장 목록</S.StyledLink>
            </S.NavLinkItem>
            <S.NavLinkItem>
              <S.StyledLink href="/memo">기록</S.StyledLink>
            </S.NavLinkItem>
            <S.NavLinkItem>
              <S.StyledLink href="/account">내 계정</S.StyledLink>
            </S.NavLinkItem>
          </S.NavLinks>
        </nav>
      </S.HeaderObj>
    </S.Header>
  );
}

export default Header;
