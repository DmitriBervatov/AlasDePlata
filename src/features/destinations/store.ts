import { create } from "zustand";

interface DestinationsFilterState {
  selectedContinents: string[];
  setSelectedContinents: (continents: string[]) => void;
  toggleContinent: (continent: string) => void;
  clearContinents: () => void;
}

export const useDestinationsFilter = create<DestinationsFilterState>(
  (set, get) => ({
    selectedContinents: [],
    setSelectedContinents: (continents) =>
      set({ selectedContinents: continents }),
    toggleContinent: (continent) => {
      const prev = get().selectedContinents;
      set({
        selectedContinents: prev.includes(continent)
          ? prev.filter((c) => c !== continent)
          : [...prev, continent],
      });
    },
    clearContinents: () => set({ selectedContinents: [] }),
  })
);
