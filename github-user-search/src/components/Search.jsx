import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

function Search() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim() && !location.trim() && !minRepos.trim()) return;
    setLoading(true);
    setError('');
    setResults([]);
    let searchQuery = query.trim();
    if (location.trim()) searchQuery += ` location:${location.trim()}`;
    if (minRepos.trim()) searchQuery += ` repos:>${minRepos.trim()}`;
    try {
      const data = await searchUsers(searchQuery);
      if (data.items && data.items.length > 0) {
        setResults(data.items);
      } else {
        setError('Looks like we cant find the user');
      }
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end bg-white p-4 rounded shadow">
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            placeholder="Search GitHub users..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium mb-1">Min Repositories</label>
          <input
            type="number"
            placeholder="Min repos"
            value={minRepos}
            onChange={e => setMinRepos(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            min="0"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Search</button>
      </form>
      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      <div className="mt-6 grid gap-4">
        {results.map(user => (
          <div key={user.id} className="flex items-center bg-gray-50 p-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-14 h-14 rounded-full mr-4" />
            <div>
              <div className="font-semibold">{user.login}</div>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View GitHub Profile</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
