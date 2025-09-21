import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError('');
    setUser(null);
    try {
      const data = await fetchUserData(query.trim());
      setUser(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          placeholder="Search GitHub users..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ flex: 1 }}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && !error && (
        <div style={{ marginTop: '1rem', border: '1px solid #eee', padding: '1rem', borderRadius: 8 }}>
          <img src={user.avatar_url} alt={user.login} style={{ width: 60, height: 60, borderRadius: '50%' }} />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
        </div>
      )}
    </div>
  );
}

export default Search;
