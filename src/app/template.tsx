"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

import { AuthProvider } from "@/hooks/use-auth";
import ToastProvider from "@/utils/toast";

const queryClient = new QueryClient();

type TemplateProps = PropsWithChildren;

export default function Template({ children }: TemplateProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}
