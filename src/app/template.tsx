"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type PropsWithChildren, Suspense } from "react";

import { AuthProvider } from "@/hooks/use-auth";
import { ToastProvider } from "@/utils/toast";
import { NuqsAdapter } from "nuqs/adapters/next/pages";

const queryClient = new QueryClient();

type TemplateProps = PropsWithChildren;

export default function Template({ children }: TemplateProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <ToastProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <AuthProvider>{children}</AuthProvider>
          </Suspense>
        </ToastProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}
