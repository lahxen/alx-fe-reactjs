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
      <div className="text-center py-8 px-4">
        <div className="flex justify-center gap-4 md:gap-8 mb-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo hover:drop-shadow-lg transition-all duration-300" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react hover:drop-shadow-lg transition-all duration-300" alt="React logo" />
          </a>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Responsive UserProfile Component
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">Built with Tailwind CSS responsive utilities</p>
      </div>

      {/* UserProfile Component Showcase */}
      <UserProfile />

      {/* Responsive Features Info */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Container Responsiveness */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <h3 className="font-bold text-blue-800 mb-2">Ì≥± Container</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>‚Ä¢ <code>p-4</code> on small screens</li>
              <li>‚Ä¢ <code>md:p-8</code> on medium+ screens</li>
              <li>‚Ä¢ <code>max-w-xs</code> on small screens</li>
              <li>‚Ä¢ <code>md:max-w-sm</code> on medium+ screens</li>
            </ul>
          </div>

          {/* Typography Responsiveness */}
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h3 className="font-bold text-green-800 mb-2">Ì≥ù Typography</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>‚Ä¢ Heading: <code>text-lg</code> ‚Üí <code>md:text-xl</code></li>
              <li>‚Ä¢ Paragraph: <code>text-sm</code> ‚Üí <code>md:text-base</code></li>
              <li>‚Ä¢ Better readability across devices</li>
            </ul>
          </div>

          {/* Image Responsiveness */}
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
            <h3 className="font-bold text-purple-800 mb-2">Ì∂ºÔ∏è Image</h3>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>‚Ä¢ <code>w-24 h-24</code> on small screens</li>
              <li>‚Ä¢ <code>md:w-36 md:h-36</code> on medium+ screens</li>
              <li>‚Ä¢ Scales appropriately with viewport</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="text-center mt-12 pb-8 px-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/components/UserProfile.jsx</code> to modify the component
        </p>
        
        <div className="mt-8 max-w-2xl mx-auto bg-gradient-to-r from-green-100 to-blue-100 border-l-4 border-green-500 p-4 rounded-r-lg shadow-sm">
          <div className="text-left">
            <p className="text-sm text-green-700">
              <strong>‚úÖ Responsive Design Applied:</strong>
            </p>
            <div className="mt-2 space-y-1 text-xs md:text-sm text-green-600">
              <p>Ì≥± <strong>Mobile-first approach</strong> with responsive breakpoints</p>
              <p>Ì¥ß <strong>Adaptive padding:</strong> p-4 ‚Üí md:p-8</p>
              <p>Ì≥è <strong>Dynamic width:</strong> max-w-xs ‚Üí md:max-w-sm</p>
              <p>Ìæ® <strong>Scalable typography:</strong> text-lg ‚Üí md:text-xl</p>
              <p>Ì≥∏ <strong>Responsive images:</strong> w-24 h-24 ‚Üí md:w-36 h-36</p>
            </div>
          </div>
        </div>

        {/* Breakpoint Indicator */}
        <div className="mt-6 text-sm text-gray-500">
          <p>Current breakpoint: 
            <span className="md:hidden font-semibold text-blue-600"> Mobile (&lt; 768px)</span>
            <span className="hidden md:inline lg:hidden font-semibold text-green-600"> Medium (768px+)</span>
            <span className="hidden lg:inline font-semibold text-purple-600"> Large (1024px+)</span>
          </p>
          <p className="mt-1 text-xs">Resize your browser to see responsive changes!</p>
        </div>
      </div>
    </div>
  )
}

export default App
