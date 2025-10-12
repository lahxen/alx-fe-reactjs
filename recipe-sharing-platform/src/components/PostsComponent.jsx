import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

// Fetch function for posts
const fetchPosts = async () => {
  console.log('🚀 Fetching posts from API...'); // Debug log to track API calls
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const posts = await response.json();
  
  // Add timestamp to track when data was fetched
  const postsWithTimestamp = posts.map(post => ({
    ...post,
    fetchedAt: new Date().toISOString()
  }));
  
  console.log(`✅ Fetched ${posts.length} posts at ${new Date().toLocaleTimeString()}`);
  return postsWithTimestamp;
};

// Individual post fetch function for detailed view
const fetchPost = async (postId) => {
  console.log(`🚀 Fetching post ${postId} from API...`);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const post = await response.json();
  console.log(`✅ Fetched post ${postId} at ${new Date().toLocaleTimeString()}`);
  return post;
};

const PostsComponent = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [showCacheInfo, setShowCacheInfo] = useState(false);
  const queryClient = useQueryClient();

  // Query for all posts
  const { 
    data: posts = [], 
    isLoading, 
    isError, 
    error,
    isFetching,
    dataUpdatedAt,
    refetch
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 30 * 1000, // 30 seconds - shorter for demo purposes
    cacheTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true, // Enable for demo
  });

  // Query for selected post (only runs when selectedPostId is set)
  const { 
    data: selectedPost, 
    isLoading: isLoadingPost,
    isError: isPostError 
  } = useQuery({
    queryKey: ['post', selectedPostId],
    queryFn: () => fetchPost(selectedPostId),
    enabled: !!selectedPostId, // Only run when selectedPostId exists
    staleTime: 30 * 1000,
    cacheTime: 5 * 60 * 1000,
  });

  // Manual refetch function
  const handleRefetch = () => {
    console.log('🔄 Manual refetch triggered');
    refetch();
  };

  // Invalidate and refetch
  const handleInvalidateAndRefetch = () => {
    console.log('❌ Invalidating cache and refetching');
    queryClient.invalidateQueries(['posts']);
  };

  // Prefetch a post
  const handlePrefetchPost = (postId) => {
    queryClient.prefetchQuery({
      queryKey: ['post', postId],
      queryFn: () => fetchPost(postId),
      staleTime: 30 * 1000,
    });
    console.log(`🎯 Prefetched post ${postId}`);
  };

  // Get cache information
  const getCacheInfo = () => {
    const queryCache = queryClient.getQueryCache();
    const allQueries = queryCache.getAll();
    const postsQuery = queryCache.find(['posts']);
    
    return {
      totalQueries: allQueries.length,
      postsQueryState: postsQuery?.state.status,
      lastFetched: postsQuery ? new Date(postsQuery.state.dataUpdatedAt).toLocaleTimeString() : 'Never',
      cacheSize: allQueries.reduce((acc, query) => acc + (query.state.data ? 1 : 0), 0)
    };
  };

  const cacheInfo = getCacheInfo();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Posts Component</h1>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading posts from API...
            </div>
          </div>
          
          {/* Loading Skeletons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            <h2 className="font-bold text-lg mb-2">Error Loading Posts</h2>
            <p>Failed to fetch posts: {error?.message}</p>
            <button 
              onClick={handleRefetch}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Posts Component - React Query Demo
              </h1>
              <p className="text-gray-600">
                Demonstrating data fetching, caching, and updating with React Query
              </p>
            </div>
            
            {/* Status Indicator */}
            <div className="flex items-center space-x-2 mt-4 lg:mt-0">
              {isFetching && (
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Fetching...
                </div>
              )}
              <div className="text-sm text-gray-500">
                Last updated: {new Date(dataUpdatedAt).toLocaleTimeString()}
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={handleRefetch}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refetch Data
            </button>
            
            <button
              onClick={handleInvalidateAndRefetch}
              className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Invalidate Cache
            </button>
            
            <button
              onClick={() => setShowCacheInfo(!showCacheInfo)}
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {showCacheInfo ? 'Hide' : 'Show'} Cache Info
            </button>
          </div>

          {/* Cache Information Panel */}
          {showCacheInfo && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">React Query Cache Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white p-3 rounded">
                  <div className="text-gray-500">Total Queries</div>
                  <div className="text-xl font-bold text-blue-600">{cacheInfo.totalQueries}</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="text-gray-500">Posts Query Status</div>
                  <div className="text-xl font-bold text-green-600">{cacheInfo.postsQueryState}</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="text-gray-500">Last Fetched</div>
                  <div className="text-xl font-bold text-purple-600">{cacheInfo.lastFetched}</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="text-gray-500">Cached Queries</div>
                  <div className="text-xl font-bold text-orange-600">{cacheInfo.cacheSize}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Selected Post Detail */}
        {selectedPostId && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Post Detail (ID: {selectedPostId})</h2>
              <button
                onClick={() => setSelectedPostId(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {isLoadingPost ? (
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            ) : isPostError ? (
              <div className="text-red-600">Error loading post details</div>
            ) : selectedPost ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 capitalize">
                  {selectedPost.title}
                </h3>
                <p className="text-gray-600">{selectedPost.body}</p>
              </div>
            ) : null}
          </div>
        )}

        {/* Posts Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              All Posts ({posts.length})
            </h2>
            <div className="text-sm text-gray-500">
              Click on a post to view details and demonstrate individual post caching
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(0, 12).map((post) => (
              <div 
                key={post.id} 
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
                onClick={() => setSelectedPostId(post.id)}
                onMouseEnter={() => handlePrefetchPost(post.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    ID: {post.id}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrefetchPost(post.id);
                    }}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    title="Prefetch this post"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </button>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 capitalize line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  {post.body}
                </p>
                
                {post.fetchedAt && (
                  <div className="text-xs text-gray-400">
                    Fetched: {new Date(post.fetchedAt).toLocaleTimeString()}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            🧪 React Query Testing Instructions
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-blue-800">
            <div>
              <h4 className="font-semibold mb-2">Caching Demo:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Navigate away and return to see cached data load instantly</li>
                <li>• Click posts to see individual query caching</li>
                <li>• Hover over posts to trigger prefetching</li>
                <li>• Watch the network tab to see API call patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Features to Test:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Use "Refetch Data" to update from cache</li>
                <li>• Try "Invalidate Cache" to force fresh fetch</li>
                <li>• Enable React Query DevTools (bottom-left corner)</li>
                <li>• Check cache info panel for detailed metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsComponent;