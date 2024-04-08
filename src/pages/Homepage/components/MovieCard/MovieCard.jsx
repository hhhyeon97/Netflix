import React from 'react';
import './MovieCard.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
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
        <div>
          <h4>{movie?.title}</h4>
        </div>
        <div className="ratings">
          <div>
            <FontAwesomeIcon icon={faStar} /> {movie?.vote_average.toFixed(1)}
          </div>
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
            &nbsp;
            {Math.floor(movie?.popularity)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
