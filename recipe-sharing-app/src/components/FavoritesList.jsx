import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean));

  return (
    <div style={{ marginTop: 32 }}>
      <h2>My Favorites</h2>
      {favorites.length === 0 && <p>No favorite recipes yet.</p>}
      {favorites.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: 16, padding: 8, border: '1px solid #eee', borderRadius: 6 }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
