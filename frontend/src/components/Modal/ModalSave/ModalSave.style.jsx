import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SaveContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.p`
  margin-bottom: 20px;
`;

export const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const CheckItem = styled.div``;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const CheckBox = styled.label`
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
    display: inline-block;
    margin-right: 8px;
    align-items: center;
    justify-content: center;
    content: '${props => (props.$checked ? '✔' : '')}';
    font-size: 12px;
    color: white;
  }
`;
export const AddCategoryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;
  color: #888;
  margin-top: 10px;

  &:hover {
    color: black;
  }
`;

export const NewCategoryInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;

  input {
    flex: 1;
    padding: 5px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`;

export const SaveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
