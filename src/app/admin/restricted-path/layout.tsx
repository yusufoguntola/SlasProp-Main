"use client";

import type { PropsWithChildren } from "react";

import ProfileMainBar from "@/components/ProfileMainBar";

export default function RestrictedPathLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh flex flex-col">
      <ProfileMainBar toggle={() => {}} />
      {children}
    </div>
  );
}
