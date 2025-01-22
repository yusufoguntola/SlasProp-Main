import { cookies } from "next/headers";

import RegisteredProperties from "@/components/RegisteredProperties";
import { PropertiesList } from "@/components/properties/list";

export default async function Page() {
  const cookieStore = await cookies();

  const slider = cookieStore.get("slider");

  return (
    <div key={slider?.toString()} className="w-full">
      {slider?.value === "true" ? <RegisteredProperties /> : <PropertiesList />}
    </div>
  );
}
