import axios from 'axios';

const api = axios.create({
  baseURL: "https://localhost:8080"
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Request failed with status code:", error.response?.status || "Unknown");
    console.error("Error details:", error.message);
    return Promise.reject(error);
  }
);

export default api;
