"use client";

import dynamic from "next/dynamic";

const Form = dynamic(() => import("./form"), { ssr: false });

export default function Page() {
  return (
    <div className="w-full">
      <Form />
    </div>
  );
}
