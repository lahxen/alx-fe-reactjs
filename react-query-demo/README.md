# Advanced Data Handling with React Query

This project demonstrates advanced data fetching and management using **TanStack Query** (formerly React Query) with a focus on caching, background updates, and efficient API interactions.

## 🎯 **Project Overview**

This application fetches posts from the JSONPlaceholder API and showcases React Query's powerful features for managing server state in React applications.

## 🚀 **Features Implemented**

### **Core React Query Features:**
- ✅ **Data Fetching** with `useQuery` hook
- ✅ **Automatic Caching** with configurable cache times
- ✅ **Background Refetching** for fresh data
- ✅ **Loading States** management
- ✅ **Error Handling** with retry logic
- ✅ **Manual Refetch** capabilities
- ✅ **Cache Invalidation** and clearing

### **Advanced Features:**
- ✅ **Stale-While-Revalidate** pattern
- ✅ **Query Client configuration**
- ✅ **DevTools integration** for debugging
- ✅ **Optimistic UI patterns**
- ✅ **Network-aware caching**

## 📁 **Project Structure**

```
src/
├── components/
│   ├── PostsComponent.jsx    # Main data fetching component
│   └── Navigation.jsx        # Navigation for testing caching
├── App.jsx                   # React Query setup & provider
├── App.css                   # Comprehensive styling
└── main.jsx                  # Application entry point
```

## 🛠 **Installation & Setup**

1. **Clone and install dependencies:**
   ```bash
   cd react-query-demo
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173`

## 📊 **API Integration**

**Endpoint:** `https://jsonplaceholder.typicode.com/posts`
- **Method:** GET
- **Response:** Array of 100 post objects
- **Rate Limiting:** None (free API)

## 🎮 **Testing Caching Behavior**

### **Demonstration Steps:**

1. **Load Data:**
   - Navigate to "Posts" page
   - Observe initial loading state
   - Watch posts load from API

2. **Test Caching:**
   - Navigate to "About" or "Settings"
   - Return to "Posts" page
   - Notice instant loading from cache

3. **Monitor Network:**
   - Open Browser DevTools → Network tab
   - Watch reduced API calls due to caching
   - Observe background refetch behavior

4. **Interactive Controls:**
   - **Refetch Data:** Manually trigger new API call
   - **Invalidate & Refetch:** Clear cache and fetch fresh data  
   - **Clear Cache:** Remove all cached data

## ⚙️ **React Query Configuration**

```javascript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,        // 5 minutes fresh
      cacheTime: 10 * 60 * 1000,       // 10 minutes in memory
      retry: 1,                        // Retry once on failure
      refetchOnWindowFocus: false,     // Don't refetch on focus
    },
  },
});
```

## 🔧 **Query Options Explained**

| Option | Value | Purpose |
|--------|--------|---------|
| **staleTime** | 5 minutes | How long data stays "fresh" |
| **cacheTime** | 10 minutes | How long data stays in memory |
| **retry** | 1 | Number of retry attempts on failure |
| **refetchOnWindowFocus** | false | Disable refetch on window focus |

## 🎨 **UI Features**

### **Loading States:**
- Animated spinner during initial load
- Loading indicators on buttons during refetch
- Cached vs fetching status indicators

### **Error Handling:**
- User-friendly error messages
- Retry functionality
- Network error recovery

### **Cache Information:**
- Last updated timestamp
- Current fetch status
- Cache vs network indicators

## 🚀 **React Query Benefits Demonstrated**

### **1. Performance Optimization:**
- **Reduced API Calls:** Cached data serves instantly
- **Background Updates:** Fresh data without blocking UI
- **Memory Efficiency:** Automatic garbage collection

### **2. Developer Experience:**
- **Declarative Data Fetching:** Simple `useQuery` hook
- **Built-in Loading States:** No manual state management
- **Error Boundaries:** Automatic error handling

### **3. User Experience:**
- **Instant Navigation:** Cached data loads immediately  
- **Always Fresh:** Background updates keep data current
- **Offline Resilience:** Cached data available offline

## 🔍 **DevTools Usage**

The React Query DevTools are integrated for debugging:

1. **Open DevTools:** Click the floating React Query icon
2. **Inspect Queries:** View all active queries and their states
3. **Monitor Cache:** Watch cache updates in real-time
4. **Debug Issues:** Inspect query keys, data, and errors

## 📈 **Performance Monitoring**

### **Network Efficiency:**
- **First Visit:** 1 API call to fetch all posts
- **Return Visits:** 0 API calls (served from cache)
- **Background Updates:** Conditional refetch based on staleness

### **Memory Usage:**
- **Active Queries:** Kept in memory during component mount
- **Inactive Queries:** Garbage collected after `cacheTime`
- **Cache Size:** Automatically managed by React Query

## 🔄 **Caching Strategies**

### **Stale-While-Revalidate:**
1. Return cached data immediately (if available)
2. Fetch fresh data in background  
3. Update UI with fresh data when ready

### **Cache Invalidation:**
- **Manual:** Use `invalidateQueries()` to force refetch
- **Automatic:** Based on `staleTime` configuration
- **Targeted:** Invalidate specific queries by key

## 🧪 **Testing Scenarios**

### **Scenario 1: Normal Usage**
1. Load posts → API call made
2. Navigate away → Component unmounts  
3. Return → Data loads from cache instantly

### **Scenario 2: Stale Data**
1. Wait 5 minutes → Data becomes stale
2. Return to posts → Cache served + background refetch
3. Fresh data updates UI seamlessly

### **Scenario 3: Network Error**
1. Disable network → Error state shows
2. Click retry → Attempt refetch
3. Enable network → Data loads successfully

This project provides a solid foundation for understanding React Query's capabilities in real-world applications! 🚀
