"use client";

import { useState } from "react";
import { type AuthScreen, type RegisterFormData } from "~/types/auth";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface RegisterScreenProps {
  onSubmit: (data: RegisterFormData) => Promise<void>;
  onNavigate: (screen: AuthScreen) => void;
}

export function RegisterScreen({ onSubmit, onNavigate: _onNavigate }: RegisterScreenProps) {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    accountType: "transport-company",
    acceptTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const validatePassword = (password: string) => {
    const errors: string[] = [];
    if (password.length < 8) {
      errors.push("Пароль должен содержать не менее 8 символов.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Пароль должен содержать хотя бы одну заглавную букву.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Пароль должен содержать хотя бы одну строчную букву.");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Пароль должен содержать хотя бы одну цифру.");
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      errors.push("Пароль должен содержать хотя бы один специальный символ.");
    }
    setPasswordErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isPasswordValid = validatePassword(formData.password);

    if (
      isPasswordValid &&
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.password &&
      formData.accountType
    ) {
      await onSubmit(formData);
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
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          {/* Title */}
          <div className="mb-2 flex flex-col items-center">
            <span className="mb-2 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9]">
              <Image src="/SignIn.svg" alt="Sign In icon" width={32} height={32} />
            </span>
            <h1 className="mt-2 text-base font-semibold text-gray-900 text-center">Register account</h1>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="register-email" className="text-xs font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                id="register-email"
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
          {/* Full name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="register-name" className="text-xs font-medium text-gray-700 mb-1">
              Full name
            </label>
            <div className="relative">
              <input
                id="register-name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={e => setFormData(v => ({ ...v, name: e.target.value }))}
                className="h-11 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 pr-10 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder:text-[#A3AED0]"
                placeholder="Enter your full name"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A3AED0]">
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><circle cx="9" cy="7" r="3" stroke="#A3AED0" strokeWidth="1.5"/><rect x="4" y="12" width="10" height="4" rx="2" stroke="#A3AED0" strokeWidth="1.5"/></svg>
              </span>
            </div>
          </div>
          {/* Account type */}
          <div className="flex flex-col gap-1">
            <label htmlFor="register-account-type" className="text-xs font-medium text-gray-700 mb-1">
              Account type
            </label>
            <div className="relative">
              <select
                id="register-account-type"
                name="accountType"
                value={formData.accountType}
                onChange={e => {
                  const newAccountType = e.target.value as RegisterFormData["accountType"];
                  setFormData(v => ({ ...v, accountType: newAccountType }));
                }}
                className="h-11 w-full appearance-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 pr-10 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                required
              >
                <option value="transport-company">Transport company</option>
                <option value="individual">Individual</option>
                <option value="broker">Broker</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A3AED0]">
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M5 7l4 4 4-4" stroke="#A3AED0" strokeWidth="1.5"/></svg>
              </span>
            </div>
          </div>
          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label htmlFor="register-phone" className="text-xs font-medium text-gray-700 mb-1">
              Phone
            </label>
            <div className="flex gap-2">
              <div className="relative w-[110px]">
                <select
                  id="register-phone-country"
                  name="phoneCountry"
                  className="h-11 w-full appearance-none rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 pr-8 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  defaultValue="+373"
                >
                  <option value="+373">MD +373</option>
                  <option value="+31">NL +31</option>
                  <option value="+49">DE +49</option>
                  <option value="+1">CA +1</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#A3AED0]">
                  <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M4 6l3 3 3-3" stroke="#A3AED0" strokeWidth="1.5"/></svg>
                </span>
              </div>
              <div className="relative flex-1">
                <input
                  id="register-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={e => setFormData(v => ({ ...v, phone: e.target.value }))}
                  className="h-11 w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 pr-10 text-sm focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder:text-[#A3AED0]"
                  placeholder="(68) 454-555"
                  required
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A3AED0]">
                  <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><rect x="3" y="2" width="12" height="14" rx="2" stroke="#A3AED0" strokeWidth="1.5"/></svg>
                </span>
              </div>
            </div>
          </div>
          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="register-password" className="text-xs font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="register-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
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
                  <path d="M1.5 9s2.25-4.5 7.5-4.5 7.5 4.5 7.5 4.5-2.25 4.5-7.5 4.5S1.5 9 1.5 9z" stroke="#A3AED0" strokeWidth="1.5"/>
                  <circle cx="9" cy="9" r="2.25" stroke="#A3AED0" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
            {passwordErrors.length > 0 && (
              <ul className="text-red-500 text-xs mt-1">
                {passwordErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </div>
          {/* Register button */}
          <button
            type="submit"
            className="mt-1 w-full rounded-lg bg-[#2563EB] px-4 py-3 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            Register
          </button>
          {/* Social login */}
          <div className="mt-4 flex gap-3">
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
            <span className="text-gray-500">I have an account</span>
            <button
              type="button"
              onClick={() => _onNavigate("login")}
              className="ml-1 font-medium text-blue-600 hover:underline"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 