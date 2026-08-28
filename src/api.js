import axios from 'axios';

// Create an instance of axios with the base URL
const api = axios.create({
  baseURL: "https://personal-website-i61y.onrender.com"
});

// Export the Axios instance
export default api;