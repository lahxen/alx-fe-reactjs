import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-blue-500">Recipe Sharing Platform</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Recipes</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Add Recipe</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Recipe Sharing Platform
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover, share, and create amazing recipes with our community
          </p>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <p className="text-gray-700">
              Your recipe sharing platform is ready! Start building amazing features like recipe browsing, detailed views, and recipe submission forms.
            </p>
            <div className="mt-4 p-3 bg-blue-50 rounded-md">
              <p className="text-blue-700 font-medium">✅ Tailwind CSS Integration Test: This blue styling confirms Tailwind is working!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
