import { z } from "zod";

export const signupSchema = z.object({
  firstName: z.string().min(1, { message: "El nombre es requerido" }),
  lastName: z.string().min(1, { message: "El apellido es requerido" }),
  username: z.string().min(1, { message: "El nombre de usuario es requerido" }),
  email: z.string().email({ message: "El email no es válido" }),
  password: z.string().min(6, { message: "La contraseña es requerida" }),
  termsConditions: z.boolean().refine((val) => val, {
    message: "Debes aceptar los terminos y condiciones",
  }),
  newsletter: z.boolean().optional(),
});

export type SignupValues = z.infer<typeof signupSchema>;

export const signupDefaultValues: SignupValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  termsConditions: false,
  newsletter: false,
};
