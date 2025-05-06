import axios from "@/lib/api";

export const getFares = async () => {
  const response = await axios.get("/flight-prices");
  return response.data;
};

export const getFaresByFlightId = async (flightId: number) => {
  const response = await axios.get(`/flight-prices/flight/${flightId}`);
  return response.data;
};
