// Image mapping service for local movie images
export interface ImageMapping {
  [key: string]: string;
}

// Map movie titles to local images
export const movieImageMap: ImageMapping = {
  // Your custom images (you can add more mappings here)
  'batman': '/images/batman.svg',
  'the batman': '/images/batman.svg', 
  'batman begins': '/images/batman.svg',
  'the dark knight': '/images/batman.svg',
  'star wars': '/images/star-wars.svg',
  'a new hope': '/images/star-wars.svg',
  'the empire strikes back': '/images/star-wars.svg',
  'return of the jedi': '/images/star-wars.svg',
  'avengers': '/images/avengers.svg',
  'the avengers': '/images/avengers.svg',
  'avengers: endgame': '/images/avengers.svg',
  'avengers: infinity war': '/images/avengers.svg',
  // Add more mappings for your actual images
  // Example: 'movie title': '/images/A (1).jpg',
};

export const getLocalMovieImage = (title: string): string | null => {
  const cleanTitle = title.toLowerCase().trim();
  
  // Direct mapping
  if (movieImageMap[cleanTitle]) {
    return movieImageMap[cleanTitle];
  }
  
  // Partial matching for better results
  for (const [mapTitle, imagePath] of Object.entries(movieImageMap)) {
    if (cleanTitle.includes(mapTitle) || mapTitle.includes(cleanTitle)) {
      return imagePath;
    }
  }
  
  return null;
};

export const getMovieImageUrl = (movie: { Title: string; Poster: string }): string => {
  // First try local images
  const localImage = getLocalMovieImage(movie.Title);
  if (localImage) {
    return localImage;
  }
  
  // Fall back to API poster
  if (movie.Poster && movie.Poster !== 'N/A') {
    return movie.Poster;
  }
  
  // Final fallback
  return '/placeholder-movie.svg';
};