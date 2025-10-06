import './App.css'
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-blue-500">Recipe Sharing Platform</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Recipes</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Add Recipe</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <HomePage />
      </main>
    </div>
  )
}

export default App
