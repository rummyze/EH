"use client";

import { useState } from "react";
import { type AuthScreen } from "~/types/auth";

interface ResetPasswordScreenProps {
  onSubmit: (data: { email: string }) => void;
  onNavigate: (screen: AuthScreen) => void;
}

export function ResetPasswordScreen({ onSubmit, onNavigate }: ResetPasswordScreenProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit({ email });
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Logo */}
      <div className="mb-7 mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
        <img src="/Frame%2070.svg" alt="Logo" width="48" height="48" />
      </div>
      {/* Card */}
      <div className="w-full max-w-[360px] rounded-[20px] bg-white px-8 py-8 shadow-xl flex flex-col items-center">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          {/* Title */}
          <div className="mb-2 flex flex-col items-center">
            <span className="mb-2 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9]">
              <img src="/SignIn.svg" alt="Sign In icon" width="32" height="32" />
            </span>
            <h1 className="mt-2 text-base font-semibold text-gray-900 text-center">Reset password</h1>
            <p className="mt-1 text-xs text-gray-500 text-center">Send reset link to your email</p>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="reset-email" className="text-xs font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                id="reset-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="h-11 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 pr-10 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder:text-[#A3AED0]"
                placeholder="Enter your email"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A3AED0]">
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h9A2.25 2.25 0 0115.75 4.5v9a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 012.25 13.5v-9z" stroke="#A3AED0" strokeWidth="1.5"/><path d="M3.75 5.25l5.25 4.5 5.25-4.5" stroke="#A3AED0" strokeWidth="1.5"/></svg>
              </span>
            </div>
          </div>
          {/* Send link button */}
          <button
            type="submit"
            className="mt-1 w-full rounded-lg bg-[#2563EB] px-4 py-3 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            Send link
          </button>
          {/* Remembered password link */}
          <button
            type="button"
            onClick={() => onNavigate("login")}
            className="mt-2 text-xs font-medium text-blue-600 hover:underline self-center"
          >
            Remembered password
          </button>
        </form>
      </div>
    </div>
  );
} 