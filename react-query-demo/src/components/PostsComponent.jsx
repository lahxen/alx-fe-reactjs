import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

// Function to fetch a specific post by ID
const fetchPostById = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

function PostsComponent() {
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [showDetails, setShowDetails] = useState(false)

  // Query to fetch all posts
  const {
    data: posts,
    isLoading,
    error,
    isError,
    refetch,
    isFetching,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Keep data in cache for 10 minutes
  })

  // Query to fetch specific post details
  const {
    data: selectedPost,
    isLoading: isLoadingPost,
    error: postError,
    isError: isPostError,
  } = useQuery({
    queryKey: ['post', selectedPostId],
    queryFn: () => fetchPostById(selectedPostId),
    enabled: !!selectedPostId, // Only run when selectedPostId is truthy
  })

  const handleRefetch = () => {
    refetch()
  }

  const handlePostSelect = (postId) => {
    setSelectedPostId(postId)
    setShowDetails(true)
  }

  const handleBackToList = () => {
    setSelectedPostId(null)
    setShowDetails(false)
  }

  if (isError || error) {
    return (
      <div className="error-container">
        <h2>Error Loading Posts</h2>
        <p>{error?.message || 'An error occurred while loading posts'}</p>
        <p className="error-status">Error Status: {isError ? 'True' : 'False'}</p>
        <button onClick={handleRefetch} className="retry-btn">
          Retry
        </button>
      </div>
    )
  }

  if (showDetails && selectedPostId) {
    return (
      <div className="post-details-container">
        <div className="navigation">
          <button onClick={handleBackToList} className="back-btn">
            ← Back to Posts
          </button>
        </div>
        
        {isLoadingPost ? (
          <div className="loading">Loading post details...</div>
        ) : isPostError || postError ? (
          <div className="error">
            <p>Error loading post: {postError?.message || 'An error occurred'}</p>
            <p className="error-status">Post Error Status: {isPostError ? 'True' : 'False'}</p>
          </div>
        ) : selectedPost ? (
          <div className="post-details">
            <h2>Post #{selectedPost.id}</h2>
            <h3>{selectedPost.title}</h3>
            <p>{selectedPost.body}</p>
            <small>User ID: {selectedPost.userId}</small>
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h2>Posts from JSONPlaceholder API</h2>
        <div className="controls">
          <button 
            onClick={handleRefetch} 
            disabled={isFetching}
            className="refetch-btn"
          >
            {isFetching ? 'Refreshing...' : 'Refresh Posts'}
          </button>
        </div>
        {dataUpdatedAt && (
          <p className="last-updated">
            Last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
          </p>
        )}
      </div>

      {isLoading ? (
        <div className="loading">
          <p>Loading posts...</p>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="posts-grid">
          {posts?.slice(0, 10).map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p className="post-preview">
                {post.body.substring(0, 100)}
                {post.body.length > 100 ? '...' : ''}
              </p>
              <div className="post-meta">
                <span>Post #{post.id}</span>
                <span>User #{post.userId}</span>
              </div>
              <button 
                onClick={() => handlePostSelect(post.id)}
                className="view-details-btn"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="cache-info">
        <h3>React Query Features Demonstrated:</h3>
        <ul>
          <li>✅ Automatic caching - Navigate away and back to see cached data</li>
          <li>✅ Background refetching - Data updates automatically when stale</li>
          <li>✅ Loading states - See spinners during data fetching</li>
          <li>✅ Error handling - Network errors are gracefully handled</li>
          <li>✅ Manual refetch - Use the refresh button to update data</li>
          <li>✅ Dependent queries - Post details only load when selected</li>
        </ul>
      </div>
    </div>
  )
}

export default PostsComponent