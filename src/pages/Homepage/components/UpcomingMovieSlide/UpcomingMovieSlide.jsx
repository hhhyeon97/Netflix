import React from 'react';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import Spinner from 'react-bootstrap/Spinner';
import Footer from '../../../../common/Footer/Footer';

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <Spinner animation="border" role="status" />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="Upcoming Movies"
        movies={data.results}
        responsive={responsive}
      />
      <Footer />
    </div>
  );
};
export default UpcomingMovieSlide;
