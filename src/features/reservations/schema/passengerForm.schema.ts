import { z } from "zod";

export const passengerSchema = z
  .object({
    firstName: z.string().min(1, "Los nombres es requerido"),
    lastName: z.string().min(1, "Los apellidos son requeridos"),
    gender: z.enum(["male", "female", "other"]),
    birthDay: z.string(),
    birthMonth: z.string(),
    birthYear: z.string(),
    documentType: z.enum(["pasaporte", "dni", "nie"]),
    documentNumber: z.string().min(1, "El numero es requerido"),
    documentExpiration: z.date(),
    email: z.string().email("Correo inválido"),
    phone: z.string().min(6, "Celular inválido"),
  })
  .refine(
    (data) => {
      if (data.documentType === "dni")
        return /^\d{8}$/.test(data.documentNumber);
      if (data.documentType === "pasaporte")
        return /^[XYZ]\d{7}[A-Z]$/.test(data.documentNumber);
      if (data.documentType === "nie")
        return /^[XYZ]\d{7}[A-Z]$/.test(data.documentNumber);

      return true;
    },
    {
      message: "Número de documento inválido para el tipo seleccionado",
      path: ["documentNumber"],
    }
  );

export type PassengerFormValues = z.infer<typeof passengerSchema>;

export const defaultPassengerValues: PassengerFormValues = {
  firstName: "",
  lastName: "",
  birthDay: "",
  birthMonth: "",
  birthYear: "",
  documentType: "dni",
  documentNumber: "",
  documentExpiration: new Date(),
  gender: "male",
  email: "",
  phone: "",
};
