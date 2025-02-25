import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SaveFolder, ButtonEdit, ModalEdit } from '../../components';
import * as S from './SaveListPage.style';

/*가상 데이터*/
const folders = [
  {
    folderId: 1,
    imageUrl: [
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230217_49%2F1676604522315KXQMN_JPEG%2F%25BF%25C2%25BC%25BE%25C5%25D9%25B5%25BF.jpg',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240530_30%2F1717032756468w7aI1_JPEG%2F%25BF%25C0%25B7%25B9%25B3%25EB%25B6%25F3%25B8%25E0%25C0%25CC%25B9%25CC%25C1%25F6%25BB%25E7%25C1%25F8.jpg',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240509_298%2F1715232128868dsEs1_JPEG%2F240110_0072.jpg',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230321_174%2F1679348900683W8u6i_JPEG%2FFD415EE4-C367-4624-A372-DA932F0E9579.jpeg',
    ],
    folderName: '혼밥 맛집',
  },
  {
    folderId: 2,
    imageUrl: [
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240618_22%2F17186870982432nacB_JPEG%2FIMG_4279.jpg',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211117_235%2F1637111766001h166z_JPEG%2F04531D1F-5E55-40C2-B669-919206DBFB60.jpeg',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240107_57%2F1704620911865zGP3o_JPEG%2FIMG_7566.jpeg',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220413_85%2F1649833914073QB8vK_JPEG%2F1A997AFC-D7DD-4BB3-9A77-32D0860057B7.jpeg',
    ],
    folderName: '북카페/ 작업하기 좋은 카페',
  },
  {
    folderId: 3,
    imageUrl: [
      'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250221_205%2F1740103519675rIpi1_JPEG%2F360_main_thumb_url_1740103519662.jpg',
      'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20240912_293%2F1726123461731XYPJT_JPEG%2F360_main_thumb_url_1726123461689.jpg',
      'https://search.pstatic.net/common?type=ofullfill&size=138x200&quality=95&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250131_226%2F1738292985203JSlmo_JPEG%2F360_main_thumb_url_1738292985157.jpg',
      'https://search.pstatic.net/common?type=ofullfill&size=138x200&quality=95&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250131_174%2F1738289915904xL7G9_PNG%2F360_36406181_main_thumb_url_1738289915860.png',
    ],
    folderName: '2025년 1월 전시회',
  },
  {
    folderId: 4,
    imageUrl: [
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240212_27%2F1707726814442sYokb_JPEG%2F2024-02-12_17%253B26%253B59.JPG',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220519_153%2F1652919854082GJJHi_JPEG%2FZEROSPACE.jpg',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231124_129%2F1700815642718xKEk1_JPEG%2FKakaoTalk_20231124_174255822_01.jpg',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230407_239%2F1680795370210URGg8_JPEG%2F20230404_151035.jpg',
    ],
    folderName: '망원동 소품샵',
  },
  {
    folderId: 5,
    imageUrl: [
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250205_77%2F1738710710150sxGs2_JPEG%2FIMG_5896.jpeg',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240312_44%2F1710250763316DRweN_JPEG%2F325C82C4-6956-4A71-BAAB-61ED67F9AE13.jpeg',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241204_261%2F17332890289799bGsw_JPEG%2F73911D5E-7D0B-4987-B882-6B3012F16836.jpeg',
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230419_29%2F1681906232406lQa4o_JPEG%2F12345.jpg',
    ],
    folderName: '디저트 맛집',
  },
];

function SaveListPage() {
  const [openModal, setOpenModal] = useState(false);

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
            .map(({ id, imageUrl, folderName }) => (
              <Link
                key={id}
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
