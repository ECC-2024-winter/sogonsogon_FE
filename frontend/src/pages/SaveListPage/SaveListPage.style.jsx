import styled from 'styled-components';

export const SaveFolders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const SaveTitle = styled.div`
  color: #000000;
  font-size: 32px;
  font-family: 'Pretendard';
  font-weight: 600;
  text-align: left;
  margin-left: 250px;
  margin-top: 40px;
  margin-bottom: 25px;
`;

export const SaveFolderContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  gap: 80px;
  border: none;
`;

export const SaveTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 220px 20px 0px;
  padding: 0 16px;
`;
