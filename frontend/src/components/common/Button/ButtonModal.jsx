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
  border-radius: 100px;
  color: #000000;
  font-weight: 500;
  font-size: 12px;
  font-family: 'Pretendard';
  cursor: pointer;
  padding: 8px 12px;
  background: #ffbf87;
  padding-left: 1.2rem;
  padding-right: 1.2rem;

  height: Fixed (40px) px;

  &:active,
  &:hover {
    background: var(--button-hover-bg-color, rgb(252, 181, 118));
  }
`;

export default Button;
