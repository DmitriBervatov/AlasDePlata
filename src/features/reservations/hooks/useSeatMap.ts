import { useQuery } from "@tanstack/react-query"
import { getSeatMapByFlightId } from "../api/seats"

export function useSeatMap(flightId: number) {
    return useQuery<Seat[]>({
        queryKey: ["seatMap", flightId],
        queryFn: () => getSeatMapByFlightId(flightId),
        enabled: !!flightId
    })
}