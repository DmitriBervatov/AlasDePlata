import { useQuery } from "@tanstack/react-query";
import { getDestinations } from "./api";
import { Destination } from "./types";

export function useGetDestinations(continents?: string[]) {
  return useQuery<Destination[]>({
    queryKey: ["destinations", continents],
    queryFn: () => getDestinations(continents),
  });
}
