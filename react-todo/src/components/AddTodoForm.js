import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue.trim());
      setInputValue(''); // Clear the input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form" data-testid="add-todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        data-testid="add-todo-input"
      />
      <button type="submit" data-testid="add-todo-button">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;