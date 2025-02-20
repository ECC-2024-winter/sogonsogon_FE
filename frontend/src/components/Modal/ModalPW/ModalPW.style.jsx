import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const EditContainer = styled.div`
  background-color: #ffffff;
  width: 420px;
  padding: 24px;
  border: 1px solid #cccccc;
  border-radius: 15px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #555;
`;

export const SaveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const Text = styled.div`
  width: 100%;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const InputField = styled.input`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 14px;
  padding: 12px 16px;
  border: 1px solid #e3e3e3;
  border-radius: 7px;
  background: #fafafa;
  outline: none;

  &:focus {
    border: 1px solid #999999;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
`;

export const Icon = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #555;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  font-size: 14px;
  color: #e74c3c; /* 빨간색 */
  background-color: #f8d7da; /* 연한 빨간 배경 */
  border: 1px solid #e74c3c; /* 빨간색 테두리 */
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  font-weight: 600;
`;
