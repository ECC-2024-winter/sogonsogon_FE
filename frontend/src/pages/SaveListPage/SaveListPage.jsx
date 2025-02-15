import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SaveFolder, ButtonEdit, ModalEdit } from '../../components';
import * as S from './SaveListPage.style';

/*가상 데이터*/
const folders = [
  {
    id: 1,
    imageUrl: [],
    folderName: '혼밥 맛집',
  },
  {
    id: 2,
    imageUrl: [
      'https://blog.kakaocdn.net/dn/dizeYM/btrN5vZONwk/0ShfJor6t6KANhKzI3Qr1k/img.jpg',
      'https://storage.heypop.kr/assets/2024/02/26114133/main.1-scaled.jpg',
      'https://www.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=49036&fileTy=MEDIA&fileNo=1',
      'https://www.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=49035&fileTy=MEDIA&fileNo=1',
    ],
    folderName: '북카페/ 작업하기 좋은 카페',
  },
  {
    id: 3,
    imageUrl: [],
    folderName: '2025년 1월 전시회',
  },
  {
    id: 4,
    imageUrl: [],
    folderName: '망원동 소품샵',
  },
  {
    id: 5,
    imageUrl: [],
    folderName: null,
  },
  {
    id: 6,
    imageUrl: [],
    folderName: null,
  },
];

function SaveListPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Link to="/folder" style={{ textDecoration: 'none', color: 'inherit' }}>
        <S.SaveTitleWrapper>
          <S.SaveTitle>저장 목록</S.SaveTitle>
          <ButtonEdit
            type="button"
            onClick={() => {
              setOpenModal(true);
            }}>
            편집하기
          </ButtonEdit>
          {openModal ? <ModalEdit openModal={openModal} setOpenModal={setOpenModal} /> : null}
        </S.SaveTitleWrapper>
        <S.SaveFolders>
          <S.SaveFolderContainer>
            {/* TODO: 디스트럭처링 필요 */}
            {folders.map(({ id, imageUrl, folderName }) => (
              <SaveFolder key={id} imageUrls={imageUrl} folderName={folderName} />
            ))}
          </S.SaveFolderContainer>
        </S.SaveFolders>
      </Link>
    </div>
  );
}

export default SaveListPage;
