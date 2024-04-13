import React from 'react';
import './MovieDetail.style.css';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { Alert } from 'bootstrap';
import MovieDetailInfo from './components/MovieDetailInfo/MovieDetailInfo';
import MovieReview from './components/MovieReview/MovieReview';

const MovieDetail = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery({ id });
  // console.log('detail data', movie);

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
      ></div>
      <MovieDetailInfo movie={movie} id={id} />
      {/*크레딧 */}
      {/*리뷰*/}
      <MovieReview />
    </div>
  );
};

export default MovieDetail;
