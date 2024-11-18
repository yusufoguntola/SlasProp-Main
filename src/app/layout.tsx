import ToastProvider from "@/utils/toast";
import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {" "}
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
