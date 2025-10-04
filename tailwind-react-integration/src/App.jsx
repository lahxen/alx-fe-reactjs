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
          Interactive UserProfile Component
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">Enhanced with Tailwind CSS hover effects and transitions</p>
      </div>

      {/* Interaction Instructions */}
      <div className="max-w-2xl mx-auto px-4 mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-blue-800 mb-4 text-center">ÌæØ Try These Interactions!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-2">Ì∂ºÔ∏è</div>
              <p className="font-semibold text-blue-700">Hover over the profile image</p>
              <p className="text-gray-600">Watch it scale up smoothly</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">Ì≥ù</div>
              <p className="font-semibold text-green-700">Hover over the name</p>
              <p className="text-gray-600">See the color transition</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">Ì≤≥</div>
              <p className="font-semibold text-purple-700">Hover over the card</p>
              <p className="text-gray-600">Notice the shadow lift effect</p>
            </div>
          </div>
        </div>
      </div>

      {/* UserProfile Component Showcase */}
      <UserProfile />

      {/* Interactive Features Info */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-8">Ìæ® Interactive Features Implemented</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Image Hover Effects */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <h3 className="font-bold text-blue-800 mb-2">Ì∂ºÔ∏è Image Interactions</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>‚Ä¢ <code>hover:scale-110</code> - Grows 10% on hover</li>
              <li>‚Ä¢ <code>transition-transform</code> - Smooth scaling</li>
              <li>‚Ä¢ <code>duration-300</code> - 300ms animation</li>
              <li>‚Ä¢ <code>ease-in-out</code> - Natural easing</li>
              <li>‚Ä¢ <code>cursor-pointer</code> - Interactive cursor</li>
            </ul>
          </div>

          {/* Text Hover Effects */}
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h3 className="font-bold text-green-800 mb-2">Ì≥ù Text Interactions</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>‚Ä¢ <code>hover:text-blue-500</code> - Color change</li>
              <li>‚Ä¢ <code>transition-colors</code> - Smooth color transition</li>
              <li>‚Ä¢ <code>duration-300</code> - 300ms animation</li>
              <li>‚Ä¢ <code>ease-in-out</code> - Natural easing</li>
              <li>‚Ä¢ <code>cursor-pointer</code> - Interactive cursor</li>
            </ul>
          </div>

          {/* Card Hover Effects */}
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
            <h3 className="font-bold text-purple-800 mb-2">Ì≤≥ Card Interactions</h3>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>‚Ä¢ <code>hover:shadow-xl</code> - Enhanced shadow</li>
              <li>‚Ä¢ <code>transition-shadow</code> - Smooth shadow transition</li>
              <li>‚Ä¢ <code>duration-300</code> - 300ms animation</li>
              <li>‚Ä¢ <code>ease-in-out</code> - Natural easing</li>
              <li>‚Ä¢ Creates "lifting" effect</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="text-center mt-12 pb-8 px-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 hover:scale-105 transform"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/components/UserProfile.jsx</code> to modify interactions
        </p>
        
        <div className="mt-8 max-w-2xl mx-auto bg-gradient-to-r from-green-100 to-blue-100 border-l-4 border-green-500 p-4 rounded-r-lg shadow-sm">
          <div className="text-left">
            <p className="text-sm text-green-700">
              <strong>‚úÖ Advanced Interactivity Added:</strong>
            </p>
            <div className="mt-2 space-y-1 text-xs md:text-sm text-green-600">
              <p>ÌæØ <strong>Image scaling:</strong> hover:scale-110 with smooth transitions</p>
              <p>Ìæ® <strong>Text color change:</strong> hover:text-blue-500 on heading</p>
              <p>Ì≤´ <strong>Enhanced shadows:</strong> hover:shadow-xl on card container</p>
              <p>‚ö° <strong>Smooth animations:</strong> 300ms duration with ease-in-out</p>
              <p>Ì±Ü <strong>Interactive cursors:</strong> Clear visual feedback for users</p>
            </div>
          </div>
        </div>

        {/* Animation Performance Note */}
        <div className="mt-6 text-sm text-gray-500 max-w-lg mx-auto">
          <p className="font-semibold mb-2">Ì∫Ä Performance Optimized</p>
          <p className="text-xs leading-relaxed">
            All transitions use GPU-accelerated properties (transform, opacity, box-shadow) for smooth 60fps animations. 
            Tailwind's built-in transitions ensure consistent performance across all devices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
