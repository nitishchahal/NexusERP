import axios from "axios";

import env from "../config/env.ts" ;
import setupInterceptors from "./interceptors";

const apiClient = axios.create({
  baseURL: env.API_BASE_URL,

  timeout: 30000,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },

  withCredentials: true,
});

setupInterceptors(apiClient);

export default apiClient;