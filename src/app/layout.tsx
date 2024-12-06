import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

export const metadata: Metadata = {
  title: "SLAS Properties",
  description:
    "Unlocking a New Era in Real Estate with SlasProp's Registry Features",
  robots: "allow",
  openGraph: {
    type: "website",
    title: "SLAS Properties",
    description:
      "Unlocking a New Era in Real Estate with SlasProp's Registry Features",
  },
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
