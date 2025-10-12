// src/services/githubApi.ts
import axios from 'axios';



const BASE_URL = 'https://api.github.com';
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;


export const searchUsers = async (username: string) => {
  const response = await axios.get(`${BASE_URL}/search/users`, {
    params: { q: username },
    headers: GITHUB_API_KEY ? { Authorization: `Bearer ${GITHUB_API_KEY}` } : {},
  });
  return response.data;
};


export const getUser = async (username: string) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: GITHUB_API_KEY ? { Authorization: `Bearer ${GITHUB_API_KEY}` } : {},
  });
  return response.data;
};
