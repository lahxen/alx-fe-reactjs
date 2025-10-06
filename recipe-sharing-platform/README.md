# Recipe Sharing Platform

A modern web application built with React and Tailwind CSS for sharing and discovering recipes.

## Features

- ✅ **Home Page** - Browse featured recipes with beautiful grid layout
- ✅ **Recipe Cards** - Interactive cards with hover effects and metadata
- ✅ **Search & Filter** - Find recipes by title, ingredients, or categories
- ✅ **Loading States** - Skeleton loading for better user experience
- ✅ **Responsive Design** - Optimized for desktop, tablet, and mobile
- ✅ **Real Images** - High-quality Unsplash images for recipes
- 📖 **Recipe Details** - View detailed recipe information (Coming Soon)
- ➕ **Add Recipe** - Submit new recipes to share (Coming Soon)

## Tech Stack

- **React** - Frontend library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd recipe-sharing-platform
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── RecipeCard.jsx   # Individual recipe display card
│   ├── RecipeCardSkeleton.jsx  # Loading skeleton for recipe cards
│   └── SearchBar.jsx    # Search and filter functionality
├── pages/               # Page components
│   └── HomePage.jsx     # Main home page with recipe grid
├── data/                # Mock data and API utilities
│   ├── mockRecipes.js   # Extended mock data with detailed recipes
│   └── data.json        # Simple JSON data for recipes
├── App.jsx              # Main application component with navigation
├── main.jsx             # Application entry point
├── App.css              # Custom CSS classes and utilities
└── index.css            # Global styles with Tailwind directives
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Components Built

### HomePage (`src/pages/HomePage.jsx`)
- Hero section with gradient background
- Search and filter functionality
- Recipe grid with responsive layout
- Loading states with skeleton components
- Empty states with helpful messaging

### RecipeCard (`src/components/RecipeCard.jsx`)
- Interactive hover effects and animations
- Image loading states and error handling
- Recipe metadata display (prep time, servings)
- Action buttons (view details, favorite, share)
- Responsive design with Tailwind CSS

### SearchBar (`src/components/SearchBar.jsx`)
- Real-time search functionality
- Category filtering dropdown
- Clear filters functionality
- Responsive input fields

### RecipeCardSkeleton (`src/components/RecipeCardSkeleton.jsx`)
- Animated loading placeholders
- Matches actual card layout
- Improves perceived performance

## Data Structure

The application uses JSON data with the following recipe structure:

```json
{
  "id": 1,
  "title": "Recipe Name",
  "summary": "Brief description of the recipe",
  "image": "https://image-url.com/recipe.jpg"
}
```

## Next Steps

1. ✅ ~~Create recipe list component~~
2. ✅ ~~Implement search and filtering functionality~~
3. Add React Router for navigation
4. Implement recipe detail view
5. Build recipe submission form
6. Add user authentication
7. Implement favorites functionality
8. Add recipe rating system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
