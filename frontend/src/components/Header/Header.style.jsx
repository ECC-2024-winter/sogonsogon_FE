import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  border-bottom: 1px solid lightgray;
`;

export const HeaderObj = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  text-align: center;
  margin: 10px;
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const NavLinkItem = styled.li`
  display: inline-block;
  margin-right: 3rem;

  & > a {
    text-decoration: none;
  }
`;

export const StyledLink = styled.span`
  color: black;
  font-size: 16px;
  font-weight: 700;
  transition: color 0.3s;

  &:hover {
    color: #ffbf87;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-left: 20px;
`;
