
export type SeatType = "normal" | "premium" | "emergency_exit";
export type SeatStatus = "available" | "occupied" | "selected";

export interface Seat {
    id: number;
    flightId: number;
    seatNumber: string;
    flightClass: string;
    seatType: SeatType;
    seatStatus: SeatStatus;
    extraPrice: number;
}

export type SeatMap = Record<string, SeatType>;