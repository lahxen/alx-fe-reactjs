
import axios from 'axios';
const BASE_URL = 'https://api.github.com';
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Fetch user data by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: GITHUB_API_KEY ? { Authorization: `Bearer ${GITHUB_API_KEY}` } : {},
  });
  return response.data;
};


// Advanced search for users by username, location, and minRepos
export const searchUsers = async (username, location = '', minRepos = '') => {
  let q = username || '';
  if (location) q += ` location:${location}`;
  if (minRepos) q += ` repos:>${minRepos}`;
  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(q)}`,
    {
      headers: GITHUB_API_KEY ? { Authorization: `Bearer ${GITHUB_API_KEY}` } : {},
    }
  );
  return response.data;
};

export const getUser = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: GITHUB_API_KEY ? { Authorization: `Bearer ${GITHUB_API_KEY}` } : {},
  });
  return response.data;
};
