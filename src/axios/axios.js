import axios from "axios";

const devUrl = "http://localhost:5000/";
export const axiosInstance = axios.create({
  baseURL: devUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("studentToken");
    if (token) {
      config.headers.authToken = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
