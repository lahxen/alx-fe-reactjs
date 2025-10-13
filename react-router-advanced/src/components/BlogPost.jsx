import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const BlogPost = () => {
  const { id, userId } = useParams();
  const location = useLocation();

  // Sample data for blog posts
  const blogPosts = {
    1: {
      title: 'Introduction to React Router',
      content: 'React Router is a powerful library for handling routing in React applications. It allows you to create single-page applications with navigation that feels like a traditional multi-page website.',
      author: 'John Doe',
      date: '2024-01-15'
    },
    2: {
      title: 'Advanced Routing Techniques',
      content: 'In this post, we explore advanced routing techniques including nested routes, dynamic routes, and protected routes. These features allow you to build complex navigation structures.',
      author: 'Jane Smith',
      date: '2024-01-20'
    },
    3: {
      title: 'Protected Routes in React',
      content: 'Learn how to implement authentication-based routing in React applications. Protected routes ensure that certain pages are only accessible to authenticated users.',
      author: 'Bob Johnson',
      date: '2024-01-25'
    }
  };

  // Sample user data
  const users = {
    1: { name: 'John Doe', bio: 'Full-stack developer with 5 years of experience in React and Node.js.' },
    2: { name: 'Jane Smith', bio: 'Frontend specialist passionate about creating beautiful user interfaces.' },
    3: { name: 'Bob Johnson', bio: 'Backend engineer focused on scalable web applications.' }
  };

  const isUserProfile = location.pathname.startsWith('/user');
  
  if (isUserProfile && userId) {
    const user = users[userId];
    
    if (!user) {
      return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
          <h1>User Not Found</h1>
          <p>The user with ID {userId} could not be found.</p>
        </div>
      );
    }

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
        <h1>User Profile: {user.name}</h1>
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <h2>About {user.name}</h2>
          <p>{user.bio}</p>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
            <strong>User ID:</strong> {userId}
          </div>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <h3>Dynamic Route Information</h3>
          <ul>
            <li><strong>Route Pattern:</strong> /user/:userId</li>
            <li><strong>Current URL:</strong> {location.pathname}</li>
            <li><strong>User ID Parameter:</strong> {userId}</li>
          </ul>
        </div>
      </div>
    );
  }

  // Handle blog post
  const post = blogPosts[id];
  
  if (!post) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
        <h1>Blog Post Not Found</h1>
        <p>The blog post with ID {id} could not be found.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <article>
        <header style={{ marginBottom: '2rem' }}>
          <h1>{post.title}</h1>
          <div style={{ color: '#666', fontSize: '0.9rem' }}>
            By {post.author} on {post.date}
          </div>
        </header>
        
        <div style={{ lineHeight: '1.6', marginBottom: '2rem' }}>
          <p>{post.content}</p>
        </div>

        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1rem', 
          borderRadius: '8px',
          fontSize: '0.9rem'
        }}>
          <h3>Dynamic Route Information</h3>
          <ul>
            <li><strong>Route Pattern:</strong> /blog/:id</li>
            <li><strong>Current URL:</strong> {location.pathname}</li>
            <li><strong>Blog Post ID:</strong> {id}</li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;