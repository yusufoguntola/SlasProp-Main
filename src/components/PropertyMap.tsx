"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer } from "react-leaflet";

type MapPosition = [number, number];

export default function PropertyMap({
  latitude = "9.0563",
  longitude = "7.4985",
}: Partial<Pick<Property, "latitude" | "longitude">>) {
  const position: MapPosition = [Number(latitude), Number(longitude)];

  return (
    <div className="h-80 md:h-96 lg:h-[32rem] w-full">
      <MapContainer
        center={position}
        zoom={11}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
