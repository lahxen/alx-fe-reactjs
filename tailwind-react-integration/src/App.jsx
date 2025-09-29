import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center py-8">
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo hover:drop-shadow-lg transition-all duration-300" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react hover:drop-shadow-lg transition-all duration-300" alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Tailwind CSS UserProfile Component
        </h1>
        <p className="text-gray-600 text-lg mb-8">Styled according to specific requirements</p>
      </div>

      {/* UserProfile Component Showcase */}
      <UserProfile />

      {/* Interactive Demo Section */}
      <div className="text-center mt-12 pb-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/components/UserProfile.jsx</code> to modify the component
        </p>
        
        <div className="mt-8 max-w-2xl mx-auto bg-green-50 border-l-4 border-green-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-green-700">
                <strong>✅ Styling Requirements Applied:</strong>
                <br />• Container: bg-gray-100, p-8, max-w-sm, mx-auto, my-20, rounded-lg, shadow-lg
                <br />• Image: rounded-full, w-36, h-36, mx-auto  
                <br />• Heading: text-xl, text-blue-800, my-4
                <br />• Paragraph: text-gray-600, text-base
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
