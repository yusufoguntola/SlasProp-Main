import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";

import { AuthProvider } from "@/hooks/use-auth";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  );
}
