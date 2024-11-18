import ProfileMainBar from "@/components/ProfileMainBar";
import { SideBar } from "@/components/SideBar";
import { Footer } from "@/sections/Footer";
import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ProfileMainBar />
      <SideBar />
      {children}
      <Footer />
    </>
  );
}
