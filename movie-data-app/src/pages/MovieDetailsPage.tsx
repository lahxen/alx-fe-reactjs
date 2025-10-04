import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movieService';
import type { MovieDetails as MovieDetailsType } from '../types/movie';

export const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovieDetails = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
      } catch (err) {
        setError('Failed to load movie details');
        console.error('Error fetching movie details:', err);
      } finally {
        setLoading(false);
      }
    };

    loadMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading movie details...</div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-red-600 mb-4">{error || 'Movie not found'}</div>
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-blue-200 hover:text-white">
            ← Back to Search
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.svg'}
                alt={movie.Title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{movie.Title}</h1>
              <p className="text-gray-600 mb-4">{movie.Year} • {movie.Runtime} • {movie.Genre}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Plot</h2>
                <p className="text-gray-700">{movie.Plot}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold mb-1">Director</h3>
                  <p className="text-gray-700">{movie.Director}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Cast</h3>
                  <p className="text-gray-700">{movie.Actors}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Language</h3>
                  <p className="text-gray-700">{movie.Language}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Country</h3>
                  <p className="text-gray-700">{movie.Country}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-yellow-50 p-3 rounded">
                  <h3 className="font-semibold text-yellow-800">IMDB Rating</h3>
                  <p className="text-2xl font-bold text-yellow-600">{movie.imdbRating}/10</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <h3 className="font-semibold text-green-800">Metascore</h3>
                  <p className="text-2xl font-bold text-green-600">{movie.Metascore}/100</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <h3 className="font-semibold text-blue-800">Box Office</h3>
                  <p className="text-lg font-bold text-blue-600">{movie.BoxOffice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};