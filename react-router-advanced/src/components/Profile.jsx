import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <h1>Profile Dashboard</h1>
      <p>Welcome to your profile, {user?.name}!</p>

      {/* Nested Navigation */}
      <nav style={{ 
        marginBottom: '2rem', 
        padding: '1rem', 
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link 
            to="/profile" 
            style={{ 
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              backgroundColor: location.pathname === '/profile' ? '#007bff' : '#e9ecef',
              color: location.pathname === '/profile' ? 'white' : '#333',
              borderRadius: '4px'
            }}
          >
            Overview
          </Link>
          <Link 
            to="/profile/details" 
            style={{ 
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              backgroundColor: location.pathname === '/profile/details' ? '#007bff' : '#e9ecef',
              color: location.pathname === '/profile/details' ? 'white' : '#333',
              borderRadius: '4px'
            }}
          >
            Details
          </Link>
          <Link 
            to="/profile/settings" 
            style={{ 
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              backgroundColor: location.pathname === '/profile/settings' ? '#007bff' : '#e9ecef',
              color: location.pathname === '/profile/settings' ? 'white' : '#333',
              borderRadius: '4px'
            }}
          >
            Settings
          </Link>
        </div>
      </nav>

      {/* Nested Routes */}
      <div style={{ minHeight: '300px' }}>
        <Routes>
          <Route 
            index 
            element={
              <div>
                <h2>Profile Overview</h2>
                <div style={{ 
                  backgroundColor: '#e3f2fd', 
                  padding: '1.5rem', 
                  borderRadius: '8px',
                  marginBottom: '1rem'
                }}>
                  <h3>Quick Stats</h3>
                  <ul>
                    <li>Account created: January 2024</li>
                    <li>Last login: Today</li>
                    <li>Profile completion: 85%</li>
                  </ul>
                </div>
                
                <div style={{ 
                  backgroundColor: '#f3e5f5', 
                  padding: '1.5rem', 
                  borderRadius: '8px'
                }}>
                  <h3>Recent Activity</h3>
                  <ul>
                    <li>Viewed blog post: "Introduction to React Router"</li>
                    <li>Updated profile settings</li>
                    <li>Logged in from new device</li>
                  </ul>
                </div>

                <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
                  <h4>Nested Route Information</h4>
                  <ul>
                    <li><strong>Parent Route:</strong> /profile/*</li>
                    <li><strong>Current Route:</strong> /profile (index route)</li>
                    <li><strong>Nested Routes Available:</strong> details, settings</li>
                  </ul>
                </div>
              </div>
            } 
          />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;