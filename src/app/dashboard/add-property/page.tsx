import AddProperty from "@/components/AddProperty";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddProperty />
    </Suspense>
  );
}
