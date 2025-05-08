import api from '@/lib/api';

export const getServicesByFlightId = async (flightId: number) => {
    const response = await api.get(`/flight-additional-services/flight/${flightId}`);
    return response.data;
}
