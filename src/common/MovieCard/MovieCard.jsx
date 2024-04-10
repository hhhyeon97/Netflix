import React from 'react';
import './MovieCard.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  // console.log('ggg', genreData);
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`movies/${movie?.id}`);
  };

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList
      .map((id) => {
        const genreObj = genreData.find((genre) => genre.id === id);
        return genreObj.name;
      })
      .slice(0, 2); // 최대 2개의 장르만 유지
    return genreNameList;
  };

  return (
    <div
      onClick={goToDetail}
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
        <div>
          {showGenre(movie.genre_ids).map((genre, index) => (
            <span key={index} className="me-1 blue-badge">
              {genre}
            </span>
          ))}
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
          {movie?.adult === false && (
            <div>
              <span className="all-color">ALL</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
