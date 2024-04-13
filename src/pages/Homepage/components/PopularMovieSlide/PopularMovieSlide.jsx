import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from 'bootstrap';
import './PopularMovieSlide.style.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import Spinner from 'react-bootstrap/Spinner';

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log(data);
  if (isLoading) {
    return (
      <div className="loading-spinner">
        <Spinner animation="border" role="status" />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="light">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title="Popular Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default PopularMovieSlide;
