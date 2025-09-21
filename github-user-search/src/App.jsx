import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
        <h1>GitHub User Search</h1>
        {/* Add navigation or header here if needed */}
        <Routes>
          {/* Add routes for pages/components here */}
          <Route path="/" element={<div>Welcome! Start searching for GitHub users.</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
