import { AuthFlow } from "~/app/_components/auth-flow";
import { SessionProvider } from "next-auth/react";

export default function AuthDemoPage() {
  return (
    <SessionProvider>
      <AuthFlow />
    </SessionProvider>
  );
} 