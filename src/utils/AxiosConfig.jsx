import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://api.dev.readymaninc.com/api/v1";

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  
  instance.interceptors.request.use(
    async (config) => {
      const token = Cookies.get("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

export default instance
