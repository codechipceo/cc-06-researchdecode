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
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Token expired. Logging out...");
      localStorage.removeItem("studentToken");
      localStorage.removeItem("userData");

      window.location.href = "/signin";

      alert("Your session has expired. Please log in again.");
    }

    return Promise.reject(error);
  }
);
