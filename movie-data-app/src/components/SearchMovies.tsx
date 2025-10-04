import React, { useState } from 'react';
import { searchMovies } from '../services/movieService';
import type { Movie } from '../types/movie';
import { MovieCard } from './MovieCard';

export const SearchMovies: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = async (query: string, page: number = 1) => {
    if (!query.trim()) {
      setError('Please enter a movie title to search');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await searchMovies(query, page);
      
      if (response.Search) {
        if (page === 1) {
          setMovies(response.Search);
        } else {
          setMovies(prev => [...prev, ...response.Search!]);
        }
        setTotalResults(parseInt(response.totalResults || '0'));
      } else {
        setMovies([]);
        setTotalResults(0);
      }
      
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search movies');
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    handleSearch(searchQuery, 1);
  };

  const loadMore = () => {
    if (!loading && movies.length < totalResults) {
      handleSearch(searchQuery, currentPage + 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for movies... (e.g., Batman, Star Wars)"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-colors"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Search Results */}
      {movies.length > 0 && (
        <>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Search Results ({totalResults} movies found)
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
          
          {/* Load More Button */}
          {movies.length < totalResults && (
            <div className="text-center">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors"
              >
                {loading ? 'Loading...' : 'Load More Movies'}
              </button>
            </div>
          )}
        </>
      )}

      {/* No Results */}
      {movies.length === 0 && !loading && !error && searchQuery && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            No movies found for "{searchQuery}". Try a different search term.
          </div>
        </div>
      )}

      {/* Welcome Message */}
      {movies.length === 0 && !searchQuery && !loading && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-4">
            Welcome to the Movie Database!
          </div>
          <div className="text-gray-400">
            Search for your favorite movies to get started.
          </div>
        </div>
      )}
    </div>
  );
};