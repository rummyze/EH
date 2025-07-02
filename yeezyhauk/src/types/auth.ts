export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  accountType: 'transport-company' | 'individual' | 'broker';
  acceptTerms: boolean;
}

export interface ResetPasswordFormData {
  email: string;
}

export interface NewPasswordFormData {
  password: string;
  confirmPassword: string;
}

export interface CreatePasswordFormData {
  password: string;
  confirmPassword: string;
}

export interface PasswordRequirements {
  hasMinLength: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumber: boolean;
}

export type AuthScreen = 
  | 'login' 
  | 'register' 
  | 'reset-password' 
  | 'check-email' 
  | 'new-password' 
  | 'create-password'
  | 'otp'; 