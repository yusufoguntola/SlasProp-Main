"use client";

import { use } from "react";

import { useGetPublicSingleProperty } from "@/api/properties/queries";
import { DetailsBox } from "@/components/DetailsBox";

export default function PropertyDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const { data, status } = useGetPublicSingleProperty(id);

  const property = data?.data.data;

  const Render = {
    error: <>Loading...</>,
    pending: <>Loading...</>,
    success: (
      <>
        <DetailsBox property={property} />
      </>
    ),
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div>{Render[status]}</div>
    </div>
  );
}
