# React Todo App

A fully functional Todo List application built with React, featuring comprehensive testing with Jest and React Testing Library.

## Features

- ✅ Add new todo items
- ✅ Toggle todo completion status by clicking on them
- ✅ Delete individual todo items
- ✅ Responsive design with clean CSS styling
- ✅ Comprehensive test coverage

## Project Structure

```
react-todo/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── TodoList.js     # Main todo list component
│   │   └── AddTodoForm.js  # Form component for adding todos
│   ├── __tests__/
│   │   ├── TodoList.test.js     # TodoList component tests
│   │   └── AddTodoForm.test.js  # AddTodoForm component tests
│   ├── App.js              # Main App component
│   ├── App.css             # App styles
│   ├── index.js            # Entry point
│   ├── index.css           # Global styles
│   └── setupTests.js       # Test setup configuration
├── package.json            # Dependencies and scripts
├── jest.config.js          # Jest configuration
└── .babelrc               # Babel configuration
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd react-todo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

### Running Tests

Run all tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

## Component Details

### TodoList Component

The main component that manages the todo list state and handles:
- Displaying the list of todos
- Adding new todos via the AddTodoForm
- Toggling todo completion status
- Deleting todos

**Initial State**: Contains 3 demo todos for demonstration purposes.

### AddTodoForm Component

A controlled form component that:
- Accepts user input for new todos
- Validates input (prevents empty todos)
- Calls the parent's `onAddTodo` function
- Clears input after successful submission

## Testing Coverage

The test suite includes comprehensive tests for:

### TodoList Component Tests
- ✅ Initial render with demo todos
- ✅ Adding new todos
- ✅ Toggling todo completion
- ✅ Deleting todos
- ✅ Empty input handling
- ✅ Multiple operations workflow

### AddTodoForm Component Tests
- ✅ Component rendering
- ✅ Form submission with valid input
- ✅ Empty input validation
- ✅ Input trimming

## Technologies Used

- **React 18.2.0** - UI library
- **Jest 27.5.1** - Testing framework
- **React Testing Library 13.3.0** - React component testing utilities
- **Babel** - JavaScript compiler for ES6+ and JSX
- **CSS3** - Styling

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## License

This project is created for educational purposes as part of the ALX Frontend React.js program.