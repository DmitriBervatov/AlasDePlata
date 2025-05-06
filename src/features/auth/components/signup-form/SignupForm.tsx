import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RiFacebookLine, RiGoogleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../api";
import {
  signupDefaultValues,
  signupSchema,
  SignupValues,
} from "../../schemas/signup.schema";
import { useAuth } from "../../store";

const SignupForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: signupDefaultValues,
  });

  const onSubmit = async (values: SignupValues) => {
    try {
      const response = await signup(values);
      const token = response.jwt;
      login(token, false);
      navigate("/");
    } catch {
      form.setError("email", { message: "Error al crear la cuenta" });
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                  <Input placeholder="Tus nombres" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellidos</FormLabel>
                <FormControl>
                  <Input placeholder="Tus apellidos" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Tu username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tu@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4 justify-between col-span-2">
            <FormField
              control={form.control}
              name="termsConditions"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="terms-conditions"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FormLabel
                      htmlFor="terms-conditions"
                      className="text-sm text-gray-500"
                    >
                      Acepto los terminos y condiciones
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="newsletter"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FormLabel
                      htmlFor="newsletter"
                      className="text-sm text-gray-500"
                    >
                      Quiero recibir ofertas especiales y novedades por email
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button className="cursor-pointer">Crear cuenta</Button>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="cursor-pointer w-full">
            <RiFacebookLine className="w-4 h-4" /> Facebook
          </Button>
          <Button variant="outline" className="cursor-pointer w-full">
            <RiGoogleLine className="w-4 h-4" /> Google
          </Button>
        </div>

        <p className="flex items-center justify-center text-sm text-gray-500 gap-2">
          ¿Ya tienes una cuenta?
          <Link
            to="/signup"
            className="font-semibold cursor-pointer text-black"
          >
            Inicia Sesión
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignupForm;
