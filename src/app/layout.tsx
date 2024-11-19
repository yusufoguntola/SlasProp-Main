import { PropsWithChildren } from "react";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
