import axios from 'axios';
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { 'Content-Type': 'application/json' },

  params: { apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY },
});
export default api;
