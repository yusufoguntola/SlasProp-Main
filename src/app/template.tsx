"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type PropsWithChildren, Suspense, useState } from "react";

import { onError } from "@/utils/handleError";
import { ToastProvider } from "@/utils/toast";
import { NuqsAdapter } from "nuqs/adapters/next/pages";

type TemplateProps = PropsWithChildren;

export default function Template({ children }: TemplateProps) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 10, // 10 minutes in milliseconds
        },
        mutations: {
          onError,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      <NuqsAdapter>
        <ToastProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ToastProvider>
      </NuqsAdapter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
