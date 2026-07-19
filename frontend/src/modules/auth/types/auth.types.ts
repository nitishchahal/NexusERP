export interface LoginFormData {
    email: string;
    password: string;
  }
  
  export interface ForgotPasswordFormData {
    email: string;
  }
  
  export interface ResetPasswordFormData {
    password: string;
    confirmPassword: string;
  }