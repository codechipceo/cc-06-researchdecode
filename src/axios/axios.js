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
