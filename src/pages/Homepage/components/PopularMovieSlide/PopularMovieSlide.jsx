import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from 'bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './PopularMovieSlide.style.css';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile1: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
  mobile2: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div className="popular-slide-wrap">
      <h3>
        <span className="hot-text">HOT</span>한 영화 TOP 20
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
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMovieSlide;
