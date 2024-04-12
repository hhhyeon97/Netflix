import React from 'react';
import './MovieDetail.style.css';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { Alert } from 'bootstrap';
import { Row, Col, Badge } from 'react-bootstrap';
import Line from './components/Line/Line';

const MovieDetail = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery({ id });
  console.log('detail data', movie);

  const priceToString = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

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
      <Row className="detail-wrap mb-5">
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
        <Col className="right-area">
          <div className="mt-3 mb-3">
            {movie?.genres.map((item, index) => (
              <Badge bg="primary" key={index}>
                {item.name}
              </Badge>
            ))}
          </div>
          <div>
            <h1 className="mb-3 movie-title">{movie?.title}</h1>
            <h5 className="mb-3">{movie?.tagline}</h5>
            <span>{movie.vote_average}</span>
            <span>{movie.popularity}</span>
            <span>{movie.adult ? 'under 18' : 'all'}</span>
            <Line />
            <p>{movie?.overview}</p>
            <Line />
          </div>
          <div>
            <ul className="mt-4 mb-2">
              <li>
                <Badge bg="primary" className="info-badge">
                  Budget
                </Badge>
                $ {priceToString(movie?.budget)}
              </li>
              <li>
                <Badge bg="primary" className="info-badge">
                  Revenue
                </Badge>
                $ {priceToString(movie?.revenue)}
              </li>
              <li>
                <Badge bg="primary" className="info-badge">
                  Release Date
                </Badge>
                {movie?.release_date}
              </li>
              <li>
                <Badge bg="primary" className="info-badge">
                  Run time
                </Badge>
                {movie?.runtime} 분
              </li>
            </ul>
          </div>
          <Line />
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetail;
