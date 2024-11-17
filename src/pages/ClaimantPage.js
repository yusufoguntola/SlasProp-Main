import ProfileMainBar from "@/components/ProfileMainBar";
import SideBar from "@/components/SideBar";
import React, { createContext } from "react";
import { Outlet } from "react-router";

export const drawerOptionContext = createContext();

const ClaimantPage = () => {
  return (
    <>
      <ProfileMainBar />
      <SideBar />
      <Outlet />
    </>
  );
};

export default ClaimantPage;
