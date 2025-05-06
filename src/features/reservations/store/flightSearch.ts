import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Fare } from "../types/fare";
import { Flight } from "../types/flight";

export enum TripType {
  ONE_WAY = "one-way",
  ROUND_TRIP = "round-trip",
  MULTI_CITY = "multi-city",
}

interface FlightSearchState {
  origin: string;
  destination: string;
  departureDate: Date | null;
  returnDate: Date | null;
  adults: number;
  teens: number;
  children: number;
  infants: number;
  travelClass: string;
  tripType: TripType;
  setSearch: (data: Partial<FlightSearchState>) => void;
  resetSearch: () => void;
  selectedFlight?: Flight;
  setSelectedFlight: (flight: Flight) => void;
  selectedFare?: Fare;
  setSelectedFare: (fare: Fare) => void;
}

export const useFlightSearch = create<FlightSearchState>()(
  persist(
    (set) => ({
      origin: "",
      destination: "",
      departureDate: null,
      returnDate: null,
      adults: 0,
      teens: 0,
      children: 0,
      infants: 0,
      travelClass: "ECONOMY",
      tripType: TripType.ONE_WAY,
      selectedFlight: undefined,
      setSelectedFlight: (flight: Flight) => set({ selectedFlight: flight }),
      selectedFare: undefined,
      setSelectedFare: (fare: Fare) => set({ selectedFare: fare }),
      setSearch: (data) => set((state) => ({ ...state, ...data })),
      resetSearch: () =>
        set({
          origin: "",
          destination: "",
          departureDate: null,
          returnDate: null,
          adults: 0,
          teens: 0,
          children: 0,
          infants: 0,
          travelClass: "ECONOMY",
        }),
    }),
    {
      name: "flight-search-storage",
      partialize: (state) => ({
        ...state,
      }),
    }
  )
);
