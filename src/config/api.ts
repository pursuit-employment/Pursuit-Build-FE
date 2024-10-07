const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://pursuit-build-be.onrender.com'
  : 'http://localhost:9000';

export const API_ENDPOINTS = {
  projects: `${API_BASE_URL}/projects`,
  users: `${API_BASE_URL}/users`,
  auth: `${API_BASE_URL}/auth`,
  // Add more endpoints as needed
};

export default API_BASE_URL;
