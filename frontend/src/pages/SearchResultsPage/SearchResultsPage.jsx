import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate'; //페이지네이션 UI
import * as S from './SearchResults.style';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PlaceCard, SearchBar, Category } from '../../components';
import axios from 'axios';
import { apiUrl } from '../../Api';
import { useParams } from 'react-router-dom';

const SearchResultsPage = () => {
  // 페이지네이션
  const placesPerPage = 8;
  // 현재 페이지의 첫번째 항목 위치 저장
  const [currentPlaces, setCurrentPlaces] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [placesOffset, setPlacesOffset] = useState(0);

  // API 연동
  const { search } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`${apiUrl}/place/${encodeURIComponent(search)}`);
        setSearchResults(response.data.data);
      } catch (err) {
        if (err.response) {
          setError(err.response?.data?.error);
        }
      }
    };
    if (search) {
      fetchResults();
    }
  }, [search]);

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
    <div>
      <SearchBar />
      <Category />
      {error && <p>{error}</p>}
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
  );
};

export default SearchResultsPage;
