import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div style={{ marginTop: 32 }}>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 && <p>No recommendations yet. Add some favorites!</p>}
      {recommendations.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: 16, padding: 8, border: '1px solid #eee', borderRadius: 6 }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
