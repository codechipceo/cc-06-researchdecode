import axios from "axios";
import { activeBaseUrl } from "./config";

export const axiosInstance = axios.create({
  baseURL: activeBaseUrl,
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

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      console.log(response);
      // Unauthorized request
      localStorage.removeItem("studentToken");
      window.location.href = "/";
    }
    return response
  },
  (err) => {
    if (err.status === 401) {
      // Unauthorized request
      localStorage.removeItem("studentToken");
      window.location.href = "/";
    }
  }
);
