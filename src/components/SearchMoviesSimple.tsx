import { useState } from 'react';
import { searchMovies } from '../services/movieService';
import type { Movie } from '../types/movie';
import { MovieCard } from './MovieCard';

export const SearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      setError('Please enter a movie title');
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await searchMovies(searchQuery);
      setMovies(response.Search || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search movies');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies... (e.g., Batman, Star Wars, Avatar)"
          className="search-input"
        />
        <button
          type="submit"
          disabled={loading}
          className="search-button"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Searching for movies...</p>
        </div>
      )}

      {/* No Results */}
      {hasSearched && movies.length === 0 && !loading && !error && (
        <div className="loading">
          <h3>No movies found</h3>
          <p>Try a different search term or check your spelling.</p>
        </div>
      )}

      {/* Results */}
      {movies.length > 0 && (
        <>
          <div className="results-info">
            Found {movies.length} movies for "{searchQuery}"
          </div>
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </>
      )}

      {/* Welcome Message */}
      {!hasSearched && !loading && (
        <div className="welcome">
          <h3>Welcome to Movie Database</h3>
          <p>Search for your favorite movies and discover detailed information about them.</p>
          <div className="suggestions">
            <div onClick={() => { setSearchQuery('Batman'); handleSearch({preventDefault: () => {}} as React.FormEvent); }}>
              Try: "Batman"
            </div>
            <div onClick={() => { setSearchQuery('Star Wars'); handleSearch({preventDefault: () => {}} as React.FormEvent); }}>
              Try: "Star Wars"
            </div>
            <div onClick={() => { setSearchQuery('Marvel'); handleSearch({preventDefault: () => {}} as React.FormEvent); }}>
              Try: "Marvel"
            </div>
          </div>
        </div>
      )}
    </div>
  );
};