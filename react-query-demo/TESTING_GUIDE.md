# React Query Demo - Advanced Data Handling

This project demonstrates advanced data fetching and management using React Query (TanStack Query) with a focus on caching, background updates, and efficient API interactions.

## 🚀 Features Implemented

### 1. **Basic Data Fetching**
- ✅ Fetch posts from JSONPlaceholder API
- ✅ Loading states with spinners
- ✅ Error handling with retry functionality
- ✅ Responsive UI design

### 2. **Advanced Caching**
- ✅ Automatic caching with configurable stale/cache times
- ✅ Background refetching when data becomes stale
- ✅ Cache persistence across component navigation
- ✅ Manual cache invalidation

### 3. **Interactive Features**
- ✅ Manual refetch with loading indicators
- ✅ Post detail views with dependent queries
- ✅ Navigation between cached components
- ✅ Cache management controls

### 4. **Developer Experience**
- ✅ React Query DevTools integration
- ✅ Console logging for cache operations
- ✅ Visual cache status indicators
- ✅ Comprehensive error boundaries

## 🧪 How to Test the Application

### Prerequisites
```bash
npm install
npm run dev
```

### Testing Caching Behavior

1. **Navigate to Posts List**
   - Observe the initial loading state
   - Note the loading time and network requests in DevTools
   - Posts load from the JSONPlaceholder API

2. **Switch to Cache Demo**
   - Click "Cache Demo" in navigation
   - Notice that posts data loads instantly (from cache)
   - Users data loads fresh (new API call)

3. **Return to Posts List**
   - Data loads instantly from cache
   - No new network request is made
   - Demonstrates effective caching

### Testing Advanced Features

4. **Manual Refetch**
   - Click "Refresh Posts" button
   - Observe loading state during refetch
   - New data replaces cached data

5. **Cache Management**
   - In Cache Demo, click "Check Cache Status"
   - Use "Invalidate" buttons to clear specific cache entries
   - Test "Prefetch Posts Data" for background loading

6. **Dependent Queries**
   - Click "View Details" on any post
   - Observe how post details load independently
   - Navigate back to see list still cached

### Testing Error Handling

7. **Network Errors**
   - Disconnect internet or block requests
   - Refresh the page to see error states
   - Click retry buttons to test recovery

### Using React Query DevTools

8. **DevTools Inspection**
   - Look for floating React Query DevTools button
   - Inspect query cache, status, and timing
   - Watch real-time updates during interactions

## 📊 API Endpoints Used

- **Posts**: `https://jsonplaceholder.typicode.com/posts`
- **Users**: `https://jsonplaceholder.typicode.com/users`
- **Individual Post**: `https://jsonplaceholder.typicode.com/posts/{id}`

## ⚙️ React Query Configuration

```javascript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,    // 5 minutes fresh
      cacheTime: 10 * 60 * 1000,   // 10 minutes in cache
    },
  },
})
```

## 🔧 Key Implementation Details

### Query Keys Strategy
- `['posts']` - All posts data (shared across components)
- `['users']` - All users data
- `['post', id]` - Individual post details
- `['prefetched-posts']` - Prefetched data demo

### Caching Benefits Demonstrated
1. **Instant Navigation**: Switch between components with no loading delay
2. **Background Updates**: Data refreshes automatically when stale
3. **Reduced API Calls**: Network requests minimized through intelligent caching
4. **User Experience**: Users see content immediately, updates happen behind the scenes
5. **Error Recovery**: Failed requests retry automatically with exponential backoff

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop browsers
- Tablet devices  
- Mobile phones

## 🎯 Learning Outcomes

After exploring this demo, you will understand:

- How React Query manages cache lifecycle
- When and why background refetching occurs
- How to implement dependent queries
- Cache invalidation strategies
- Error handling patterns
- Performance optimization through caching
- Developer tools for debugging queries

## 🔍 Network Analysis

Use browser DevTools Network tab to observe:
- Initial API calls vs cached responses
- Background refetch requests
- Request timing and payload sizes
- Cache headers and response codes

The application effectively demonstrates how React Query can significantly improve both user experience and application performance through intelligent caching and background synchronization.