import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

export const EditContainer = styled.div`
  background-color: #ffffff;
  width: 672px;
  height: 416px;
  border: 1px solid #cccccc;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  font-weight: 600;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const FolderName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin-top: 20px;
`;

export const SaveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
