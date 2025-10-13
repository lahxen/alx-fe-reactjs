import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

// Function to fetch users from JSONPlaceholder API
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

// Function to fetch posts (same as PostsComponent for cache demonstration)
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

function CacheDemo() {
  const queryClient = useQueryClient()
  const [showCacheInfo, setShowCacheInfo] = useState(true)

  // Query for users
  const {
    data: users,
    isLoading: isLoadingUsers,
    error: usersError,
    refetch: refetchUsers,
    isFetching: isFetchingUsers,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  // Query for posts (same query key as PostsComponent)
  const {
    data: posts,
    isLoading: isLoadingPosts,
    error: postsError,
    refetch: refetchPosts,
    isFetching: isFetchingPosts,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  // Get cache data manually
  const handleGetCacheData = () => {
    const cachedPosts = queryClient.getQueryData(['posts'])
    const cachedUsers = queryClient.getQueryData(['users'])
    
    console.log('Cached Posts:', cachedPosts)
    console.log('Cached Users:', cachedUsers)
    
    alert(`
Cache Status:
- Posts in cache: ${cachedPosts ? 'Yes' : 'No'} (${cachedPosts?.length || 0} items)
- Users in cache: ${cachedUsers ? 'Yes' : 'No'} (${cachedUsers?.length || 0} items)

Check console for full data.
    `)
  }

  // Invalidate specific queries
  const handleInvalidateQueries = async (queryKey) => {
    await queryClient.invalidateQueries({ queryKey })
    console.log(`Invalidated queries with key: ${queryKey}`)
  }

  // Clear all cache
  const handleClearCache = () => {
    queryClient.clear()
    console.log('All cache cleared')
  }

  // Prefetch data
  const handlePrefetchData = async () => {
    try {
      await queryClient.prefetchQuery({
        queryKey: ['prefetched-posts'],
        queryFn: fetchPosts,
        staleTime: 10 * 60 * 1000, // 10 minutes
      })
      console.log('Data prefetched successfully')
      alert('Posts data prefetched! Check React Query DevTools.')
    } catch (error) {
      console.error('Prefetch failed:', error)
    }
  }

  return (
    <div className="cache-demo-container">
      <div className="cache-demo-header">
        <h2>React Query Cache Demonstration</h2>
        <p>This component demonstrates advanced React Query caching features</p>
      </div>

      <div className="cache-controls">
        <h3>Cache Management</h3>
        <div className="control-buttons">
          <button onClick={handleGetCacheData} className="cache-btn primary">
            Check Cache Status
          </button>
          <button 
            onClick={() => handleInvalidateQueries(['posts'])} 
            className="cache-btn warning"
          >
            Invalidate Posts Cache
          </button>
          <button 
            onClick={() => handleInvalidateQueries(['users'])} 
            className="cache-btn warning"
          >
            Invalidate Users Cache
          </button>
          <button onClick={handlePrefetchData} className="cache-btn info">
            Prefetch Posts Data
          </button>
          <button onClick={handleClearCache} className="cache-btn danger">
            Clear All Cache
          </button>
        </div>
      </div>

      <div className="data-sections">
        <div className="data-section">
          <div className="section-header">
            <h3>Posts Data (Shared with Posts Component)</h3>
            <button 
              onClick={refetchPosts} 
              disabled={isFetchingPosts}
              className="refetch-small-btn"
            >
              {isFetchingPosts ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
          
          {isLoadingPosts ? (
            <div className="loading-small">Loading posts...</div>
          ) : postsError ? (
            <div className="error-small">Error: {postsError.message}</div>
          ) : (
            <div className="data-preview">
              <p>Loaded {posts?.length || 0} posts</p>
              <small>
                Navigate to Posts List component to see that this data is cached and loads instantly
              </small>
            </div>
          )}
        </div>

        <div className="data-section">
          <div className="section-header">
            <h3>Users Data</h3>
            <button 
              onClick={refetchUsers} 
              disabled={isFetchingUsers}
              className="refetch-small-btn"
            >
              {isFetchingUsers ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
          
          {isLoadingUsers ? (
            <div className="loading-small">Loading users...</div>
          ) : usersError ? (
            <div className="error-small">Error: {usersError.message}</div>
          ) : (
            <div className="users-list">
              {users?.slice(0, 5).map((user) => (
                <div key={user.id} className="user-item">
                  <strong>{user.name}</strong> ({user.username})
                  <br />
                  <small>{user.email} • {user.phone}</small>
                </div>
              ))}
              {users?.length > 5 && (
                <p className="more-items">... and {users.length - 5} more users</p>
              )}
            </div>
          )}
        </div>
      </div>

      {showCacheInfo && (
        <div className="cache-explanation">
          <div className="explanation-header">
            <h3>🧠 How React Query Caching Works</h3>
            <button 
              onClick={() => setShowCacheInfo(false)}
              className="close-btn"
            >
              ×
            </button>
          </div>
          <div className="explanation-content">
            <div className="feature-explanation">
              <h4>🔄 Automatic Caching</h4>
              <p>
                React Query automatically caches query results. When you navigate between 
                components that use the same query key, data loads instantly from cache.
              </p>
            </div>
            
            <div className="feature-explanation">
              <h4>⚡ Background Updates</h4>
              <p>
                When cached data becomes stale, React Query refetches it in the background 
                while showing cached data, ensuring users see content immediately.
              </p>
            </div>
            
            <div className="feature-explanation">
              <h4>🎯 Smart Invalidation</h4>
              <p>
                You can invalidate specific queries or all queries. Invalidated queries 
                will refetch when next accessed or immediately if currently active.
              </p>
            </div>
            
            <div className="feature-explanation">
              <h4>🚀 Prefetching</h4>
              <p>
                Prefetch data before it's needed to provide instant loading experiences. 
                Great for predictable user navigation patterns.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="dev-tools-info">
        <h4>🛠 Developer Tools</h4>
        <p>
          Open React Query DevTools (floating icon) to inspect cache state, 
          query statuses, and watch real-time cache updates.
        </p>
      </div>
    </div>
  )
}

export default CacheDemo