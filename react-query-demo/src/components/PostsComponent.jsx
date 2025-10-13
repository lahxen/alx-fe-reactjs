import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

// API function to fetch posts
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const queryClient = useQueryClient();

  // Using React Query to fetch posts
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes - data stays fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes - cache persists for 10 minutes
  });

  // Function to manually trigger refetch
  const handleRefetch = () => {
    refetch();
  };

  // Function to invalidate and refetch
  const handleInvalidateAndRefetch = () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  };

  // Function to clear cache
  const handleClearCache = () => {
    queryClient.removeQueries({ queryKey: ['posts'] });
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-container">
        <h2>Error fetching posts</h2>
        <p>Error: {error.message}</p>
        <button onClick={handleRefetch} className="retry-btn">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <div className="header">
        <h1>Posts from JSONPlaceholder API</h1>
        <div className="cache-info">
          <p>
            <strong>Data last updated:</strong>{' '}
            {new Date(dataUpdatedAt).toLocaleTimeString()}
          </p>
          <p>
            <strong>Status:</strong>{' '}
            {isFetching ? 'Fetching...' : 'Data loaded from cache'}
          </p>
        </div>
      </div>

      <div className="controls">
        <button
          onClick={handleRefetch}
          disabled={isFetching}
          className="action-btn primary"
        >
          {isFetching ? 'Refetching...' : 'Refetch Data'}
        </button>
        <button
          onClick={handleInvalidateAndRefetch}
          disabled={isFetching}
          className="action-btn secondary"
        >
          Invalidate & Refetch
        </button>
        <button
          onClick={handleClearCache}
          disabled={isFetching}
          className="action-btn danger"
        >
          Clear Cache
        </button>
      </div>

      <div className="posts-grid">
        {posts?.slice(0, 20).map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <span className="post-id">#{post.id}</span>
              <span className="user-id">User {post.userId}</span>
            </div>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>

      <div className="footer">
        <p>Showing {posts?.length} posts total (displaying first 20)</p>
        <p>
          <em>
            Navigate away and come back to see caching in action! 
            Check Network tab in DevTools to see reduced API calls.
          </em>
        </p>
      </div>
    </div>
  );
};

export default PostsComponent;