import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const blogPosts = [
    { id: 1, title: 'Introduction to React Router', excerpt: 'Learn the basics of React Router...' },
    { id: 2, title: 'Advanced Routing Techniques', excerpt: 'Explore nested and dynamic routes...' },
    { id: 3, title: 'Protected Routes in React', excerpt: 'Implementing authentication-based routing...' }
  ];

  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <h1>Welcome to React Router Advanced Demo</h1>
      <p>
        This application demonstrates advanced routing techniques including nested routes, 
        dynamic routing, and protected routes using React Router.
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Recent Blog Posts</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {blogPosts.map(post => (
            <div key={post.id} style={{ 
              border: '1px solid #ddd', 
              padding: '1rem', 
              borderRadius: '8px' 
            }}>
              <h3>
                <Link 
                  to={`/blog/${post.id}`}
                  style={{ textDecoration: 'none', color: '#007bff' }}
                >
                  {post.title}
                </Link>
              </h3>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>User Profiles</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {users.map(user => (
            <Link 
              key={user.id}
              to={`/user/${user.id}`}
              style={{ 
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                backgroundColor: '#28a745',
                color: 'white',
                borderRadius: '4px'
              }}
            >
              {user.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;