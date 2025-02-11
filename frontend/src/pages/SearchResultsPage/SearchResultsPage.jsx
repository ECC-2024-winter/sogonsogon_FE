import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate'; //페이지네이션 UI
import * as S from "./SearchResults.style";
import { PlaceCard, SearchBar } from '../../components';

// 예시
const places= [
  {
    id: 1,
    imageUrl:
      "https://blog.kakaocdn.net/dn/dizeYM/btrN5vZONwk/0ShfJor6t6KANhKzI3Qr1k/img.jpg",
    placeName: "텅",
    location: "서울 종로구 북촌로 701호",
  },
  {
    id: 2,
    placeName: "프로토콜 연희점",
    location: "서울 서대문구 연희로 10길 2층",
  },
  { id: 3, placeName: "장소", location: "위치" },
  { id: 4, placeName: "장소", location: "위치" },
  { id: 5, placeName: "장소", location: "위치" },
  { id: 6, placeName: "장소", location: "위치" },
  { id: 7, placeName: "장소", location: "위치" },
  { id: 8, placeName: "장소", location: "위치" },
  { id: 9, placeName: "장소", location: "위치" },
];

const SearchResultsPage = ( ) => {
  const placesPerPage = 8;
  // 현재 페이지의 첫번째 항목 위치 저장
  const [currentPlaces, setCurrentPlaces] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [placesOffset, setPlacesOffset] = useState(0);

  // Simulate fetching placess from another resources.
  // (This could be placess from props; or placess loaded in a local state
  // from an API endpoint with useEffect and useState)
  useEffect(() => {
  const endOffset = placesOffset + placesPerPage; //현재 페이지의 마지막 항목 위치
  console.log(`Loading places from ${placesOffset} to ${endOffset}`);
  setCurrentPlaces(places.slice(placesOffset, endOffset)); //현재 페이지의 데이터 추출
  setPageCount(Math.ceil(places.length / placesPerPage)); //총 페이지 수
}, [placesOffset]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * placesPerPage ;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setPlacesOffset(newOffset); //페이지 변경(시작점)
  };

  return (
    <S.Wrapper>
      <SearchBar />
      <S.PlaceCardContainer>
        {currentPlaces.map(({id, imageUrl, placeName, location}) => (
          <PlaceCard
            key={id}
            imageUrl={imageUrl}
            placeName={placeName}
            location={location}
          />
        ))}
      </S.PlaceCardContainer>
      <S.PaginationContainer>
      <ReactPaginate
        nextLabel="→"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="←"
        pageClassName="page-places"
        pageLinkClassName="page-link"
        previousClassName="page-places"
        previousLinkClassName="page-link"
        nextClassName="page-places"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-places"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      </S.PaginationContainer>
    </S.Wrapper>
  );
}

export default SearchResultsPage;