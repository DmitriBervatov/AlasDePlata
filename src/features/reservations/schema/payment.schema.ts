import { z } from "zod";

export const paymentSchema = z.object({
  paymentMethod: z.enum(["creditCard", "bank-transfer", "paypal"]),
  numberCard: z
    .string()
    .min(16, "El número de tarjeta debe tener 16 dígitos")
    .optional(),
  ownerCard: z
    .string()
    .min(1, "El nombre del titular es obligatorio")
    .optional(),
  month: z.string().min(1, "Mes invalido").optional(),
  year: z.string().min(1, "Año invalido").optional(),
  cvv: z.string().min(3, "CVV invalido").optional(),
  termsAccepted: z
    .boolean()
    .refine((val) => val, "Debes aceptar los términos y condiciones"),
});

export type PaymentFormValues = z.infer<typeof paymentSchema>;

export const initialValues: PaymentFormValues = {
    paymentMethod: "creditCard",
    numberCard: "",
    ownerCard: "",
    month: "",
    year: "",
    cvv: "",
    termsAccepted: false,
}