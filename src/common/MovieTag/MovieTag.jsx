import React from 'react';
import './MovieTag.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const MovieTag = ({ movie }) => {
  return (
    <div className="detail-tag-wrap">
      <div className="movie-vote">
        <FontAwesomeIcon icon={faStar} color="#ebedad" /> {movie.vote_average}
      </div>
      <div className="movie-popular">
        <FontAwesomeIcon icon={faThumbsUp} /> {movie.popularity}
      </div>
      <div className="movie-adult">
        {movie.adult ? (
          <span className="adult_19">19</span>
        ) : (
          <span className="adult_all">ALL</span>
        )}
      </div>
    </div>
  );
};

export default MovieTag;
