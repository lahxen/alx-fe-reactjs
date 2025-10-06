import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipeCardSkeleton from '../components/RecipeCardSkeleton';
import SearchBar from '../components/SearchBar';
import data from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from the JSON file with loading delay
    const fetchRecipes = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setRecipes(data);
      setFilteredRecipes(data);
      setLoading(false);
    };
    
    fetchRecipes();
  }, []);

  useEffect(() => {
    // Filter recipes based on search term and category
    let filtered = recipes;

    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        recipe.summary.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    setFilteredRecipes(filtered);
  }, [recipes, searchTerm, selectedCategory]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

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
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Recipes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Recipes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of delicious recipes, each carefully crafted and tested by our community
          </p>
        </div>

        {/* Search and Filter */}
        <SearchBar onSearch={handleSearch} onFilter={handleFilter} />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredRecipes.length} of {recipes.length} recipes
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            // Show skeleton loading cards
            Array.from({ length: 8 }).map((_, index) => (
              <RecipeCardSkeleton key={index} />
            ))
          ) : filteredRecipes.length > 0 ? (
            // Show actual recipe cards
            filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            // Show empty state
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🍳</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No recipes found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || selectedCategory !== 'all'
                  ? "Try adjusting your search or filter criteria"
                  : "No recipes available at the moment"}
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Load More Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;