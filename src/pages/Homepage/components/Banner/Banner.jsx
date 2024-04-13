import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
          `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[0].backdrop_path}` +
          ')',
      }}
    >
      <div className="text-white banner-text-area">
        <h3 className="pick-text">"Today's Solflix Pick !"</h3>

        <h1>{data.results[0].title}</h1>
        {/* 정리하고 다시 <span>
          <FontAwesomeIcon icon={faStar} />
          &nbsp;
          {Math.floor(data.results[0].vote_average)}
        </span> */}
        <span>{data.results[0].vat}</span>
        {/*서브문구로바꾸기-없을땐overview */}
        <p>{data.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
