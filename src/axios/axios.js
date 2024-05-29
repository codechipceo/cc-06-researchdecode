import axios from "axios";

const devUrl = "http://localhost:5000/";
export const axiosInstance = axios.create({
  baseURL: devUrl,
});
