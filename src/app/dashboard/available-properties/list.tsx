"use client";

import { useMemo } from "react";

import { useGetPublicProperties } from "@/api/properties/queries";
import { PropertiesShimmer } from "@/components/PropertiesShimmer";
import { useFilterProperties } from "@/hooks/use-filter-properties";
import { Pagination, Typography } from "@mui/material";

import { PropertyCard } from "./card";

const generateKey = (pre: unknown) => {
  return `${pre}_${new Date().getTime()}`;
};

export default function PropertyList() {
  const { data, isPending, isError, isRefetching } = useGetPublicProperties();
  const [{ page }, setFilter] = useFilterProperties(6);

  const total = useMemo(() => data?.data.total ?? 0, [data]);

  if (isError || isPending || isRefetching) {
    return (
      <div className="grid gap-4 grid-cols-1 flex-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <PropertiesShimmer key={generateKey(index)} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex-1 flex flex-col gap-6 max-h-[660px] overflow-y-auto overflow-x-clip w-full">
        <div className="hidden last:flex items-center justify-center py-4 text-center w-full lg:col-span-2 ">
          <Typography textAlign="center" color="text.secondary">
            No properties found. Please adjust your search criteria.
          </Typography>
        </div>
        {data?.data.data.map((property) => (
          <PropertyCard key={property?.id} {...property} />
        ))}
      </div>
      <Pagination
        count={Math.ceil(total / 6)}
        page={page}
        onChange={(_, page) => setFilter({ page })}
      />
    </div>
  );
}
