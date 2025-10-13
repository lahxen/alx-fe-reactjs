import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm Component', () => {
  test('renders form with input and button', () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    expect(screen.getByTestId('add-todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-todo-button')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
  });

  test('calls onAddTodo when form is submitted with valid input', () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const input = screen.getByTestId('add-todo-input');
    const button = screen.getByTestId('add-todo-button');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);
    
    expect(mockOnAddTodo).toHaveBeenCalledWith('New Todo');
    expect(input.value).toBe('');
  });

  test('does not call onAddTodo with empty input', () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const button = screen.getByTestId('add-todo-button');
    
    fireEvent.click(button);
    
    expect(mockOnAddTodo).not.toHaveBeenCalled();
  });

  test('trims whitespace from input', () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const input = screen.getByTestId('add-todo-input');
    const button = screen.getByTestId('add-todo-button');
    
    fireEvent.change(input, { target: { value: '  Spaced Todo  ' } });
    fireEvent.click(button);
    
    expect(mockOnAddTodo).toHaveBeenCalledWith('  Spaced Todo  ');
    expect(input.value).toBe('');
  });
});