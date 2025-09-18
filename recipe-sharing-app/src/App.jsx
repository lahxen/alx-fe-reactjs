

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';


function App() {
  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', padding: '1rem', border: '1px solid #eee', borderRadius: 8 }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <h2>Recipes</h2>
      <RecipeList />
    </div>
  );
}

export default App;
