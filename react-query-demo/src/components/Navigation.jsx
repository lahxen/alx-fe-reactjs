import { useState } from 'react'
import PostsComponent from './PostsComponent'
import CacheDemo from './CacheDemo'
import QueryTest from './QueryTest'

function Navigation() {
  const [currentView, setCurrentView] = useState('posts')

  const renderCurrentView = () => {
    switch (currentView) {
      case 'posts':
        return <PostsComponent />
      case 'cache-demo':
        return <CacheDemo />
      case 'query-test':
        return <QueryTest />
      default:
        return <PostsComponent />
    }
  }

  return (
    <div className="navigation-container">
      <nav className="main-navigation">
        <h2>React Query Demo Navigation</h2>
        <div className="nav-buttons">
          <button 
            className={`nav-btn ${currentView === 'posts' ? 'active' : ''}`}
            onClick={() => setCurrentView('posts')}
          >
            Posts List
          </button>
          <button 
            className={`nav-btn ${currentView === 'cache-demo' ? 'active' : ''}`}
            onClick={() => setCurrentView('cache-demo')}
          >
            Cache Demo
          </button>
          <button 
            className={`nav-btn ${currentView === 'query-test' ? 'active' : ''}`}
            onClick={() => setCurrentView('query-test')}
          >
            Query Tests
          </button>
        </div>
        <p className="nav-description">
          Navigate between components to see how React Query maintains cache across components
        </p>
      </nav>
      
      <div className="view-container">
        {renderCurrentView()}
      </div>
    </div>
  )
}

export default Navigation