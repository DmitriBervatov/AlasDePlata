import { useQuery } from "@tanstack/react-query";
import {
  getFlightClasses,
  getFlightsDetails,
  getFlightsDetailSearch,
} from "../api/flights";
import { Flight } from "../types/flight";
import { FlightSearchParams } from "../types/flight-search-params";

export const useFlightsDetailSearch = (params: FlightSearchParams) => {
  return useQuery<Flight[]>({
    queryKey: ["flights-search", params],
    queryFn: () => getFlightsDetailSearch(params),
  });
};

export const useFlights = (params: FlightSearchParams) => {
  return useQuery<Flight[]>({
    queryKey: ["flights", params],
    queryFn: () => getFlightsDetails(params),
  });
};

export const useGetFlightClasses = () => {
  return useQuery<string[]>({
    queryKey: ["flight-classes"],
    queryFn: () => getFlightClasses(),
  });
};
