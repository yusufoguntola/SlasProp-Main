"use client";

import ProfileMainBar from "@/components/ProfileMainBar";
import { SideBar } from "@/components/SideBar";
// import { Footer } from "@/sections/Footer";
import { type PropsWithChildren, Suspense, useState } from "react";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen text-lg font-semibold">
          Loading...
        </div>
      }
    >
      <div className="flex flex-col h-full">
        <ProfileMainBar toggle={toggleDrawer} />

        <div className="flex sticky top-10">
          <SideBar isOpen={isDrawerOpen} toggle={toggleDrawer} />
          <div className="flex-1">{children}</div>
        </div>
        {/* <Footer /> */}
      </div>
    </Suspense>
  );
}
