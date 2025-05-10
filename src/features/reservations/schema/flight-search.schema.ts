import { z } from "zod";
import { TripType } from "../store/flightSearch";

export const flightSearchSchema = z
  .object({
    origin: z.string().min(1, "El origen es requerido"),
    destination: z.string().min(1, "El destino es requerido"),
    departureDate: z.date({
      required_error: "La fecha de salida es requerida",
    }),
    returnDate: z.date().optional(),
    adults: z.number().min(0, "El número de adultos es requerido"),
    teens: z.number().min(0, "El número de adolescentes es requerido"),
    children: z.number().min(0, "El número de niños es requerido"),
    infants: z.number().min(0, "El número de bebés es requerido"),
    travelClass: z.string(),
    tripType: z.nativeEnum(TripType),
  })
  .refine((data) => data.origin !== data.destination, {
    message: "El origen y el destino no pueden ser iguales",
    path: ["destination"],
  });

export type FlightSearchValues = z.infer<typeof flightSearchSchema>;

export const flightSearchDefaultValues: FlightSearchValues = {
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
};
