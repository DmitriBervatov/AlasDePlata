import axios from "@/lib/api";

export const getSeatMapByFlightId = async (
  flightId: number
) => {
  const response = await axios.get(`/seats?flightId=${flightId}`);
  return response.data;
};
