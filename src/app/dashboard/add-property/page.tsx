<<<<<<< HEAD
import AddProperty from "@/components/AddProperty";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen text-lg font-semibold">Loading...</div>}>
      <AddProperty />
    </Suspense>
  );
}
=======
import AddProperty from "@/components/AddProperty";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddProperty />
    </Suspense>
  );
}
>>>>>>> 7c674eb4792db008050cf342e46b7856b612697c
