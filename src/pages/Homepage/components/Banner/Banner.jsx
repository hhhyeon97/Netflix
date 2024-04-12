import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css';
import Spinner from 'react-bootstrap/Spinner';
const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  //console.log('ddd', data);
  if (isLoading) {
    return (
      <div className="loading-spinner-container">
        <Spinner
          animation="border"
          role="status"
          variant="light"
          className="loading-spinner"
          style={{ width: '100px', height: '100px' }}
        />
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[16].backdrop_path}` +
          ')',
      }}
    >
      <div className="text-white banner-text-area">
        <h1>{data.results[16].title}</h1>
        <p>{data.results[16].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
