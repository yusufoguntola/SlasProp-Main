"use client";

import Link, { type LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

import { useGetUserDetails } from "@/api/auth/queries";

export function Sidebar() {
  return (
    <aside className="flex shadow-sm h-full bg-white">
      <nav className="w-full">
        <ul className="flex flex-col gap-2 p-3 ">
          <SidebarLink href="/">Home</SidebarLink>
          <SidebarLink href="/users">Users Management</SidebarLink>
          <SidebarLink href="/locations">Locations</SidebarLink>
          <SidebarLink href="/tools">Tools Management</SidebarLink>
          <SidebarLink href="/roles">Roles </SidebarLink>
        </ul>
      </nav>
    </aside>
  );
}

function SidebarLink(props: PropsWithChildren<LinkProps>) {
  const user = useGetUserDetails();

  const link = `/admin/restricted-path/${user?.role?.name.toLowerCase()}${
    props.href
  }`;

  return (
    <li className="*:inline-flex *:gap-2 *:p-2 hover:bg-gray-50 transition-all w-full *:w-full">
      <Link {...props} href={link} />
    </li>
  );
}
