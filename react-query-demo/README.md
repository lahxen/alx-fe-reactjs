# React Query Demo - Advanced Data Handling

A comprehensive demonstration of advanced data fetching and management using React Query (TanStack Query) with React and Vite.

## 🎯 Project Overview

This project showcases the powerful capabilities of React Query for handling API interactions, caching strategies, and optimizing user experience in React applications. Built with modern React practices and a responsive design.

## ✨ Features

### Core Functionality
- **Data Fetching**: Efficient API calls to JSONPlaceholder API
- **Smart Caching**: Automatic caching with configurable stale/cache times
- **Background Updates**: Automatic refetching when data becomes stale
- **Loading States**: Comprehensive loading indicators and spinners
- **Error Handling**: Robust error handling with retry mechanisms

### Advanced Features
- **Component Navigation**: Seamless navigation with cache persistence
- **Manual Refetch**: User-controlled data refreshing
- **Dependent Queries**: Conditional queries based on user interactions
- **Cache Management**: Manual cache invalidation and prefetching
- **Developer Tools**: Integrated React Query DevTools

### User Interface
- **Responsive Design**: Mobile-first, responsive layout
- **Interactive Components**: Post listings, detail views, and cache demos
- **Visual Feedback**: Loading spinners, error states, and success indicators
- **Professional Styling**: Clean, modern CSS with hover effects

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the project (if from git)
git clone <repository-url>
cd react-query-demo

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

## 📱 Application Structure

### Components

1. **App.jsx**
   - Main application wrapper
   - QueryClient configuration
   - React Query DevTools integration

2. **Navigation.jsx**
   - Component navigation system
   - Demonstrates cache persistence across components

3. **PostsComponent.jsx**
   - Main posts listing and detail views
   - Implements useQuery for data fetching
   - Shows dependent queries for post details

4. **CacheDemo.jsx**
   - Advanced caching demonstrations
   - Cache management controls
   - Users data fetching example

5. **QueryTest.jsx**
   - Automated testing suite
   - Programmatic query validation
   - Real-time query status monitoring

### API Integration

**Endpoints Used:**
- `https://jsonplaceholder.typicode.com/posts` - Posts data
- `https://jsonplaceholder.typicode.com/users` - Users data  
- `https://jsonplaceholder.typicode.com/posts/{id}` - Individual posts

## 🧪 Testing & Validation

### Manual Testing
1. Navigate between components to observe caching
2. Use refresh buttons to test manual refetching
3. Check cache management in Cache Demo
4. Test error handling by blocking network requests

### Automated Testing
- Use the "Query Tests" tab for automated validation
- Tests cover query success, caching, and refetch functionality
- Real-time query status monitoring

### Browser DevTools
- Network tab: Observe API calls vs cached responses  
- React Query DevTools: Inspect cache state and query timing
- Console: Cache operation logging and debugging

## ⚙️ Configuration

### React Query Setup
```javascript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,    // 5 minutes
      cacheTime: 10 * 60 * 1000,   // 10 minutes
    },
  },
})
```

### Query Keys Strategy
- `['posts']` - All posts (shared across components)
- `['users']` - Users data
- `['post', id]` - Individual post details
- `['prefetched-posts']` - Prefetched data demo

## 📊 Performance Benefits

### Demonstrated Optimizations
1. **Reduced API Calls**: Intelligent caching minimizes network requests
2. **Instant Navigation**: Components load instantly with cached data
3. **Background Sync**: Data updates without blocking user interface
4. **Error Recovery**: Automatic retry with exponential backoff
5. **Memory Management**: Automatic cleanup of unused cache entries

### Metrics You Can Observe
- Initial load time vs cached load time
- Network request frequency reduction
- User interface responsiveness improvements
- Error recovery time and success rates

## 🔧 Development Tools

### Built-in DevTools
- React Query DevTools floating panel
- Query cache inspector
- Real-time query status monitoring
- Cache timeline and mutation tracking

### Console Logging
- Cache operations and status
- Query lifecycle events
- Error reporting and debugging
- Performance timing information

## 📱 Responsive Design

Fully responsive design supporting:
- **Desktop**: Full-featured layout with grid displays
- **Tablet**: Optimized navigation and card layouts  
- **Mobile**: Stacked layouts with touch-friendly controls

## 🎓 Learning Outcomes

After exploring this demo, you'll understand:

- React Query core concepts and benefits
- Caching strategies and lifecycle management
- Background refetching and stale-while-revalidate patterns
- Error handling and loading state management
- Performance optimization through intelligent caching
- Developer experience improvements with DevTools

## 📚 Additional Resources

- [React Query Documentation](https://tanstack.com/query/latest)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TESTING_GUIDE.md](./TESTING_GUIDE.md) - Detailed testing instructions

## 🤝 Contributing

This is a demonstration project. Feel free to:
- Explore the codebase to understand React Query patterns
- Modify configurations to see different caching behaviors
- Add new features to extend the demonstration
- Use as a starting point for your own React Query projects

## 📄 License

This project is created for educational purposes as part of the ALX Frontend React.js curriculum.
