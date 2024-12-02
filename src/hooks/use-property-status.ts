import { useQueryState } from "nuqs";

export function usePropertyStatus(defaultValue = "10") {
	const [propertyStatus, setPropertyStatus] = useQueryState("property-status", {
		defaultValue,
	});

	return { propertyStatus, setPropertyStatus };
}
