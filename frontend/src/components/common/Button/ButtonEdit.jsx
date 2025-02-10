import styled from 'styled-components';
import { BiSolidEdit } from 'react-icons/bi';

function Button({ disabled, children }) {
  return (
    <StyledButton disabled={disabled}>
      <BiSolidEdit />
      &nbsp;
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #000000;
  font-weight: 500;
  font-size: 12px;
  font-family: 'Pretendard';
  cursor: pointer;
  padding: 8px 12px;
  background: #ffffff;
  padding-left: 1.2rem;
  padding-right: 1.2rem;

  height: Fixed (40px) px;

  &:active,
  &:hover {
    background: var(--button-hover-bg-color, rgb(247, 244, 244));
  }
`;

export default Button;
