import React from 'react';
import './MovieDetail.style.css';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { Alert } from 'bootstrap';
import { Row, Col } from 'react-bootstrap';

const MovieDetail = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery({ id });
  console.log('detail data', movie);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <div
        className="movie-detail-bg"
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path})`,
        }}
      />
      <Row className="mb-5 detail-wrap">
        <Col className="left-area">
          {movie?.poster_path === null ? (
            <div className="poster-area">
              <img
                src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}
                className="empty-poster"
                alt="empty-post"
              />
            </div>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              className="movie-img"
              alt="movie-image"
            />
          )}
        </Col>
        <Col>{/*디테일정보슈수수*/}</Col>
      </Row>
    </div>
  );
};

export default MovieDetail;
