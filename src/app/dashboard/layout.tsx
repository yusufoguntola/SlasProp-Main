"use client";

import ProfileMainBar from "@/components/ProfileMainBar";
import { SideBar } from "@/components/SideBar";
// import { Footer } from "@/sections/Footer";
import { type PropsWithChildren, Suspense } from "react";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen text-lg font-semibold">
          Loading...
        </div>
      }
    >
      <div className="flex flex-col flex-1">
        <ProfileMainBar />
        <SideBar />
        <div className="flex-1">{children}</div>
        {/* <Footer /> */}
      </div>
    </Suspense>
  );
}
