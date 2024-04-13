import React, { useState } from 'react';
import './MoviePage.style.css';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Alert, Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import PopularityFilter from './components/Filter/PopularityFilter';

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
  const [sortBy, setSortBy] = useState(''); // 정렬 상태

  const keyword = query.get('q');
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
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

  // 정렬 옵션 변경
  const handleSortChange = (order) => {
    setSortBy(order);
  };

  // 필터링할 영화 데이터
  let filteredMovies = data?.results || [];

  // 정렬 적용
  if (sortBy) {
    filteredMovies.sort((a, b) => {
      if (sortBy === 'asc') {
        return a.vote_average - b.vote_average;
      } else {
        return b.vote_average - a.vote_average;
      }
    });
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <Alert variant="light">{error.message}</Alert>;
  }

  return (
    <Container className="movie-page-area">
      <Row>
        <div>
          <h2 className="movie-page-title">
            <FontAwesomeIcon icon={faFilm} className="film-icon" />
            &nbsp;Movie ({data.total_results})
          </h2>
        </div>
      </Row>
      <Row className="filter-btn-area">
        <PopularityFilter onSortChange={handleSortChange} />
      </Row>
      <Row>
        {data?.results.map((movie, index) => (
          <Col key={index} lg={4} xs={12}>
            <MovieCard movie={movie} />
          </Col>
        ))}
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
      </Row>
    </Container>
  );
};

export default MoviePage;
