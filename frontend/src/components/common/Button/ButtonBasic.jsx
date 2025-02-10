import styled from 'styled-components';

function Button({ disabled, children, onClick }) {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #000000;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Pretendard';
  cursor: pointer;
  padding: 2px;
  background: #ffffff;

  &:active,
  &:hover {
    background: var(--button-hover-bg-color, rgb(247, 244, 244));
  }
`;

export default Button;
