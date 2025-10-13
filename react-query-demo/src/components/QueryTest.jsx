import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

// Test helper functions
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) throw new Error('Failed to fetch posts')
  return response.json()
}

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) throw new Error('Failed to fetch users')
  return response.json()
}

function QueryTest() {
  const queryClient = useQueryClient()
  const [testResults, setTestResults] = useState([])
  const [isRunning, setIsRunning] = useState(false)

  // Test queries
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  const addTestResult = (test, passed, message) => {
    setTestResults(prev => [...prev, {
      id: Date.now() + Math.random(),
      test,
      passed,
      message,
      timestamp: new Date().toLocaleTimeString()
    }])
  }

  const runTests = async () => {
    setIsRunning(true)
    setTestResults([])

    // Test 1: Basic Query Success
    try {
      if (postsQuery.data && postsQuery.data.length > 0) {
        addTestResult('Posts Query', true, `Successfully loaded ${postsQuery.data.length} posts`)
      } else {
        addTestResult('Posts Query', false, 'No posts data loaded')
      }
    } catch (error) {
      addTestResult('Posts Query', false, error.message)
    }

    // Test 2: Users Query Success
    try {
      if (usersQuery.data && usersQuery.data.length > 0) {
        addTestResult('Users Query', true, `Successfully loaded ${usersQuery.data.length} users`)
      } else {
        addTestResult('Users Query', false, 'No users data loaded')
      }
    } catch (error) {
      addTestResult('Users Query', false, error.message)
    }

    // Test 3: Cache Functionality
    const cachedPosts = queryClient.getQueryData(['posts'])
    if (cachedPosts) {
      addTestResult('Cache Test', true, `Posts cached successfully (${cachedPosts.length} items)`)
    } else {
      addTestResult('Cache Test', false, 'No posts found in cache')
    }

    // Test 4: Query States
    const postsState = queryClient.getQueryState(['posts'])
    if (postsState) {
      addTestResult('Query State', true, `Posts query state: ${postsState.status}`)
    } else {
      addTestResult('Query State', false, 'No query state found')
    }

    // Test 5: Refetch Functionality
    try {
      await postsQuery.refetch()
      addTestResult('Refetch Test', true, 'Posts refetch completed successfully')
    } catch (error) {
      addTestResult('Refetch Test', false, `Refetch failed: ${error.message}`)
    }

    // Test 6: Cache Invalidation
    try {
      await queryClient.invalidateQueries({ queryKey: ['posts'] })
      addTestResult('Cache Invalidation', true, 'Posts cache invalidated successfully')
    } catch (error) {
      addTestResult('Cache Invalidation', false, `Invalidation failed: ${error.message}`)
    }

    setIsRunning(false)
  }

  const clearTests = () => {
    setTestResults([])
  }

  const passedTests = testResults.filter(test => test.passed).length
  const totalTests = testResults.length

  return (
    <div className="query-test-container">
      <div className="test-header">
        <h2>🧪 React Query Test Suite</h2>
        <p>Automated tests to verify React Query functionality</p>
      </div>

      <div className="test-controls">
        <button 
          onClick={runTests} 
          disabled={isRunning || postsQuery.isLoading || usersQuery.isLoading}
          className="test-btn primary"
        >
          {isRunning ? 'Running Tests...' : 'Run All Tests'}
        </button>
        <button onClick={clearTests} className="test-btn secondary">
          Clear Results
        </button>
      </div>

      {totalTests > 0 && (
        <div className="test-summary">
          <h3>Test Results Summary</h3>
          <div className={`summary-badge ${passedTests === totalTests ? 'success' : 'warning'}`}>
            {passedTests}/{totalTests} Tests Passed
          </div>
        </div>
      )}

      <div className="test-results">
        {testResults.map((result) => (
          <div 
            key={result.id} 
            className={`test-result ${result.passed ? 'passed' : 'failed'}`}
          >
            <div className="test-info">
              <span className="test-name">{result.test}</span>
              <span className="test-time">{result.timestamp}</span>
            </div>
            <div className="test-message">{result.message}</div>
            <div className="test-status">
              {result.passed ? '✅ PASS' : '❌ FAIL'}
            </div>
          </div>
        ))}
      </div>

      {testResults.length === 0 && !isRunning && (
        <div className="no-tests">
          <p>Click "Run All Tests" to start automated testing</p>
        </div>
      )}

      <div className="query-status">
        <h3>Current Query Status</h3>
        <div className="status-grid">
          <div className="status-item">
            <strong>Posts Query:</strong>
            <span className={`status ${postsQuery.status}`}>
              {postsQuery.status}
            </span>
          </div>
          <div className="status-item">
            <strong>Users Query:</strong>
            <span className={`status ${usersQuery.status}`}>
              {usersQuery.status}
            </span>
          </div>
          <div className="status-item">
            <strong>Posts Loading:</strong>
            <span>{postsQuery.isLoading ? 'Yes' : 'No'}</span>
          </div>
          <div className="status-item">
            <strong>Users Loading:</strong>
            <span>{usersQuery.isLoading ? 'Yes' : 'No'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QueryTest