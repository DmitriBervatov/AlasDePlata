
import {z} from 'zod';

export const passengerSchema = z.object({
  firstName: z.string().min(1, "Los nombres es requerido"),
  lastName: z.string().min(1, "Los apellidos son requeridos"),
  gender: z.enum(["man", "woman"]),
  birthDay: z.string(),
  birthMonth: z.string(),
  birthYear: z.string(),
  documentType: z.enum(["pasaporte", "dni", "nie"]),
  documentNumber: z.string().min(1, "El numero es requerido"),
  documentExpDay: z.string(),
  documentExpMonth: z.string(),
  documentExpYear: z.string(),
  email: z.string().email("Correo inválido"),
  phone: z.string().min(6, "Celular inválido"),
});

export type PassengerFormValues = z.infer<typeof passengerSchema>;

export const defaultPassengerValues: PassengerFormValues = {
  firstName: "",
  lastName: "",
  birthDay: "",
  birthMonth: "",
  birthYear: "",
  documentType: "dni",
  documentNumber: "",
  documentExpDay: "",
  documentExpMonth: "",
  documentExpYear: "",
  gender: "man",
  email: "",
  phone: "",
};