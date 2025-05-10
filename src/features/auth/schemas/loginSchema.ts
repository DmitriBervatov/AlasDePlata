import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres"),
  password: z.string().min(5, "La contraseña debe tener al menos 5 caracteres"),
  remember: z.boolean().optional(),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const defaultLoginValues: LoginValues = {
  username: "",
  password: "",
  remember: false,
};
