# React Router Advanced Demo

This project demonstrates advanced routing techniques in React using React Router v6, including nested routes, dynamic routing, and protected routes with authentication.

## Features Implemented

### 1. Basic Routing
- **Browser Router**: Set up with `BrowserRouter` for client-side routing
- **Navigation Component**: Dynamic navigation bar with conditional rendering based on authentication state
- **Route Structure**: Clean and organized route definitions in `App.jsx`

### 2. Nested Routes
- **Profile Section**: Contains nested routes for different profile sub-sections
  - `/profile` - Profile overview (index route)
  - `/profile/details` - User profile details with editable fields
  - `/profile/settings` - Account settings and preferences
- **Implementation**: Uses `Routes` and `Route` components within the Profile component
- **Navigation**: Tab-based navigation between nested routes

### 3. Dynamic Routing
- **Blog Posts**: Dynamic routes with URL parameters (`/blog/:id`)
- **User Profiles**: Dynamic user profile routes (`/user/:userId`)
- **Parameter Extraction**: Uses `useParams()` hook to extract route parameters
- **Content Rendering**: Displays different content based on URL parameters

### 4. Protected Routes
- **Authentication Check**: Routes that require user authentication
- **Redirect Logic**: Automatically redirects unauthenticated users to login page
- **Return Navigation**: After login, users are redirected to their intended destination
- **Implementation**: Uses a `ProtectedRoute` wrapper component

### 5. Authentication System
- **Context API**: Global authentication state management
- **Login Simulation**: Simple username/password authentication (demo purposes)
- **State Persistence**: Authentication state maintained across route changes
- **Logout Functionality**: Clear authentication state and redirect

## How to Test the Features

### 1. Basic Navigation
- Use the navigation bar to move between Home, About, and other pages
- Observe URL changes and page content updates

### 2. Dynamic Routes
- Click on blog post links on the Home page (URLs like `/blog/1`, `/blog/2`)
- Click on user profile links (URLs like `/user/1`, `/user/2`)
- Notice how the same component renders different content based on URL parameters

### 3. Protected Routes
1. Try to access `/profile` without logging in - you'll be redirected to login
2. Log in with any username and password
3. You'll be redirected back to the profile page
4. Explore nested routes: Profile Details and Settings

### 4. Nested Routes
- After logging in, navigate to the Profile section
- Use the tab navigation to switch between Overview, Details, and Settings
- Notice how the URL changes (`/profile`, `/profile/details`, `/profile/settings`)

### 5. Authentication Flow
1. Click "Login" in the navigation
2. Enter any username and password
3. Observe the navigation changes (Login button becomes user name + Logout)
4. Try accessing protected routes
5. Log out and observe the redirect behavior

## Installation and Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to `http://localhost:5173`

## Technologies Used

- **React 18**: Modern React with hooks
- **React Router DOM v6**: Latest version with new API
- **Vite**: Fast build tool and development server
- **Context API**: For global state management
- **Modern JavaScript**: ES6+ features

## Authentication Note

This is a demonstration project with simulated authentication. In a real application, you would implement proper backend authentication, secure token storage, form validation, error handling, and loading states.
