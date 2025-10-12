import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import PostsComponent from './components/PostsComponent';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="text-2xl font-bold text-blue-500 hover:text-blue-600 transition-colors duration-200">
                Recipe Sharing Platform
              </Link>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/posts" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Posts Demo
                    </Link>
                  </li>
                  <li>
                    <Link to="/add-recipe" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                      Add Recipe
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
            <Route path="/posts" element={<PostsComponent />} />
          </Routes>
        </main>
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
