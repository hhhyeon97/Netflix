import React, { useState } from 'react';
import './MoviePage.style.css';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import {
  Alert,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

// 경로 2가지
// nav바에서 클릭해서 온 경우 = > popularMovie 보여주기
// keyword를 입력해서 온 경우 = > keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('popularity.desc');
  const keyword = query.get('q');
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
    sortBy,
  });
  // console.log('ddd', data);

  const handlePageClick = ({ selected }) => {
    // console.log('page', page);
    setPage(selected + 1);
  };

  // 최대 페이지 수
  const maxPageCount = 100;

  // 페이지 수가 최대 페이지 수를 초과하는 경우, 최대 페이지 수로 설정
  const pageCount =
    data?.total_pages > maxPageCount ? maxPageCount : data?.total_pages;

  const handleSortChange = (sortByValue) => {
    setSortBy(sortByValue);
    setPage(1);
  };

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (isError) {
    return <Alert variant="lignt">{error.message}</Alert>;
  }

  return (
    <Container className="movie-page-area">
      <Row>
        <div>
          <h2 className="movie-page-title">
            <FontAwesomeIcon icon={faFilm} className="film-icon" />
            &nbsp;Movie
          </h2>
        </div>
      </Row>
      <Row className="filter-btn-area">
        <DropdownButton
          id="dropdown-basic-button"
          title="Sort by"
          variant="light"
        >
          <Dropdown.Item onClick={() => handleSortChange('popularity.desc')}>
            Popularity (High to Low)
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange('popularity.asc')}>
            Popularity (Low to High)
          </Dropdown.Item>
        </DropdownButton>
      </Row>
      <Row>
        <Col>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <div className="pagination-container">
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page - 1}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
