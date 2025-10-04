# 🎬 Movie Database App

A **professional, Netflix-inspired** movie search application built with React, TypeScript, and Vite. Search for movies, explore details, and discover your favorite films using the OMDB API with a sleek dark theme interface.

![Movie Database](https://img.shields.io/badge/React-18.0+-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0+-purple?style=flat-square&logo=vite)

## ✨ Features

- 🔍 **Smart Movie Search**: Search for movies by title with real-time results
- 🎨 **Professional Dark Theme**: Netflix-inspired clean and modern UI
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎭 **Movie Details**: Comprehensive movie information with ratings and cast
- 🖼️ **Custom Image Support**: Use your own movie posters with smart fallbacks
- ⚡ **Lightning Fast**: Built with Vite for instant hot-reload development
- � **Simple & Clean**: Professional interface focused on user experience

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Free OMDB API key

### 1. Get Your API Key

1. Visit [OMDB API](http://www.omdbapi.com/apikey.aspx)
2. Sign up for a free API key
3. Keep this key safe - you'll need it in step 3

### 2. Environment Setup

```bash
# Copy the environment template
cp .env.example .env
```

### 3. Add Your API Key

Edit the `.env` file and add your OMDB API key:

```env
VITE_OMDB_API_KEY=your_actual_api_key_here
```

### 4. Start Development Server

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## 📱 Usage

1. **Search Movies**: Enter a movie title in the search bar and press search
2. **Browse Results**: Scroll through the movie results with poster, title, and year
3. **View Details**: Click on any movie card to view detailed information
4. **Load More**: Click "Load More" to see additional search results
5. **Navigate**: Use the back button to return to search results

## 📦 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Add your environment variable `VITE_OMDB_API_KEY` in Netlify's site settings

### Vercel

1. Connect your repository to Vercel
2. Add environment variable `VITE_OMDB_API_KEY` in project settings
3. Deploy automatically on git push

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_OMDB_API_KEY` | Your OMDB API key | Yes |

## 🎨 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **OMDB API** - Movie data source

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
