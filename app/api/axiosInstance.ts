import axios from "axios";
const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: { "Content-Type": "application/json" },
  params: { apiKey: "599773e8704d42a48200f5ea1636d3e9" },
});
 export default api;
