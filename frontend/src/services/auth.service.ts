import { apiClient, API_ENDPOINTS } from "../api/index.ts";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
}

class AuthService {
  async login(payload: LoginPayload) {
    const response = await apiClient.post(
      API_ENDPOINTS.AUTH.LOGIN,
      payload
    );

    return response.data;
  }

  async logout() {
    const response = await apiClient.post(
      API_ENDPOINTS.AUTH.LOGOUT
    );

    return response.data;
  }

  async refreshToken() {
    const response = await apiClient.post(
      API_ENDPOINTS.AUTH.REFRESH_TOKEN
    );

    return response.data;
  }

  async getProfile() {
    const response = await apiClient.get(
      API_ENDPOINTS.AUTH.PROFILE
    );

    return response.data;
  }

  async forgotPassword(
    payload: ForgotPasswordPayload
  ) {
    const response = await apiClient.post(
      API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
      payload
    );

    return response.data;
  }

  async resetPassword(
    payload: ResetPasswordPayload
  ) {
    const response = await apiClient.post(
      API_ENDPOINTS.AUTH.RESET_PASSWORD,
      payload
    );

    return response.data;
  }
}

export const authService = new AuthService();