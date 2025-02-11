import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 12px;
  flex-direction: column;
  display: flex;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  text-align: left;
`;

export const ButtonLogin = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  background-color: #ffbf87;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ffa251;
  }
  &:disabled,
  &:disabled:hover {
    background-color: #c9c9c9;
    cursor: default;
  }
`;

export const LoginsignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const LogoImage = styled.img`
  margin-left: 0;
`;

export const LoginsignupTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const LoginsignupFrame = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 715px;
  height: 450px;
`;

export const LoginFooter = styled.p`
  display: flex;
  justify-content: right;
  gap: 40px;
`;

export const FooterLink = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: left;
`;
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const CheckButton = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:before {
    width: 17px;
    height: 17px;
    border: 2px solid #ffbf87;
    border-radius: 4px;
    vertical-align: middle;
    background-color: ${props => (props.$checked ? '#FFBF87' : 'white')};
    display: flex;
    align-items: center;
    justify-content: center;
    content: '${props => (props.$checked ? '✔' : '')}';
    font-size: 12px;
    color: white;
  }
`;
