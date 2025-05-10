
export interface FlightSearchParams {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate?: string;
    travelClass?: string;
    adults?: number;
    children?: number;
    infants?: number;
    tripType?: string;
}