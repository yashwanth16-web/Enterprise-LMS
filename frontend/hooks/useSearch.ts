import { useQuery } from "@tanstack/react-query";
import { search } from "@/services/searchService";

export function useSearch(query: string) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => search(query),
    enabled: query.length > 0,
  });
}