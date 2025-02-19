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

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccountBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  background-color: #f4f4f4;
  border-radius: 20px;
  margin-top: 30px;
  padding: 90px 50px;
`;

export const Text = styled.div`
  margin-top: 20px;
  font-family: Pretendard;
  font-size: 15px;
  text-align: left;
`;

export const Nickname = styled.div`
  width: 400px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
  margin-top: 10px;
`;

export const Email = styled.div`
  width: 400px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid #d9d9d9;
  background-color: #f6e9de;
  margin-top: 10px;
`;

export const Password = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonPW = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 15px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  padding: 5px 10px;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  height: 20px;

  &:active,
  &:hover {
    background: var(--button-hover-bg-color, rgb(238, 238, 238));
  }
`;

export const ButtonINFO = styled.div`
  display: inline-flex;
  position: relative;
  left: 140px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  padding: 5px 10px;
  cursor: pointer;
  text-align: center;
  margin-top: 50px;

  height: 20px;
  width: 100px;

  &:active,
  &:hover {
    background: var(--button-hover-bg-color, rgb(238, 238, 238));
  }
`;
