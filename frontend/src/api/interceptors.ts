import type {
    AxiosError,
    AxiosInstance,
    InternalAxiosRequestConfig,
    AxiosResponse,
  } from "axios";
  
  /**
   * Registers all global Axios interceptors.
   *
   * Responsibilities:
   * - Attach authentication token
   * - Add custom headers
   * - Handle API errors
   * - Prepare for refresh token flow
   */
  const setupInterceptors = (apiClient: AxiosInstance): AxiosInstance => {
    /**
     * Request Interceptor
     */
    apiClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // TODO:
        // Get access token from Zustand/Auth Store
  
        // const token = authStore.getState().accessToken;
  
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
  
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );
  
    /**
     * Response Interceptor
     */
    apiClient.interceptors.response.use(
      (response: AxiosResponse) => response,
  
      async (error: AxiosError) => {
        const status = error.response?.status;
  
        switch (status) {
          case 401:
            // TODO:
            // Refresh access token
            // Redirect to login if refresh fails
            break;
  
          case 403:
            console.warn("Forbidden");
            break;
  
          case 404:
            console.warn("Resource not found");
            break;
  
          case 500:
            console.error("Internal Server Error");
            break;
  
          default:
            break;
        }
  
        return Promise.reject(error);
      }
    );
  
    return apiClient;
  };
  
  export default setupInterceptors;