import React from 'react';
import './MovieCard.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const MovieCard = ({ movie }) => {
  return (
    <div
      className="movie-card"
      style={{
        backgroundImage:
          'url(' +
          `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ')',
      }}
    >
      <div className="overlay">
        <h4>{movie.title}</h4>
        <div>
          <div>
            <FontAwesomeIcon icon={faStar} /> {movie.vote_average.toFixed(1)}
          </div>
          <div>수리예정입니다🛠️</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
