import { IoArrowBackSharp } from 'react-icons/io5';
import * as S from './InFolderPage.style';
import { PlaceCard } from '../../components';
import { useParams } from 'react-router-dom';

// 임시 데이터
const folders = [
  {
    folderName: '북카페/ 작업하기 좋은 카페',
    places: [
      {
        placeId: 1,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240618_22%2F17186870982432nacB_JPEG%2FIMG_4279.jpg',
        placeName: '텅',
        location: '서울 종로구 북촌로 701호',
      },
      {
        placeId: 2,
        placeName: '프로토콜 연희점',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211117_235%2F1637111766001h166z_JPEG%2F04531D1F-5E55-40C2-B669-919206DBFB60.jpeg',
        location: '서울 서대문구 연희로 10길 2층',
      },
      {
        placeId: 3,
        placeName: '고유',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240107_57%2F1704620911865zGP3o_JPEG%2FIMG_7566.jpeg',
        location: '서울 서대문구 연희로 90-1 2층',
      },
      {
        placeId: 4,
        placeName: 'umoae',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220413_85%2F1649833914073QB8vK_JPEG%2F1A997AFC-D7DD-4BB3-9A77-32D0860057B7.jpeg',
        location: '서울 마포구 양화로6길 99-5 1.5층',
      },
      {
        placeId: 5,
        placeName: '대충유원지',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220930_256%2F1664516460802rDTJO_JPEG%2F2FB1B20B-1E3E-4AA8-9B1E-830A6E4AE6E1.jpeg',
        location: '서울 마포구 월드컵북로6길 37',
      },
      {
        placeId: 6,
        placeName: '브라운하우스 연남',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230223_156%2F1677154916028BoLKg_JPEG%2F01.jpg',
        location: '서울 마포구 동교로50길 25 2, 3층',
      },
      {
        placeId: 7,
        placeName: '카페 물루',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250102_3%2F1735801237712v6ci9_JPEG%2FIMG_3845.jpeg',
        location: '서울 마포구 성미산로6길 8 1층',
      },
      {
        placeId: 8,
        placeName: '그리즈',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250103_114%2F1735909103525a9kDg_JPEG%2FIMG_6715.jpeg',
        location: '서울 마포구 성미산로17길 46 1층',
      },
      {
        placeId: 9,
        placeName: '종이숲',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240516_220%2F1715869197921sFsNM_JPEG%2FEBE3407D-1D1E-4D25-9F6E-68E46A895E1B.jpeg',
        location: '서울 마포구 희우정로 93 1층',
      },
      {
        placeId: 10,
        placeName: '보리수',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDEyMjdfMjU0%2FMDAxNzM1MjczNDU5ODI3.RbXN-4c-bjA4-wFsjAwuQagv-RtXZNUGcfS3bJQmgWQg.V-opanjMN0gbcep54kRE5tBBsxsa_fPKN-n5L1CUxvEg.JPEG%2F5D28F361-390F-4754-8C6A-EF63F264313D.jpeg%3Ftype%3Dw1500_60_sharpen',
        location: '서울 마포구 성미산로17길 46 1층',
      },
      {
        placeId: 11,
        placeName: '나루터',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240425_24%2F17140529075904ry77_JPEG%2FP1122399.jpg',
        location: '서울 송파구 백제고분로41길 19-1 2층',
      },
    ],
  },
  {
    folderName: '혼밥 맛집',
    places: [
      {
        placeId: 1,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230217_49%2F1676604522315KXQMN_JPEG%2F%25BF%25C2%25BC%25BE%25C5%25D9%25B5%25BF.jpg',
        placeName: '온센 안국점',
        location: '서울 종로구 율곡로 57-4 온센 안국점',
      },
      {
        placeId: 2,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240530_30%2F1717032756468w7aI1_JPEG%2F%25BF%25C0%25B7%25B9%25B3%25EB%25B6%25F3%25B8%25E0%25C0%25CC%25B9%25CC%25C1%25F6%25BB%25E7%25C1%25F8.jpg',
        placeName: '오레노라멘 인사점',
        location: '서울 종로구 율곡로 49-4 1층',
      },
      {
        placeId: 3,
        placeName: '미분당',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240509_298%2F1715232128868dsEs1_JPEG%2F240110_0072.jpg',
        location: '서울 서대문구 연세로5길 26-7 1층',
      },
      {
        placeId: 4,
        placeName: '연어초밥',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230321_174%2F1679348900683W8u6i_JPEG%2FFD415EE4-C367-4624-A372-DA932F0E9579.jpeg',
        location: '서울 서대문구 이화여대1길 42-1 3층',
      },
      {
        placeId: 5,
        placeName: '까이식당',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200227_203%2F1582732114593nBqzH_JPEG%2FvEOael5FGEvHVai4xCFzkl46.jpg',
        location: '서울 서대문구 이화여대2가길 24 1층',
      },
      {
        placeId: 6,
        placeName: '소오',
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241226_232%2F1735178171730NzSq5_JPEG%2FGJF01819.jpg',
        location: '서울 서대문구 이화여대길 50-10 1층',
      },
    ],
  },
  {
    folderName: '2025년 1월 전시회',
    places: [
      {
        placeId: 1,
        imageUrl:
          'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250221_205%2F1740103519675rIpi1_JPEG%2F360_main_thumb_url_1740103519662.jpg',
        placeName: '한글 일일달력 어울림전',
        location: '뤄니갤러리',
      },
      {
        placeId: 2,
        imageUrl:
          'https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20240912_293%2F1726123461731XYPJT_JPEG%2F360_main_thumb_url_1726123461689.jpg',
        placeName: '불멸의 화가 반 고흐',
        location: '예술의 전당 한가람미술관',
      },
      {
        placeId: 3,
        placeName: 'Labor of Love',
        imageUrl:
          'https://search.pstatic.net/common?type=ofullfill&size=138x200&quality=95&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250131_226%2F1738292985203JSlmo_JPEG%2F360_main_thumb_url_1738292985157.jpg',
        location: '갤러리밈',
      },
      {
        placeId: 4,
        placeName: '음하영 개인전',
        imageUrl:
          'https://search.pstatic.net/common?type=ofullfill&size=138x200&quality=95&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250131_174%2F1738289915904xL7G9_PNG%2F360_36406181_main_thumb_url_1738289915860.png',
        location: '이길이구 갤러리',
      },
      {
        placeId: 5,
        placeName: '숭고한 시뮬라크라라',
        imageUrl:
          'https://search.pstatic.net/common?type=ofullfill&size=138x200&quality=95&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250124_169%2F1737688048669dz89f_JPEG%2F360_main_thumb_url_1737688048643.jpg',
        location: '리만머핀',
      },
      {
        placeId: 6,
        placeName: '권두현 개인전',
        imageUrl:
          'https://search.pstatic.net/common?type=ofullfill&size=138x200&quality=95&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250120_237%2F17373533485079rwJC_JPEG%2F360_main_thumb_url_1737353348487.jpg',
        location: '매스갤러리 한남',
      },
      {
        placeId: 7,
        placeName: '생동하는 선',
        imageUrl:
          'https://search.pstatic.net/common?type=ofullfill&size=138x200&quality=95&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250122_209%2F1737512277677KlVlC_PNG%2F360_main_thumb_url_1737512277650.png',
        location: '무아',
      },
      {
        placeId: 8,
        placeName: 'HIDDEN LIBRARY 2',
        imageUrl:
          'https://search.pstatic.net/common?type=ofullfill&size=138x200&quality=95&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250120_100%2F17373537302917BqtK_JPEG%2F360_main_thumb_url_1737353730268.jpg',
        location: '플로어',
      },
      {
        placeId: 9,
        placeName: '사물들의 힘',
        imageUrl:
          'https://search.pstatic.net/common?type=ofullfill&size=138x200&quality=95&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20250114_264%2F1736837488140XWi4A_JPEG%2F360_main_thumb_url_1736837488091.jpg',
        location: '스페이스 이수',
      },
    ],
  },
  {
    folderName: '디저트 맛집',
    places: [
      {
        placeId: 1,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250205_77%2F1738710710150sxGs2_JPEG%2FIMG_5896.jpeg',
        placeName: '바나나하루키',
        location: '서울 마포구 동교로38길 6 3층',
      },
      {
        placeId: 2,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240312_44%2F1710250763316DRweN_JPEG%2F325C82C4-6956-4A71-BAAB-61ED67F9AE13.jpeg',
        placeName: 'bokeh',
        location: '서울 서대문구 연희로 116 2층',
      },
      {
        placeId: 3,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241204_261%2F17332890289799bGsw_JPEG%2F73911D5E-7D0B-4987-B882-6B3012F16836.jpeg',
        placeName: '해피앤피스커피클럽',
        location: '서울 서대문구 연희로 134 1층',
      },
      {
        placeId: 4,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230419_29%2F1681906232406lQa4o_JPEG%2F12345.jpg',
        placeName: '보통공원',
        location: '서울 마포구 망원로 79 3층',
      },
      {
        placeId: 5,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220430_217%2F1651295611452VEvii_JPEG%2FA4EDF253-5ABC-4275-AAE9-1D6EA1ADBC58.jpeg',
        placeName: '모을',
        location: '서울 마포구 월드컵로19길 71 3층',
      },
    ],
  },
  {
    folderName: '망원동 소품샵',
    places: [
      {
        placeId: 1,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240212_27%2F1707726814442sYokb_JPEG%2F2024-02-12_17%253B26%253B59.JPG',
        placeName: '떠블유떠블유',
        location: '서울 마포구 포은로5길 15 2층',
      },
      {
        placeId: 2,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220519_153%2F1652919854082GJJHi_JPEG%2FZEROSPACE.jpg',
        placeName: '제로스페이스 망원',
        location: '서울 마포구 희우정로16길 32',
      },
      {
        placeId: 3,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231124_129%2F1700815642718xKEk1_JPEG%2FKakaoTalk_20231124_174255822_01.jpg',
        placeName: '테라스웨어',
        location: '서울 마포구 월드컵로19길 25 1층',
      },
      {
        placeId: 4,
        imageUrl:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230407_239%2F1680795370210URGg8_JPEG%2F20230404_151035.jpg',
        placeName: '두두상점',
        location: '서울 마포구 포은로 80 1층',
      },
    ],
  },
];
function InFolderPage() {
  const handleSave = () => {
    alert('장소가 저장되었습니다!');
  };

  const { folderName } = useParams();
  const currentFolder = folders.find(folder => decodeURIComponent(folder.folderName) === folderName);

  if (!currentFolder) {
    return <div>해당 폴더에 저장된 장소가 없습니다.</div>;
  }

  const { places } = currentFolder;

  return (
    <div>
      <S.PageTop>
        <S.BackIcon href="/savelist">
          <IoArrowBackSharp />
        </S.BackIcon>
        <S.SaveTitle>{decodeURIComponent(folderName)}</S.SaveTitle>
      </S.PageTop>
      <S.PlaceCardContainer>
        {places.map(({ placeId, imageUrl, placeName, location }) => (
          <PlaceCard key={placeId} imageUrl={imageUrl} placeName={placeName} location={location} onSave={handleSave} />
        ))}
      </S.PlaceCardContainer>
    </div>
  );
}
export default InFolderPage;
