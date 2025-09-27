import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import { searchUsers } from './services/githubApi';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const data = await searchUsers(query);
      setResults(data.items || []);
    } catch (err) {
      setError('Failed to fetch users.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
        <h1>GitHub User Search</h1>
        <Search onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results.map(user => (
            <li key={user.id} style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
              <img src={user.avatar_url} alt={user.login} style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 12 }} />
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
            </li>
          ))}
        </ul>
      </div>
    </Router>
  );
}

export default App;
