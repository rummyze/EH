"use client";

import { useState } from "react";
import { type AuthScreen } from "~/types/auth";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface LoginScreenProps {
  onSubmit: (data: { email: string; password: string; rememberMe: boolean }) => void;
  onNavigate: (screen: AuthScreen) => void;
}

export function LoginScreen({ onSubmit, onNavigate }: LoginScreenProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Logo */}
      <div className="mb-7 mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
        <Image src="/Frame70.svg" alt="Logo" width={48} height={48} />
      </div>
      {/* Card */}
      <div className="w-full max-w-[360px] rounded-[20px] bg-white px-8 py-8 shadow-xl flex flex-col items-center">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          {/* Title */}
          <div className="mb-2 flex flex-col items-center">
            <span className="mb-2 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9]">
              <Image src="/SignIn.svg" alt="Sign In icon" width={32} height={32} />
            </span>
            <h1 className="mt-2 text-lg font-semibold text-gray-900">Hello, welcome back!</h1>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="login-email" className="text-xs font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={e => setFormData(v => ({ ...v, email: e.target.value }))}
                className="h-11 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 pr-10 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder:text-[#A3AED0]"
                placeholder="Enter your email"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A3AED0]">
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h9A2.25 2.25 0 0115.75 4.5v9a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 012.25 13.5v-9z" stroke="#A3AED0" strokeWidth="1.5"/><path d="M3.75 5.25l5.25 4.5 5.25-4.5" stroke="#A3AED0" strokeWidth="1.5"/></svg>
              </span>
            </div>
          </div>
          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="login-password" className="text-xs font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="login-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={formData.password}
                onChange={e => setFormData(v => ({ ...v, password: e.target.value }))}
                className="h-11 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 pr-10 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder:text-[#A3AED0]"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A3AED0]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                  {showPassword ? (
                    <path d="M1.5 9s2.25-4.5 7.5-4.5 7.5 4.5 7.5 4.5-2.25 4.5-7.5 4.5S1.5 9 1.5 9z" stroke="#A3AED0" strokeWidth="1.5"/>
                  ) : (
                    <path d="M1.5 9s2.25-4.5 7.5-4.5 7.5 4.5 7.5 4.5-2.25 4.5-7.5 4.5S1.5 9 1.5 9z" stroke="#A3AED0" strokeWidth="1.5"/>
                  )}
                  <circle cx="9" cy="9" r="2.25" stroke="#A3AED0" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </div>
          {/* Forgot password */}
          <button
            type="button"
            onClick={() => onNavigate("reset-password")}
            className="mb-2 mt-1 text-xs font-medium text-blue-600 hover:underline self-end"
          >
            Forgot password
          </button>
          {/* Log in button */}
          <button
            type="submit"
            className="mt-1 w-full rounded-lg bg-[#2563EB] px-4 py-3 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            Log in
          </button>
          {/* Social login */}
          <div className="flex gap-3 mt-2">
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50"
              onClick={() => signIn("apple")}
            >
              <Image src="/AppleLogo.svg" alt="Apple Logo" width={25} height={24} />
              Apple
            </button>
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50"
              onClick={() => signIn("facebook")}
            >
              <Image src="/FacebookLogo.svg" alt="Facebook Logo" width={24} height={24} />
              Facebook
            </button>
          </div>
          {/* Sign up link */}
          <div className="mt-4 text-center text-xs">
            <span className="text-gray-500">I don&apos;t have an account</span>
            <button
              type="button"
              onClick={() => onNavigate("register")}
              className="ml-1 font-medium text-blue-600 hover:underline"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 