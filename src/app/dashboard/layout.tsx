"use client";

import ProfileMainBar from "@/components/ProfileMainBar";
import { SideBar } from "@/components/SideBar";
import { Footer } from "@/sections/Footer";
import { PropsWithChildren, Suspense } from "react";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col flex-1">
        <ProfileMainBar />
        <SideBar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </Suspense>
  );
}
