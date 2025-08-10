// Base URLs
export const API_URL = import.meta.env.VITE_API_URL;
export const BASE_URL = import.meta.env.VITE_BASE_URL;

// Paths
export const ASSETS_PATH = `${BASE_URL}/src/assets`;

// Example API Endpoints
export const ENDPOINTS = {
  users: `${API_URL}/users`,
  posts: `${API_URL}/posts`,
};