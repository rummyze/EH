"use client";

import { useState, useRef } from "react";
import { type AuthScreen } from "~/types/auth";

interface OTPScreenProps {
  onSubmit: (code: string) => void;
  onNavigate: (screen: AuthScreen) => void;
}

export function OTPScreen({ onSubmit }: OTPScreenProps) {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleChange = (idx: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[idx] = value;
    setCode(newCode);
    if (value && idx < 3) {
      inputs[idx + 1]?.current?.focus();
    }
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[idx] && idx > 0) {
      inputs[idx - 1]?.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.every((c) => c.length === 1)) {
      onSubmit(code.join(""));
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
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6">
          {/* Title */}
          <div className="mb-2 flex flex-col items-center">
            <span className="mb-2 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9]">
              <img src="/SignIn.svg" alt="Sign In icon" width="32" height="32" />
            </span>
            <h1 className="mt-2 text-base font-semibold text-gray-900 text-center">We have sent an OTP code on your phone number</h1>
          </div>
          {/* OTP Inputs */}
          <div className="flex gap-4 mt-2 mb-2">
            {code.map((v, i) => (
              <input
                key={i}
                ref={inputs[i]}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={v}
                onChange={e => handleChange(i, e.target.value)}
                onKeyDown={e => handleKeyDown(i, e)}
                className="w-12 h-12 rounded-lg border border-[#2563EB] bg-[#F9FAFB] text-center text-2xl font-semibold text-[#2563EB] focus:outline-none focus:ring-2 focus:ring-blue-100"
                autoFocus={i === 0}
              />
            ))}
          </div>
          {/* Confirm button */}
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-[#2563EB] px-4 py-3 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            disabled={!code.every((c) => c.length === 1)}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
} 