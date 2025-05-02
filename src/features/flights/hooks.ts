import { useQuery } from "@tanstack/react-query";
import { getAllFlights } from "./api";

export function useFlights() {
  return useQuery({
    queryKey: ["flights"],
    queryFn: getAllFlights,
  });
}
