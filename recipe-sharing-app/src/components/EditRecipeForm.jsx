import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [editing, setEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
    setEditing(false);
  };

  if (!editing) {
    return <button onClick={() => setEditing(true)}>Edit</button>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ width: '100%', marginBottom: 8, padding: 8 }}
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        style={{ width: '100%', marginBottom: 8, padding: 8 }}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditing(false)} style={{ marginLeft: 8 }}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
