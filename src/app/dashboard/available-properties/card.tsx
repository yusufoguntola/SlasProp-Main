import Image from "next/image";
import Link from "next/link";

import { Typography } from "@mui/material";

export function PropertyCard(property: Property) {
  return (
    <Link
      href={`/dashboard/available-properties/${property.propertyId}`}
      className="border rounded-xl flex w-full h-56 p-2 shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-all gap-4 items-center"
    >
      <div className="flex-[0.75] h-52">
        <Image
          src={property.images[0] ?? "/assets/property-image.jpg"}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "/assets/property-image.jpg";
          }}
          width={200}
          height={256}
          unoptimized
          className="h-full w-full object-cover rounded-lg"
          alt={property.name ?? "property"}
        />
      </div>
      <div className="flex-1 w-full grid gap-1.5 pr-2">
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          {property.name}
        </Typography>
        <Typography sx={{ color: "#26a69a", fontSize: "14px" }}>
          Location: {property.address}, {property.city}, {property.state}
        </Typography>
        <Typography sx={{ color: "#df493d", fontSize: "14px" }}>
          Square Footage {property.squareFootage}m<sup>2</sup>
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: "12px" }}>
          Prop ID: {property.propertyId}
        </Typography>
      </div>
    </Link>
  );
}
