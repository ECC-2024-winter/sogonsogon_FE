import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateFolder from './CreateFolder';
import FolderList from './FolderList';

/* 가상 데이터 
  const [folders, setFolders] = useState([
    { id: '1', folderName: '혼밥 맛집' },
    { id: '2', folderName: '북카페/작업하기 좋은 카페' },
    { id: '3', folderName: '2025년 1월 전시회' },
    { id: '4', folderName: '망원동 소품샵' },
    { id: '5', folderName: '디저트 맛집' },
  ]);*/

const API_URL = 'http://sogonsogon-env.eba-kczhd36e.ap-northeast-2.elasticbeanstalk.com/';

function Edit() {
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState('');

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await axios.get(`${API_URL}/folders`);
        setFolders(response.data);
      } catch (error) {
        console.error('폴더 불러오기 에러', error);
      }
    };
    fetchFolders();
  }, []);

  const onChange = e => {
    setFolderName(e.target.value);
  };

  const onCreate = async () => {
    if (!folderName.trim()) return;
    try {
      const response = await axios.post(`${API_URL}/folders`, { params: { folderName } });
      setFolders(prevFolders => [...prevFolders, response.data]);
      setFolderName('');
    } catch (error) {
      console.error('폴더 생성 에러', error);
    }
  };

  const onToggle = folderId => {
    setFolders(prevFolders =>
      prevFolders.map(item => (item.folderId === folderId ? { ...item, active: !item.active } : item)),
    );
  };

  const onRemove = async folderId => {
    try {
      await axios.delete(`${API_URL}/folders/${folderId}`);
      setFolders(prevFolders => prevFolders.filter(item => item.folderId !== folderId));
    } catch (error) {
      console.error('폴더 삭제 에러', error);
    }
  };

  return (
    <div>
      <FolderList folders={folders} onToggle={onToggle} onRemove={onRemove} />
      <CreateFolder folderName={folderName} onChange={onChange} onCreate={onCreate} />
    </div>
  );
}

export default Edit;
