import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #cccccc;
  padding: 20px 300px 20px 250px;
  font-family: Pretendard;
  font-weight: 600;
  margin-top: 20px;
`;

export const Icon = styled.div`
  font-size: 25px;
`;

export const TabSelected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #ffe5cf;
  height: 60px;
  width: 96px;
  margin-right: 10px;
  margin-left: 10px;

  &:hover {
    background: var(--button-hover-bg-color, #ffbf87);
  }
`;

export const TabUnselected = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #ffffff;
  height: 60px;
  width: 96px;
  margin-right: 10px;
  margin-left: 10px;

  &:hover {
    background: var(--button-hover-bg-color, #ffbf87);
  }
`;
