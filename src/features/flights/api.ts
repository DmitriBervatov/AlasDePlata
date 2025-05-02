import axios from "@/lib/api";

export const getAllFlights = async () => await axios.get("/flights");

export const getFlightById = async (id: string) =>
  await axios.get(`/flights/${id}`);
