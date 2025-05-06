import axios from "@/lib/api";
import { Flight } from "../types/flight";
import { FlightSearchParams } from "../types/flight-search-params";

export const getFlights = async (
  params: FlightSearchParams
): Promise<Flight[]> => {
  const response = await axios.get("/flights", { params });
  return response.data;
};

export const getFlightsDetails = async (
  params: FlightSearchParams
): Promise<Flight[]> => {
  const response = await axios.get("/flights/details", { params });
  return response.data;
};

export const getFlightsDetailSearch = async (
  params: FlightSearchParams
): Promise<Flight[]> => {
  const response = await axios.get("/flights/details/search", { params });
  return response.data;
};

export const getFlightClasses = async () => {
  const response = await axios.get("/flights/classes");
  return response.data;
};
