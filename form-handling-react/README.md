# Form Handling in React

This project demonstrates form handling in React using two different approaches:
1. **Controlled Components** - Manual state management with React's useState
2. **Formik** - Advanced form handling with built-in validation

## Project Structure

```
src/
├── components/
│   ├── RegistrationForm.jsx    # Controlled components implementation
│   ├── formikForm.js          # Formik implementation
│   └── forms.css              # Shared styles for both forms
├── App.jsx                    # Main application component
├── App.css                    # Application styles
└── main.jsx                   # Application entry point
```

## Features Implemented

### 1. Controlled Components (RegistrationForm.jsx)
- **Manual State Management**: Uses React's `useState` to manage form data
- **Custom Validation**: Implements validation logic with error state management
- **Form Fields**: Username, Email, and Password inputs
- **Error Handling**: Displays validation errors and API errors
- **API Integration**: Mock API call using fetch to JSONPlaceholder

### 2. Formik Implementation (formikForm.js)
- **Formik Integration**: Uses Formik's built-in state management
- **Yup Validation**: Advanced validation schema with custom rules
- **Form Components**: Uses Formik's Field, Form, and ErrorMessage components
- **Enhanced Validation**: More sophisticated password validation rules
- **Loading States**: Shows loading state during form submission

## Validation Rules

### Controlled Components
- Username: Required, not empty
- Email: Required, valid email format
- Password: Required, minimum 6 characters

### Formik Form
- Username: Required, 3-20 characters
- Email: Required, valid email format
- Password: Required, minimum 6 characters, must contain uppercase, lowercase, and number

## Installation and Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173`

## Dependencies

- **React**: ^18.3.1
- **Formik**: ^2.4.6
- **Yup**: ^1.4.0
- **Vite**: ^6.0.1 (dev dependency)

## Key Differences Between Approaches

| Feature | Controlled Components | Formik |
|---------|----------------------|---------|
| State Management | Manual useState | Built-in Formik state |
| Validation | Custom validation functions | Yup schema validation |
| Error Handling | Manual error state | Automatic error handling |
| Form Reset | Manual state reset | Built-in resetForm method |
| Loading States | Manual implementation | Built-in isSubmitting |
| Code Complexity | More boilerplate | Less boilerplate |

## API Integration

Both forms simulate user registration by making a POST request to:
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: POST
- **Content-Type**: application/json

The API call is mocked using JSONPlaceholder for demonstration purposes. In a real application, you would replace this with your actual registration API endpoint.

## Styling

The forms are styled with a clean, responsive design that includes:
- Form containers with cards styling
- Input field focus states
- Error message styling
- Success/error status messages
- Responsive layout for both desktop and mobile

## Usage

1. **Try the Controlled Components form** (left side):
   - Fill in the form fields
   - See basic validation in action
   - Submit to see console output

2. **Try the Formik form** (right side):
   - Experience enhanced validation
   - Notice the more sophisticated password requirements
   - Observe the loading state during submission

Both forms demonstrate different approaches to form handling in React, showcasing the evolution from manual state management to using specialized libraries like Formik for more complex scenarios.
