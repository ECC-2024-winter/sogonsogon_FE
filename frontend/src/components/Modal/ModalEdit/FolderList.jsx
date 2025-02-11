import { RiDeleteBin6Line } from 'react-icons/ri';
import ButtonBasic from '../../common/Button/ButtonBasic';
import * as S from './Edit.style';

const Folder = ({ folder, onToggle, onRemove }) => {
  return (
    <S.FolderNameContainer onClick={() => onToggle(folder.id)}>
      <S.FolderName>{folder.folderName}</S.FolderName>
      <ButtonBasic
        onClick={e => {
          e.stopPropagation();
          onRemove(folder.id);
        }}>
        <RiDeleteBin6Line />
      </ButtonBasic>
    </S.FolderNameContainer>
  );
};

function FolderList({ folders, onToggle, onRemove }) {
  return (
    <div>
      {folders.map(folder => (
        <Folder folder={folder} key={folder.id} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default FolderList;
