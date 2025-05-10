import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FlightSearchValues } from "../schema/flight-search.schema";
import { PassengerFormValues } from "../schema/passengerForm.schema";
import { Fare } from "../types/fare";
import { Flight } from "../types/flight";
import { FlightAdditionalService } from "../types/services";

export enum TripType {
  ONE_WAY = "one-way",
  ROUND_TRIP = "round-trip",
  MULTI_CITY = "multi-city",
}

interface FlightSearchState {
  search: FlightSearchValues;
  setSearch: (data: Partial<FlightSearchValues>) => void;
  selectedFlight?: Flight;
  setSelectedFlight: (flight: Flight) => void;
  selectedFare?: Fare;
  setSelectedFare: (fare: Fare) => void;
  passengers: PassengerFormValues[];
  setPassengers: (passengers: PassengerFormValues[]) => void;
  selectedSeat?: string;
  selectedSeatExtraPrice?: number;
  setSelectedSeat: (seat: string, extraPrice?: number) => void;
  selectedServices: FlightAdditionalService[];
  setSelectedServices: (services: FlightAdditionalService[]) => void;
}

export const useFlightSearch = create<FlightSearchState>()(
  persist(
    (set) => ({
      search: {
        origin: "",
        destination: "",
        departureDate: new Date(),
        returnDate: undefined,
        adults: 0,
        teens: 0,
        children: 0,
        infants: 0,
        tripType: TripType.ONE_WAY,
        travelClass: "ECONOMY",
      },
      setSearch: (data) =>
        set((state) => ({ search: { ...state.search, ...data } })),
      selectedFlight: undefined,
      setSelectedFlight: (flight) => set({ selectedFlight: flight }),
      selectedFare: undefined,
      setSelectedFare: (fare) => set({ selectedFare: fare }),
      passengers: [],
      setPassengers: (passengers) => set({ passengers }),
      selectedSeat: undefined,
      selectedSeatExtraPrice: 0,
      setSelectedSeat: (seat, extraPrice = 0) =>
        set({ selectedSeat: seat, selectedSeatExtraPrice: extraPrice }),
      selectedServices: [],
      setSelectedServices: (services) => set({ selectedServices: services }),
    }),
    { name: "flight-search" }
  )
);
