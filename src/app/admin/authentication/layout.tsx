import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center p-2">
      {children}
    </div>
  );
}
