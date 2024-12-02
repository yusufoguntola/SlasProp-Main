import { useQueryState } from "nuqs";

export function useSearch(defaultValue = "") {
	const [search, setSearch] = useQueryState("search", {
		defaultValue,
	});

	return { search, setSearch };
}
