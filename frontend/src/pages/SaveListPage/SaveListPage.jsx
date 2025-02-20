import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SaveFolder, ButtonEdit, ModalEdit } from '../../components';
import * as S from './SaveListPage.style';

/*가상 데이터
const folders = [
  { folderId: 1, imageUrl: [], folderName: '혼밥 맛집' },
  {
    folderId: 2,
    imageUrl: [
      'https://blog.kakaocdn.net/dn/dizeYM/btrN5vZONwk/0ShfJor6t6KANhKzI3Qr1k/img.jpg',
      'https://storage.heypop.kr/assets/2024/02/26114133/main.1-scaled.jpg',
      'https://www.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=49036&fileTy=MEDIA&fileNo=1',
      'https://www.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=49035&fileTy=MEDIA&fileNo=1',
    ],
    folderName: '북카페/ 작업하기 좋은 카페',
  },
  { folderId: 3, imageUrl: [], folderName: '2025년 1월 전시회' },
  { folderId: 4, imageUrl: [], folderName: '망원동 소품샵' },
  { folderId: 5, imageUrl: [], folderName: null },
  { folderId: 6, imageUrl: [], folderName: null },
];*/

function SaveListPage() {
  const [openModal, setOpenModal] = useState(false);
  const [folders, setFolders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await axios.get(
          'http://sogonsogon-env.eba-kczhd36e.ap-northeast-2.elasticbeanstalk.com/folders',
        );
        setFolders(response.data);
      } catch (error) {
        console.error('데이터 가져오기 에러', error);
        setError(error);
      }
    };

    fetchFolders();
  }, []);

  if (error) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;

  return (
    <div>
      <S.SaveTitleWrapper>
        <S.SaveTitle>저장 목록</S.SaveTitle>
        <ButtonEdit type="button" onClick={() => setOpenModal(true)}>
          편집하기
        </ButtonEdit>
        {openModal && <ModalEdit openModal={openModal} setOpenModal={setOpenModal} />}
      </S.SaveTitleWrapper>

      <S.SaveFolders>
        <S.SaveFolderContainer>
          {folders
            .filter(folder => folder.folderName)
            .map(({ folderId, imageUrl, folderName }) => (
              <Link
                key={folderId}
                to={`/folder/${encodeURIComponent(folderName)}`}
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <SaveFolder imageUrls={imageUrl} folderName={folderName} />
              </Link>
            ))}
        </S.SaveFolderContainer>
      </S.SaveFolders>
    </div>
  );
}

export default SaveListPage;
