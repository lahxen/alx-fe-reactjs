import React, { useState } from 'react';

const TodoList = () => {
  // Initialize the component state with a few todos for demonstration
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write Tests', completed: false }
  ]);

  // Method for adding todos
  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Method for toggling todos
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Method for deleting todos
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    addTodo(input.value);
    input.value = '';
  };

  return (
    <div>
      <h1>Todo List</h1>
      
      {/* Add Todo Form */}
      <form onSubmit={handleSubmit} data-testid="add-todo-form">
        <input
          type="text"
          placeholder="Add a new todo..."
          data-testid="add-todo-input"
        />
        <button type="submit" data-testid="add-todo-button">
          Add Todo
        </button>
      </form>

      {/* Todo List */}
      <div data-testid="todo-list">
        {todos.map(todo => (
          <div
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            data-testid={`todo-${todo.id}`}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{ 
                cursor: 'pointer', 
                textDecoration: todo.completed ? 'line-through' : 'none' 
              }}
              data-testid={`todo-text-${todo.id}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              data-testid={`delete-${todo.id}`}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;