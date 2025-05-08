import { useQuery } from "@tanstack/react-query";
import { getServicesByFlightId } from "../api/services";
import { FlightAdditionalService } from "../types/services";

export function useServices(flightId: number | undefined) {
    return useQuery<FlightAdditionalService[]>({
        queryKey: ["services", flightId],
        queryFn: () => getServicesByFlightId(flightId as number),
        enabled: !!flightId,
    });
}