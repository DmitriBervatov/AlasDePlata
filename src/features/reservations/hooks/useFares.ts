import { useQuery } from "@tanstack/react-query";
import { getFares, getFaresByFlightId } from "../api/fares";
import { Fare } from "../types/fare";

export const useFares = () => {
  return useQuery({
    queryKey: ["fares"],
    queryFn: () => getFares(),
  });
};

export const useFaresByFlightId = (flightId: number) => {
  return useQuery<Fare[]>({
    queryKey: ["fares", flightId],
    queryFn: () => getFaresByFlightId(flightId),
  });
};
