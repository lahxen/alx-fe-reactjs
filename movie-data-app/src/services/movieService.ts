import type { MovieSearchResponse, MovieDetails } from '../types/movie';

// Get your free API key from http://www.omdbapi.com/apikey.aspx
// Add it to your .env file as VITE_OMDB_API_KEY=your_key_here
const API_KEY = import.meta.env.VITE_OMDB_API_KEY || 'YOUR_OMDB_API_KEY';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query: string, page: number = 1): Promise<MovieSearchResponse> => {
  if (!query.trim()) {
    throw new Error('Search query cannot be empty');
  }

  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: MovieSearchResponse = await response.json();
    
    if (data.Response === 'False') {
      throw new Error(data.Error || 'Failed to search movies');
    }
    
    return data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (imdbID: string): Promise<MovieDetails> => {
  if (!imdbID) {
    throw new Error('Movie ID is required');
  }

  const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: MovieDetails = await response.json();
    
    if (data.Response === 'False') {
      throw new Error(data.Error || 'Failed to fetch movie details');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};