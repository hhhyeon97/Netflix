import React, { useState } from 'react';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import './GenreFilter.style.css';
import { Form } from 'react-bootstrap';

const GenreFilter = ({ onGenreChange }) => {
  const { data: genres, isLoading, isError } = useMovieGenreQuery();
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
    onGenreChange(genreId);
  };

  const handleGenreChange = (e) => {
    const selectedGenreId = e.target.value;
    setSelectedGenre(selectedGenreId);
    onGenreChange(selectedGenreId);
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Please try again in a few minutes.</div>;

  return (
    <div>
      <div className="desktop-genre-filter">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => handleGenreClick(genre.id)}
            className={
              selectedGenre === genre.id
                ? 'genre-button active'
                : 'genre-button'
            }
          >
            {genre.name}
          </button>
        ))}
      </div>
      <div className="mobile-genre-filter">
        <Form.Select
          value={selectedGenre}
          onChange={handleGenreChange}
          className="genre-select"
        >
          <option value="">장르</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
};

export default GenreFilter;
