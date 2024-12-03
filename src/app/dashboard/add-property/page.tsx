import AddProperty from "@/components/AddProperty";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className='flex items-center justify-center h-screen text-lg font-semibold'>
          Loading...
        </div>
      }
    >
      <AddProperty />
    </Suspense>
  );
}
