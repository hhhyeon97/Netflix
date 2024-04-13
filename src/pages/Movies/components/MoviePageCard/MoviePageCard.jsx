import React from 'react';
import './MoviePageCard.style.css';
import { Badge } from 'react-bootstrap';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';
import MovieTag from '../../../../common/MovieTag/MovieTag';

const MoviePageCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  const movieDetailPage = (id) => {
    navigate(`/movies/${id}`);
  };

  const shortenOverview = (overview, maxLength) => {
    if (!overview) return '';
    if (overview.length <= maxLength) return overview;
    return overview.substring(0, maxLength) + '...';
  };

  return (
    <div
      className="movie-detail-card"
      onClick={() => movieDetailPage(movie?.id)}
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ')',
      }}
    >
      <div className="overlay">
        <div>
          <h4>{movie.title}</h4>
          <div className="badge-wrap">
            {showGenre(movie.genre_ids).length > 0 ? (
              showGenre(movie.genre_ids).map((id, index) => (
                <Badge
                  bg="light"
                  key={index}
                  style={{ color: 'black', margin: '5px' }}
                >
                  {id}
                </Badge>
              ))
            ) : (
              <div
                style={{ color: 'orange', zIndex: '1000', fontSize: '30px' }}
              >
                No genre data available
              </div>
            )}
          </div>
          <div className="view-text">
            {shortenOverview(movie?.overview, 150)}
          </div>
        </div>
        <div className="movie-tag-area">
          <MovieTag movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MoviePageCard;
