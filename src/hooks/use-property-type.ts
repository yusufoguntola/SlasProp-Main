import { useQueryState } from "nuqs";

export function usePropertyType(defaultValue = "10") {
	const [propertyType, setPropertyType] = useQueryState("property-type", {
		defaultValue,
	});

	return { propertyType, setPropertyType };
}
