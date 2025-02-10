import { RiDeleteBin6Line } from 'react-icons/ri';

const Folder = ({ folder, onToggle, onRemove }) => {
  return (
    <div className="FolderNameContainer" onClick={() => onToggle(folder.id)}>
      {folder.folderName}
      <button
        onClick={e => {
          e.stopPropagation();
          onRemove(folder.id);
        }}>
        <RiDeleteBin6Line />
      </button>
    </div>
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
