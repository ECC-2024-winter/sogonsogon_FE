import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate'; //페이지네이션 UI
import * as S from './SearchResults.style';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PlaceCard } from '../../components';
import axios from 'axios';
import { COMMON_API_URL } from '../../consts';
import { useParams } from 'react-router-dom';
import { SearchContainer } from '../MainPage/SearchContainer';

const searchResults = [
  {
    postId: 1,
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240618_22%2F17186870982432nacB_JPEG%2FIMG_4279.jpg',
    place: '텅',
    address: '서울 종로구 북촌로 701호',
  },
  {
    postId: 2,
    place: '프로토콜 연희점',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211117_235%2F1637111766001h166z_JPEG%2F04531D1F-5E55-40C2-B669-919206DBFB60.jpeg',
    address: '서울 서대문구 연희로 10길 2층',
  },
  {
    postId: 3,
    place: '고유',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240107_57%2F1704620911865zGP3o_JPEG%2FIMG_7566.jpeg',
    address: '서울 서대문구 연희로 90-1 2층',
  },
  {
    postId: 4,
    place: 'umoae',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220413_85%2F1649833914073QB8vK_JPEG%2F1A997AFC-D7DD-4BB3-9A77-32D0860057B7.jpeg',
    address: '서울 마포구 양화로6길 99-5 1.5층',
  },
  {
    postId: 5,
    place: '대충유원지',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220930_256%2F1664516460802rDTJO_JPEG%2F2FB1B20B-1E3E-4AA8-9B1E-830A6E4AE6E1.jpeg',
    address: '서울 마포구 월드컵북로6길 37',
  },
  {
    postId: 6,
    place: '브라운하우스 연남',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230223_156%2F1677154916028BoLKg_JPEG%2F01.jpg',
    address: '서울 마포구 동교로50길 25 2, 3층',
  },
  {
    postId: 7,
    place: '카페 물루',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250102_3%2F1735801237712v6ci9_JPEG%2FIMG_3845.jpeg',
    address: '서울 마포구 성미산로6길 8 1층',
  },
  {
    postId: 8,
    place: '그리즈',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250103_114%2F1735909103525a9kDg_JPEG%2FIMG_6715.jpeg',
    address: '서울 마포구 성미산로17길 46 1층',
  },
  {
    postId: 9,
    place: '종이숲',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240516_220%2F1715869197921sFsNM_JPEG%2FEBE3407D-1D1E-4D25-9F6E-68E46A895E1B.jpeg',
    address: '서울 마포구 희우정로 93 1층',
  },
  {
    postId: 10,
    place: '보리수',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDEyMjdfMjU0%2FMDAxNzM1MjczNDU5ODI3.RbXN-4c-bjA4-wFsjAwuQagv-RtXZNUGcfS3bJQmgWQg.V-opanjMN0gbcep54kRE5tBBsxsa_fPKN-n5L1CUxvEg.JPEG%2F5D28F361-390F-4754-8C6A-EF63F264313D.jpeg%3Ftype%3Dw1500_60_sharpen',
    address: '서울 마포구 성미산로17길 46 1층',
  },
  {
    postId: 11,
    place: '나루터',
    imageUrl:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240425_24%2F17140529075904ry77_JPEG%2FP1122399.jpg',
    address: '서울 송파구 백제고분로41길 19-1 2층',
  },
];
const SearchResultsPage = () => {
  // 페이지네이션
  const placesPerPage = 8;
  // 현재 페이지의 첫번째 항목 위치 저장
  const [currentPlaces, setCurrentPlaces] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [placesOffset, setPlacesOffset] = useState(0);

  // // API 연동
  // const { search } = useParams();
  // const [searchResults, setSearchResults] = useState([]);
  // const [error, setError] = useState('');

  // console.log('search', search);

  // useEffect(() => {
  //   const fetchResults = async () => {
  //     try {
  //       const response = await axios.get(`${COMMON_API_URL}/place/search?categories=${encodeURIComponent(search)}`);
  //       setSearchResults(response.data.data);
  //     } catch (err) {
  //       if (err.response) {
  //         setError(err.response?.data?.error);
  //       }
  //     }
  //   };
  //   if (search) {
  //     fetchResults();
  //   }
  // }, [search]);

  // Simulate fetching places from another resources.
  // (This could be places from props; or places loaded in a local state
  // from an API endpoint with useEffect and useState)
  useEffect(() => {
    const endOffset = placesOffset + placesPerPage; //현재 페이지의 마지막 항목 위치
    setCurrentPlaces(searchResults.slice(placesOffset, endOffset)); //현재 페이지의 데이터 추출
    setPageCount(Math.ceil(searchResults.length / placesPerPage)); //총 페이지 수
  }, [placesOffset, searchResults]);

  const handlePageClick = event => {
    const newOffset = event.selected * placesPerPage;
    setPlacesOffset(newOffset); //페이지 변경(시작점)
  };

  return (
    <SearchContainer>
      <div>
        {/* {error && <p>{error}</p>} */}
        <S.PlaceCardContainer>
          {currentPlaces.map(({ postId, imageUrl, place, address }) => (
            <PlaceCard key={postId} imageUrl={imageUrl} placeName={place} location={address} />
          ))}
        </S.PlaceCardContainer>
        <S.PaginationContainer>
          <ReactPaginate
            previousLabel={<FiChevronLeft />}
            nextLabel={<FiChevronRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            pageClassName="page-places"
            pageLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-places"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </S.PaginationContainer>
      </div>
    </SearchContainer>
  );
};

export default SearchResultsPage;
