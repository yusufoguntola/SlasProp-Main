import type { PropsWithChildren } from "react";

import { Sidebar } from "./sidebar";

export default function SysAdminTemplate({ children }: PropsWithChildren) {
  return (
    <div className="bg-gray-100 h-full flex-grow grid grid-cols-[320px_1fr] gap-4">
      <Sidebar />
      {children}
    </div>
  );
}
