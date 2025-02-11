import styled from 'styled-components';

function Title({ children }) {
  return <PageTitle>{children}</PageTitle>;
}

const PageTitle = styled.div`
  color: #000000;
  font-size: 32px;
  font-family: 'Pretendard';
  font-weight: 600;
  text-align: left;
  margin-left: 250px;
  margin-top: 50px;
`;

export default Title;
