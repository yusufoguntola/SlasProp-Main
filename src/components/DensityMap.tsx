"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { useGetPublicProperties } from "@/api/properties/queries";
import { Skeleton } from "@mui/material";

export default function DensityMap() {
  const { data, status } = useGetPublicProperties();

  const View = {
    pending: <Skeleton height={"100%"} />,
    error: <Skeleton height={"100%"} />,
    success: (
      <MapContainer
        zoom={8}
        center={[9.082, 8.6753]}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.data.data.map((loc, index) => (
          <Marker
            position={[
              Number(loc.latitude ?? 9.082),
              Number(loc.longitude ?? 8.6753),
            ]}
            key={index}
          >
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    ),
  };

  return (
    <div className="h-96 md:h-[30rem] lg:h-[45rem] w-full">{View[status]}</div>
  );
}
