import PropertyDetailWrapper from "./components/PropertyDetailWrapper";

async function PropertyDetail({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	return <PropertyDetailWrapper id={id} />;
}

export default PropertyDetail;
