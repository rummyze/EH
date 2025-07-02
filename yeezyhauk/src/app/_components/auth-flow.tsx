"use client";

import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { api } from "~/trpc/react";
import { type AuthScreen, type RegisterFormData } from "~/types/auth";
import { LoginScreen } from "./auth/login-screen";
import { RegisterScreen } from "./auth/register-screen";
import { ResetPasswordScreen } from "./auth/reset-password-screen";
import { CheckEmailScreen } from "./auth/check-email-screen";
import { NewPasswordScreen } from "./auth/new-password-screen";
import { CreatePasswordScreen } from "./auth/create-password-screen";
import { OTPScreen } from "./auth/otp-screen";

export function AuthFlow() {
  const [screen, setScreen] = useState<AuthScreen>("login");
  const { data: _session } = useSession();

  // Состояния для ошибок и лоадеров
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // tRPC мутации для регистрации и сброса пароля
  const registerMutation = api.auth?.register?.useMutation();
  const resetPasswordMutation = api.auth?.resetPassword?.useMutation();

  // Login handler
  const handleLogin = async (data: { email: string; password: string; rememberMe: boolean }) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    setLoading(false);
    if (res?.ok) {
      setSuccess("Login successful!");
      // Можно редиректить или показать dashboard
    } else {
      setError(res?.error ?? "Login failed. Please check your credentials.");
    }
  };

  // Register handler
  const handleRegister = async (data: RegisterFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      if (registerMutation) await registerMutation.mutateAsync(data);
      await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      setSuccess("Registration successful! Check your email.");
      setScreen("check-email");
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message ?? "Registration failed.");
      } else {
        setError("Registration failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Reset password handler
  const handleResetPassword = async (data: { email: string }) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      if (resetPasswordMutation) await resetPasswordMutation.mutateAsync({ email: data.email });
      setSuccess("Reset email sent. Check your inbox.");
      setScreen("check-email");
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message ?? "Failed to send reset email.");
      } else {
        setError("Failed to send reset email.");
      }
    } finally {
      setLoading(false);
    }
  };

  // New password handler (заглушка)
  const handleNewPassword = async (_data: { password: string; confirmPassword: string }) => {
    setScreen("login");
  };

  // Create password handler (заглушка)
  const handleCreatePassword = async (_data: { password: string; confirmPassword: string }) => {
    setScreen("login");
  };

  // OTP handler (заглушка)
  const handleOTPConfirm = async (code: string) => {
    console.log("OTP Code:", code);
    // TODO: Здесь должна быть логика проверки OTP
    setScreen("new-password");
  };

  // Навигация между экранами
  const handleNavigate = (next: AuthScreen) => {
    setScreen(next);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-8 flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-20">
        <img src="/Frame%2070.svg" alt="Background decoration" width="48" height="48" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-20 rotate-180">
        <img src="/Frame%2070.svg" alt="Background decoration" width="48" height="48" />
      </div>
      <div className="relative z-10 w-full max-w-md">
        {/* Сообщения об ошибках и успехе */}
        {error && <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-700">{error}</div>}
        {success && <div className="mb-4 rounded bg-green-100 px-4 py-2 text-green-700">{success}</div>}
        {loading && <div className="mb-4 text-center text-blue-600">Loading...</div>}
        {/* Экраны */}
        {screen === "login" && <LoginScreen onSubmit={handleLogin} onNavigate={handleNavigate} />}
        {screen === "register" && <RegisterScreen onSubmit={handleRegister} onNavigate={handleNavigate} />}
        {screen === "reset-password" && <ResetPasswordScreen onSubmit={handleResetPassword} onNavigate={handleNavigate} />}
        {screen === "check-email" && <CheckEmailScreen />}
        {screen === "new-password" && <NewPasswordScreen onSubmit={handleNewPassword} onNavigate={handleNavigate} />}
        {screen === "create-password" && <CreatePasswordScreen onSubmit={handleCreatePassword} onNavigate={handleNavigate} />}
        {screen === "otp" && <OTPScreen onSubmit={handleOTPConfirm} onNavigate={handleNavigate} />}
      </div>
    </div>
  );
} 