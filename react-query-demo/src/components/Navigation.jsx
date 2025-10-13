import React, { useState } from 'react';
import PostsComponent from './PostsComponent';

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState('posts');

  const renderPage = () => {
    switch (currentPage) {
      case 'posts':
        return <PostsComponent />;
      case 'about':
        return (
          <div className="page-content">
            <h1>About Page</h1>
            <p>
              This is a demo page to test React Query caching behavior.
              When you navigate back to the Posts page, you'll see how
              React Query serves cached data instantly, then optionally
              refetches in the background.
            </p>
            <h2>React Query Benefits:</h2>
            <ul>
              <li><strong>Automatic Caching:</strong> Reduces API calls</li>
              <li><strong>Background Updates:</strong> Keeps data fresh</li>
              <li><strong>Loading States:</strong> Better UX</li>
              <li><strong>Error Handling:</strong> Robust error management</li>
              <li><strong>Stale While Revalidate:</strong> Shows cached data while fetching fresh data</li>
            </ul>
          </div>
        );
      case 'settings':
        return (
          <div className="page-content">
            <h1>Settings Page</h1>
            <p>
              Use this page to navigate away from Posts and test caching.
              The Posts component will unmount when you navigate here,
              and remount when you go back.
            </p>
            <div className="settings-options">
              <h3>Caching Demonstration:</h3>
              <ol>
                <li>Go to Posts page and wait for data to load</li>
                <li>Navigate to About or Settings</li>
                <li>Navigate back to Posts</li>
                <li>Notice how data appears instantly from cache</li>
                <li>Check Network tab - fewer API requests!</li>
              </ol>
            </div>
          </div>
        );
      default:
        return <PostsComponent />;
    }
  };

  return (
    <div className="app">
      <nav className="navigation">
        <div className="nav-brand">
          <h2>React Query Demo</h2>
        </div>
        <div className="nav-links">
          <button
            onClick={() => setCurrentPage('posts')}
            className={`nav-btn ${currentPage === 'posts' ? 'active' : ''}`}
          >
            Posts
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`nav-btn ${currentPage === 'about' ? 'active' : ''}`}
          >
            About
          </button>
          <button
            onClick={() => setCurrentPage('settings')}
            className={`nav-btn ${currentPage === 'settings' ? 'active' : ''}`}
          >
            Settings
          </button>
        </div>
      </nav>
      
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
};

export default Navigation;