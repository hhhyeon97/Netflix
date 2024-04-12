import React from 'react';
import MovieTag from '../../../../common/MovieTag/MovieTag';
import './MovieDetailInfo.style.css';

const MovieDetailInfo = ({ movie }) => {
  const priceToString = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="movie-detail-info">
      <div className="poster-banner">
        {movie?.poster_path === null ? (
          <img
            src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}
            className="poster-empty"
            alt="poster-empty"
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            className="poster-image"
            alt="poster"
          />
        )}
      </div>
      <div className="detail-cont-wrap">
        <div className="detail-titleWrap">
          <div className="detail-badge">
            {movie?.genres.map((item, index) => (
              <span key={index}>{item.name}</span>
            ))}
          </div>
          <div className="detail-title">{movie?.title}</div>
          <div className="detail-subtitle">{movie?.tagline}</div>
          <MovieTag movie={movie} />
        </div>
        <div className="detail-cont">{movie?.overview}</div>
        <ul className="detail-info-list">
          <li>
            <span>Budget</span>${priceToString(movie?.budget)}
          </li>
          <li>
            <span>Revenue</span>${priceToString(movie?.revenue)}
          </li>
          <li>
            <span>Release Date</span>
            {movie?.release_date}
          </li>
          <li>
            <span>Run Time</span>
            {movie?.runtime}분
          </li>
        </ul>
        {/* 유투브 영상 */}
      </div>
    </div>
  );
};

export default MovieDetailInfo;
