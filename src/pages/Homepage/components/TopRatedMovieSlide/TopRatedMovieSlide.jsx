import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import { useTopRateMoviesQuery } from '../../../../hooks/useTopRateMovies';

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRateMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="Top Rated Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};
export default TopRatedMovieSlide;
