import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)} style={{ color: 'white', background: 'red', marginLeft: 8 }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
