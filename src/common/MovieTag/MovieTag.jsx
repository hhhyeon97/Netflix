import React from 'react';
import './MovieTag.style.css';

const MovieTag = ({ movie }) => {
  return (
    <div className="detail-tag-wrap">
      <div className="movie-vote">{movie.vote_average}</div>
      <div className="movie-popular">{movie.popularity}</div>
      <div className="movie-adult">
        {movie.adult ? (
          <span className="adult_19">19</span>
        ) : (
          <span className="adult_all bd-success">ALL</span>
        )}
      </div>
    </div>
  );
};

export default MovieTag;
