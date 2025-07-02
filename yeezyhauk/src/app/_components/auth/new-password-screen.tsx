"use client";

import { useState } from "react";
import { type AuthScreen } from "~/types/auth";

interface NewPasswordScreenProps {
  onSubmit: (data: { password: string; confirmPassword: string }) => void;
  onNavigate: (screen: AuthScreen) => void;
}

export function NewPasswordScreen({ onSubmit }: NewPasswordScreenProps) {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (password: string) => {
    setFormData(prev => ({ ...prev, password }));
    if (formData.confirmPassword) {
      setPasswordsMatch(password === formData.confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (confirmPassword: string) => {
    setFormData(prev => ({ ...prev, confirmPassword }));
    setPasswordsMatch(formData.password === confirmPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password && formData.confirmPassword && formData.password === formData.confirmPassword) {
      onSubmit(formData);
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
            <h1 className="mt-2 text-base font-semibold text-gray-900 text-center">Create new password</h1>
          </div>
          {/* New password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="new-password" className="text-xs font-medium text-gray-700 mb-1">
              New password
            </label>
            <div className="relative">
              <input
                id="new-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={formData.password}
                onChange={e => handlePasswordChange(e.target.value)}
                className="h-11 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 pr-10 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder:text-[#A3AED0]"
                placeholder="Enter new password"
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
                  <path d="M1.5 9s2.25-4.5 7.5-4.5 7.5 4.5 7.5 4.5-2.25 4.5-7.5 4.5S1.5 9 1.5 9z" stroke="#A3AED0" strokeWidth="1.5"/>
                  <circle cx="9" cy="9" r="2.25" stroke="#A3AED0" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </div>
          {/* Confirm password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="confirm-password" className="text-xs font-medium text-gray-700 mb-1">
              Confirm password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={e => handleConfirmPasswordChange(e.target.value)}
                className={`h-11 w-full rounded-lg border px-4 pr-10 text-sm focus:outline-none focus:ring-2 placeholder:text-[#A3AED0] ${
                  !passwordsMatch && formData.confirmPassword
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500/10'
                    : 'border-[#E5E7EB] bg-[#F9FAFB] focus:border-blue-600 focus:ring-blue-100'
                }`}
                placeholder="Confirm new password"
                required
              />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowConfirmPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A3AED0]"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                  <path d="M1.5 9s2.25-4.5 7.5-4.5 7.5 4.5 7.5 4.5-2.25 4.5-7.5 4.5S1.5 9 1.5 9z" stroke="#A3AED0" strokeWidth="1.5"/>
                  <circle cx="9" cy="9" r="2.25" stroke="#A3AED0" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
            {!passwordsMatch && formData.confirmPassword && (
              <div className="mt-1 text-xs text-red-600">Passwords do not match</div>
            )}
          </div>
          {/* Confirm button */}
          <button
            type="submit"
            disabled={!passwordsMatch || !formData.password || !formData.confirmPassword}
            className="mt-1 w-full rounded-lg bg-[#2563EB] px-4 py-3 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
} 