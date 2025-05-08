

export interface AdditionalService {
    id: number;
    name: string;
    description: string;
    price: number;
    icon: string;
}

export interface FlightAdditionalService {
    id: number;
    additionalService: AdditionalService;
}