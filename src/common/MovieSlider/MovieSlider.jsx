import React from 'react';
import './MovieSlider.style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div className="popular-slide-wrap">
      <h3>
        <FontAwesomeIcon icon={faFire} color="#6390d4" /> {title}
      </h3>
      <Carousel
        infinite={true}
        centerMode={true}
        containerClass="carousel-container"
        itemClass="movie-item"
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
