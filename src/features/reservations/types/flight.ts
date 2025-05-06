

export interface Flight {
    id: string;
    airline: string;
    flightNumber: string;
    origin: string;
    destination: string;
    duration: string;
    airportCodeOrigin: string;
    airportCodeDestination: string;
    departureTime: string;
    arrivalTime: string;
    flightPrice: number;
    travelClass: string;
    stops: number
}