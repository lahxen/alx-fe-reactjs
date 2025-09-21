import React, { useState } from 'react';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
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
  );
}

export default Search;
