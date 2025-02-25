import { useState } from 'react';
import CreateFolder from './CreateFolder';
import FolderList from './FolderList';

function Edit() {
  /* 가상 데이터 */
  const [folders, setFolders] = useState([
    { id: '1', folderName: '혼밥 맛집' },
    { id: '2', folderName: '북카페/작업하기 좋은 카페' },
    { id: '3', folderName: '2025년 1월 전시회' },
    { id: '4', folderName: '망원동 소품샵' },
    { id: '5', folderName: '디저트 맛집' },
  ]);

  const [folderName, setFolderName] = useState('');

  const onChange = e => {
    setFolderName(e.target.value);
  };

  const onCreate = id => {
    if (!folderName.trim()) return;

    const folder = { id, folderName };
    setFolders([...folders, folder]);
    setFolderName('');
  };

  const onToggle = id => {
    setFolders(folders.map(item => (item.id === id ? { ...item, active: !item.active } : item)));
  };

  const onRemove = id => {
    setFolders(folders.filter(item => item.id !== id));
  };

  return (
    <div>
      <FolderList folders={folders} onToggle={onToggle} onRemove={onRemove} />
      <CreateFolder folderName={folderName} onChange={onChange} onCreate={onCreate} />
    </div>
  );
}

export default Edit;
