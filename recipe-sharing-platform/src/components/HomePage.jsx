import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import data from '../data.json';

// Fetch function for React Query
const fetchRecipes = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const posts = await response.json();
  
  // Transform posts into recipe format and limit to first 8 posts
  const transformedRecipes = posts.slice(0, 8).map((post, index) => ({
    id: post.id,
    title: post.title.charAt(0).toUpperCase() + post.title.slice(1), // Capitalize first letter
    summary: post.body.substring(0, 100) + '...', // Use body as summary, truncated
    image: `https://images.unsplash.com/photo-${1550000000000 + index}?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80`,
    // Add some default recipe data
    ingredients: [
      'Fresh ingredients',
      'Quality spices',
      'Cooking oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Prepare all ingredients',
      'Follow the cooking process',
      'Season to taste',
      'Serve hot and enjoy'
    ],
    prepTime: '15 minutes',
    cookTime: '30 minutes',
    servings: 4
  }));
  
  return transformedRecipes;
};

const HomePage = () => {
  // Use React Query to fetch recipes
  const { 
    data: recipes = [], 
    isLoading: loading, 
    isError 
  } = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes,
    staleTime: 5 * 60 * 1000, // 5 minutes
    onError: (err) => {
      console.error('Error fetching recipes:', err);
    },
  });

  // Use local data as fallback if there's an error
  const displayRecipes = isError ? data.slice(0, 8) : recipes;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Amazing Recipes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Share your culinary creations and explore recipes from around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/add-recipe"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Your Recipe
            </Link>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition duration-300">
              Explore Recipes
            </button>
          </div>
        </div>
      </div>

      {/* Recipes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Recipes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Explore our collection of delicious recipes, each carefully crafted and tested by our community
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                to="/add-recipe"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Recipe
              </Link>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {isError && (
          <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Failed to load recipes from API. Loading local data instead.</span>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Recipe Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              {/* Recipe Image */}
              <Link to={`/recipe/${recipe.id}`} className="block">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              
              {/* Recipe Content */}
              <div className="p-6">
                <Link to={`/recipe/${recipe.id}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {recipe.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {recipe.summary}
                </p>
                
                {/* View Recipe Button */}
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;