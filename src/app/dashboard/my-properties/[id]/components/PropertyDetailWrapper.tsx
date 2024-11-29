"use client";
import { axiosInstance } from "@/axios";
import { DetailsBox } from "@/components/DetailsBox";
import { PropertyCardProps } from "@/components/PropertyCard";
import { useEffect, useState } from "react";

function PropertyDetailWrapper({ id }: { id: string }) {
	const [property, setProperty] = useState<PropertyCardProps | null>(null);
	useEffect(() => {
		const fetchDetails = async () => {
			try {
				const res = await axiosInstance.get(`/properties/${id}`);
				// console.log(res?.data?.data);
				if (res.status !== 200) {
					throw new Error("Error fetching post");
				}
				setProperty(res.data?.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchDetails();
	}, []);

	return (
		<div>
			{" "}
			<DetailsBox property={property as PropertyCardProps} />
		</div>
	);
}

export default PropertyDetailWrapper;
