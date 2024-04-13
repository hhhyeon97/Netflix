import React from 'react';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';

const GenreFilter = ({ onGenreChange }) => {
  const { data: genres, isLoading, isError } = useMovieGenreQuery();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Please try again in a few minutes.</div>;

  return (
    <ButtonGroup>
      {genres.map((genre) => (
        <ToggleButton
          key={genre.id}
          id={`genre-${genre.id}`}
          type="radio"
          variant="outline-light"
          name="genre"
          value={genre.id}
          onChange={(e) => onGenreChange(e.target.value)}
        >
          {genre.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default GenreFilter;
