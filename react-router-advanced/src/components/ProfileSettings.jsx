import React, { useState } from 'react';

const ProfileSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
    language: 'en',
    timezone: 'America/New_York',
    privacy: 'public',
    twoFactorAuth: false
  });

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswords(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveSettings = () => {
    // In a real app, you would save to a backend here
    alert('Settings saved successfully!');
  };

  const handleChangePassword = () => {
    if (passwords.new !== passwords.confirm) {
      alert('New passwords do not match!');
      return;
    }
    if (passwords.new.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }
    // In a real app, you would validate current password and save new one
    alert('Password changed successfully!');
    setPasswords({ current: '', new: '', confirm: '' });
  };

  return (
    <div>
      <h2>Account Settings</h2>
      
      {/* Preferences Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Preferences</h3>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label>Email Notifications</label>
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label>Push Notifications</label>
            <input
              type="checkbox"
              checked={settings.pushNotifications}
              onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label>Dark Mode</label>
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label>Two-Factor Authentication</label>
            <input
              type="checkbox"
              checked={settings.twoFactorAuth}
              onChange={(e) => handleSettingChange('twoFactorAuth', e.target.checked)}
            />
          </div>
        </div>
      </section>

      {/* Language & Region Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Language & Region</h3>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Language</label>
            <select
              value={settings.language}
              onChange={(e) => handleSettingChange('language', e.target.value)}
              style={{
                padding: '0.5rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                width: '200px'
              }}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Timezone</label>
            <select
              value={settings.timezone}
              onChange={(e) => handleSettingChange('timezone', e.target.value)}
              style={{
                padding: '0.5rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                width: '200px'
              }}
            >
              <option value="America/New_York">Eastern Time</option>
              <option value="America/Chicago">Central Time</option>
              <option value="America/Denver">Mountain Time</option>
              <option value="America/Los_Angeles">Pacific Time</option>
            </select>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Privacy</h3>
        <div style={{ marginTop: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Profile Visibility</label>
          <select
            value={settings.privacy}
            onChange={(e) => handleSettingChange('privacy', e.target.value)}
            style={{
              padding: '0.5rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: '200px'
            }}
          >
            <option value="public">Public</option>
            <option value="friends">Friends Only</option>
            <option value="private">Private</option>
          </select>
        </div>
      </section>

      {/* Password Change Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h3>Change Password</h3>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem', maxWidth: '300px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Current Password</label>
            <input
              type="password"
              value={passwords.current}
              onChange={(e) => handlePasswordChange('current', e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>New Password</label>
            <input
              type="password"
              value={passwords.new}
              onChange={(e) => handlePasswordChange('new', e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Confirm New Password</label>
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) => handlePasswordChange('confirm', e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
            />
          </div>
          
          <button
            onClick={handleChangePassword}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Change Password
          </button>
        </div>
      </section>

      {/* Save Settings Button */}
      <button
        onClick={handleSaveSettings}
        style={{
          padding: '0.75rem 2rem',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        Save All Settings
      </button>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        backgroundColor: '#d1ecf1', 
        borderRadius: '8px',
        fontSize: '0.9rem'
      }}>
        <h4>Nested Route Information</h4>
        <ul>
          <li><strong>Parent Route:</strong> /profile</li>
          <li><strong>Current Nested Route:</strong> /profile/settings</li>
          <li><strong>Component:</strong> ProfileSettings</li>
          <li><strong>Route Pattern:</strong> /profile/settings</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSettings;