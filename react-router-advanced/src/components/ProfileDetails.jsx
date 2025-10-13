import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const ProfileDetails = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: 'user@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Software developer passionate about React and modern web technologies.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev'
  });

  const handleChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you would save to a backend here
    alert('Profile details saved successfully!');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Profile Details</h2>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: isEditing ? '#28a745' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {Object.entries(profileData).map(([field, value]) => (
          <div key={field}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontWeight: 'bold',
              textTransform: 'capitalize'
            }}>
              {field === 'bio' ? 'Biography' : field}:
            </label>
            {isEditing ? (
              field === 'bio' ? (
                <textarea
                  value={value}
                  onChange={(e) => handleChange(field, e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    minHeight: '100px',
                    resize: 'vertical'
                  }}
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : field === 'website' ? 'url' : 'text'}
                  value={value}
                  onChange={(e) => handleChange(field, e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              )
            ) : (
              <div style={{ 
                padding: '0.5rem', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '4px',
                minHeight: field === 'bio' ? '100px' : 'auto'
              }}>
                {field === 'website' ? (
                  <a href={value} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                    {value}
                  </a>
                ) : (
                  value
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {isEditing && (
        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={() => setIsEditing(false)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '1rem'
            }}
          >
            Cancel
          </button>
        </div>
      )}

      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        backgroundColor: '#fff3cd', 
        borderRadius: '8px',
        fontSize: '0.9rem'
      }}>
        <h4>Nested Route Information</h4>
        <ul>
          <li><strong>Parent Route:</strong> /profile</li>
          <li><strong>Current Nested Route:</strong> /profile/details</li>
          <li><strong>Component:</strong> ProfileDetails</li>
          <li><strong>Route Pattern:</strong> /profile/details</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDetails;