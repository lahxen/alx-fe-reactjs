import React from 'react';
import { Link } from 'react-router-dom';
import type { Movie } from '../types/movie';
import { getMovieImageUrl } from '../services/imageService';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [imageUrl, setImageUrl] = React.useState(getMovieImageUrl(movie));
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      // If the smart image service fails, try the original API image
      if (movie.Poster && movie.Poster !== 'N/A') {
        setImageUrl(movie.Poster);
      } else {
        setImageUrl('/placeholder-movie.svg');
      }
    } else {
      // Final fallback to placeholder
      setImageUrl('/placeholder-movie.svg');
    }
  };

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
      <img
        src={imageUrl}
        alt={movie.Title}
        className="movie-poster"
        onError={handleImageError}
      />
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        
        <div className="movie-meta">
          <span>{movie.Year}</span>
          <span className="movie-type">{movie.Type}</span>
        </div>
      </div>
    </Link>
  );
};