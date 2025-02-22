import styled from 'styled-components';
import onlylogo from '../../images/onlylogo.png';

export function Error({ children }) {
  return (
    <Container>
      <Img src={onlylogo} alt="Logo" />
      <StyledError>{children}</StyledError>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100vw;
  background-color: #fff7f0;
`;

const StyledError = styled.div`
  margin-top: 20px;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 100px;
  color: #ffbf87;
  font-weight: 500;
  font-size: 20px;
  font-family: 'Pretendard';
  cursor: pointer;
  padding: 10px 16px;
  text-align: center;
`;

const Img = styled.img`
  width: 50px;
  height: auto;
`;
