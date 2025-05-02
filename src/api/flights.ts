import api from '@/lib/api';

export const getAllFlights = async () => await api.get("/flights");
