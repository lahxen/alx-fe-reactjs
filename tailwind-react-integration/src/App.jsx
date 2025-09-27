import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center gap-8 mb-6">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo hover:drop-shadow-lg transition-all duration-300" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react hover:drop-shadow-lg transition-all duration-300" alt="React logo" />
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Vite + React + Tailwind CSS
          </h1>
          <p className="text-gray-600 text-lg">Showcasing UserProfile Component with Tailwind Styling</p>
        </div>

        {/* UserProfile Showcase Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            í³‹ UserProfile Component Demo
          </h2>
          <div className="flex justify-center">
            <UserProfile />
          </div>
        </div>

        {/* Interactive Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-6">Interactive Demo</h3>
          <div className="text-center">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Count is {count}
            </button>
            <p className="mt-4 text-gray-600">
              Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/App.jsx</code> and save to test HMR
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            Click on the Vite and React logos to learn more
          </p>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 border-l-4 border-green-500 p-4 rounded-r-lg shadow-sm">
            <p className="font-bold text-green-700">âœ… Tailwind CSS Integration Complete</p>
            <p className="text-green-600">UserProfile component styled with responsive Tailwind utilities!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
