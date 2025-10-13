import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Write Initial Render Test: Verify that the TodoList component renders correctly
  // Ensure that the initial state (a few demo todos) is rendered
  test('renders TodoList component correctly', () => {
    render(<TodoList />);
    
    // Check if the component renders
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
    
    // Ensure that the initial state (a few demo todos) is rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  // Test Adding Todos: Write a test to verify that a new todo can be added
  // Use fireEvent to simulate user input and form submission
  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('add-todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    // Use fireEvent to simulate user input and form submission
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);
    
    // Verify that a new todo can be added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  // Test Toggling Todos: Write a test to verify that a todo item can be toggled 
  // between completed and not completed
  test('toggles todo completion', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    
    // Initially not completed (no line-through)
    expect(todoText).toHaveStyle('text-decoration: none');
    
    // Click to toggle
    fireEvent.click(todoText);
    
    // Should now be completed (line-through)
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back
    fireEvent.click(todoText);
    
    // Should not be completed again
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  // Test Deleting Todos: Write a test to verify that a todo item can be deleted
  test('deletes todo', () => {
    render(<TodoList />);
    
    // Find the first todo and its delete button
    const todoText = screen.getByText('Learn React');
    const deleteButton = screen.getByTestId('delete-1');
    
    // Verify todo exists
    expect(todoText).toBeInTheDocument();
    
    // Click delete button to verify that a todo item can be deleted
    fireEvent.click(deleteButton);
    
    // Verify todo is removed
    expect(todoText).not.toBeInTheDocument();
  });
});