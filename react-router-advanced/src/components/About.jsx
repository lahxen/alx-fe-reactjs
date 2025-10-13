import React from 'react';

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <h1>About This Application</h1>
      <p>
        This React application demonstrates advanced routing techniques using React Router v6. 
        It showcases several important concepts:
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Features Implemented</h2>
        <ul style={{ lineHeight: '1.6' }}>
          <li><strong>Basic Routing:</strong> Navigation between different pages</li>
          <li><strong>Nested Routes:</strong> Sub-routes within the Profile section</li>
          <li><strong>Dynamic Routes:</strong> URL parameters for blog posts and user profiles</li>
          <li><strong>Protected Routes:</strong> Authentication-required pages</li>
          <li><strong>Authentication Context:</strong> Global state management for user login</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Technologies Used</h2>
        <ul style={{ lineHeight: '1.6' }}>
          <li>React 18</li>
          <li>React Router DOM v6</li>
          <li>Vite (Build tool)</li>
          <li>Context API for state management</li>
        </ul>
      </section>

      <section>
        <h2>How to Test</h2>
        <ol style={{ lineHeight: '1.6' }}>
          <li>Try navigating to different pages using the navigation menu</li>
          <li>Click on blog post links to see dynamic routing in action</li>
          <li>Try accessing the Profile page without logging in (you'll be redirected)</li>
          <li>Log in and explore the nested Profile routes</li>
          <li>Test the user profile links to see URL parameters</li>
        </ol>
      </section>
    </div>
  );
};

export default About;