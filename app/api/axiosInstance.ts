import axios from "axios";
const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: { "Content-Type": "application/json" },
  params: { apiKey: "1234c266d6c64f0a99c177e880e5c64b" },
});
 export default api;
