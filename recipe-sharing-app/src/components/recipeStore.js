import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  // Array of recipe IDs that the user has marked as favorites
  favorites: [],
  // Array of recommended recipe objects based on user favorites
  recommendations: [],

  // Add a new recipe to the list
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  // Delete a recipe by its ID
  deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),
  // Update a recipe by its ID
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe)
  })),
  // Replace all recipes
  setRecipes: (recipes) => set({ recipes }),

  // Set the current search term for filtering
  setSearchTerm: (term) => set({ searchTerm: term }),
  // Filter recipes by search term (case-insensitive title match)
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Add a recipe to favorites by ID (if not already present)
  addFavorite: (recipeId) => set((state) => ({ favorites: [...state.favorites, recipeId] })),
  // Remove a recipe from favorites by ID
  removeFavorite: (recipeId) => set((state) => ({ favorites: state.favorites.filter(id => id !== recipeId) })),

  // Generate recommendations based on favorites (mock: random subset of favorites)
  generateRecommendations: () => set((state) => {
    // In a real app, use more advanced logic (e.g., by tags, ingredients, or user history)
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));
