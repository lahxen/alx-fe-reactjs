import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm Component', () => {
  test('renders AddTodoForm component correctly', () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    expect(screen.getByTestId('add-todo-form')).toBeInTheDocument();
    expect(screen.getByTestId('add-todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-todo-button')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
  });

  test('calls onAddTodo with input value when form is submitted', () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const input = screen.getByTestId('add-todo-input');
    const button = screen.getByTestId('add-todo-button');
    
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(button);
    
    expect(mockOnAddTodo).toHaveBeenCalledWith('New Test Todo');
    expect(input.value).toBe(''); // Input should be cleared after submission
  });

  test('does not call onAddTodo with empty input', () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const button = screen.getByTestId('add-todo-button');
    
    fireEvent.click(button);
    
    expect(mockOnAddTodo).not.toHaveBeenCalled();
  });

  test('trims whitespace from input value', () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const input = screen.getByTestId('add-todo-input');
    const button = screen.getByTestId('add-todo-button');
    
    fireEvent.change(input, { target: { value: '  Test Todo with spaces  ' } });
    fireEvent.click(button);
    
    expect(mockOnAddTodo).toHaveBeenCalledWith('Test Todo with spaces');
  });
});