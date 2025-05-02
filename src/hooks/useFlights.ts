import { getAllFlights } from "@/api/flights";
import { useQuery } from "@tanstack/react-query";

export function useFlights() {
  return useQuery({
    queryKey: ["flights"],
    queryFn: getAllFlights,
  });
}
