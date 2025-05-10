import { getDestinations } from "@/features/destinations/api"
import { Destination } from "@/features/destinations/types"
import { useQuery } from "@tanstack/react-query"


export const useGetDestinations = () => {
    return useQuery<Destination[]>({
        queryKey: ["destinations"],
        queryFn: () => getDestinations(),
    })
}