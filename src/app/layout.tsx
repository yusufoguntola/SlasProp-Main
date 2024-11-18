"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

type LayoutProps = PropsWithChildren<{}>;
export default function Layout({ children }: LayoutProps) {
  // Create a QueryClient instance
  const [queryClient] = useState(() => new QueryClient());

  const userType = "guest"; // Example userType, replace with actual logic
  const view = {
    guest: <div>Welcome, Guest!</div>,
    admin: <div>Welcome, Admin!</div>,
  };

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <main className="scrollbar-none">
            {children}
            {view[userType]}
          </main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
