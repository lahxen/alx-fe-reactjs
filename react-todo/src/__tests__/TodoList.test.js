import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial render test
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the component renders
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  // Test 2: Adding a new todo
  test('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('add-todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    // Type a new todo
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);
    
    // Check if the new todo appears
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    // Check if input is cleared
    expect(input.value).toBe('');
  });

  // Test 3: Toggle todo completion
  test('toggles todo completion when clicked', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    const todoItem = todoText.closest('.todo-item');
    
    // Initially not completed
    expect(todoItem).not.toHaveClass('completed');
    
    // Click to toggle
    fireEvent.click(todoText);
    
    // Should now be completed
    expect(todoItem).toHaveClass('completed');
    
    // Click again to toggle back
    fireEvent.click(todoText);
    
    // Should not be completed again
    expect(todoItem).not.toHaveClass('completed');
  });

  // Test 4: Delete todo
  test('deletes todo when delete button is clicked', () => {
    render(<TodoList />);
    
    // Find the first todo and its delete button
    const todoText = screen.getByText('Learn React');
    const deleteButton = screen.getByTestId('delete-1');
    
    // Verify todo exists
    expect(todoText).toBeInTheDocument();
    
    // Click delete button
    fireEvent.click(deleteButton);
    
    // Verify todo is removed
    expect(todoText).not.toBeInTheDocument();
  });

  // Test 5: Empty input handling
  test('does not add empty todos', () => {
    render(<TodoList />);
    
    const addButton = screen.getByTestId('add-todo-button');
    const initialTodos = screen.getAllByText(/Learn React|Build a Todo App|Write Tests/);
    const initialCount = initialTodos.length;
    
    // Try to add empty todo
    fireEvent.click(addButton);
    
    // Count should remain the same
    const todosAfter = screen.getAllByText(/Learn React|Build a Todo App|Write Tests/);
    expect(todosAfter.length).toBe(initialCount);
  });

  // Test 6: Multiple operations
  test('handles multiple operations correctly', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('add-todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    // Add a new todo
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);
    
    // Verify it was added
    const newTodo = screen.getByText('Test Todo');
    expect(newTodo).toBeInTheDocument();
    
    // Toggle its completion
    fireEvent.click(newTodo);
    expect(newTodo.closest('.todo-item')).toHaveClass('completed');
    
    // Delete original todo
    const deleteButton = screen.getByTestId('delete-1');
    fireEvent.click(deleteButton);
    
    // Verify original todo is gone but new todo remains
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });
});