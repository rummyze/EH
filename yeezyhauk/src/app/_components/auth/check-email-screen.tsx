"use client";

// Удален импорт AuthScreen, так как он больше не используется.
// Удален интерфейс CheckEmailScreenProps, так как он пуст и не нужен.

export function CheckEmailScreen() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Logo */}
      <div className="mb-7 mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
        <img src="/Frame%2070.svg" alt="Logo" width="48" height="48" />
      </div>
      {/* Card */}
      <div className="w-full max-w-[360px] rounded-[20px] bg-white px-8 py-8 shadow-xl flex flex-col items-center">
        <div className="flex flex-col items-center w-full">
          <span className="mb-2 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9]">
            <img src="/HandWaving.svg" alt="Hand Waving icon" width="32" height="32" />
          </span>
          <h1 className="mt-2 text-base font-semibold text-gray-900 text-center">Check your email, and tap the link we have sent you</h1>
        </div>
      </div>
    </div>
  );
} 