

export function getPassengerBreakdown(search: {
    adults?: number;
    teens?: number;
    children?: number;
    infants?: number;
}) {
    return [
        search.adults ? `${search.adults} Adulto${search.adults > 1 ? "s" : ""}` : "",
        search.teens ? `${search.teens} Niño${search.teens > 1 ? "s" : ""}` : "",
        search.children ? `${search.children} Infante${search.children > 1 ? "s" : ""}` : "",
        search.infants ? `${search.infants} Lactante${search.infants > 1 ? "s" : ""}` : "",
    ]
    .filter(Boolean)
    .join(", ");

}