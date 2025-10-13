import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navigation = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={{ 
      padding: '1rem', 
      borderBottom: '1px solid #ccc',
      backgroundColor: '#f5f5f5',
      marginBottom: '2rem'
    }}>
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
          Home
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          About
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              Profile
            </Link>
            <span style={{ marginLeft: 'auto' }}>
              Welcome, {user?.name || 'User'}!
            </span>
            <button 
              onClick={handleLogout}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link 
            to="/login" 
            style={{ 
              marginLeft: 'auto',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '4px'
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;