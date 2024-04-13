import React, { useState } from 'react';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import './GenreFilter.style.css';

const GenreFilter = ({ onGenreChange }) => {
  const { data: genres, isLoading, isError } = useMovieGenreQuery();
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
    onGenreChange(genreId);
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Please try again in a few minutes.</div>;

  return (
    <div>
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => handleGenreClick(genre.id)}
          className={
            selectedGenre === genre.id ? 'genre-button active' : 'genre-button'
          }
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
