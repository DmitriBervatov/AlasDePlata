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
import { login as loginApi } from "../../api";
import {
  defaultLoginValues,
  loginSchema,
  LoginValues,
} from "../../schemas/loginSchema";
import { useAuth } from "../../store";

const LoginForm = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/");
  }

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: defaultLoginValues,
  });

  const onSubmit = async (values: LoginValues) => {
    try {
      const response = await loginApi(values.username, values.password);

      const token = response.jwt;
      login(token, values.remember ?? false);
      navigate("/");
    } catch {
      form.setError("username", {
        message: "Usuario o contraseña incorrectos",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <FormLabel htmlFor="remember">Recordarme</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <span className="text-gray-500">¿Olvidaste tu contraseña?</span>
        </div>
        <Button className="cursor-pointer">Iniciar sesión</Button>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="cursor-pointer w-full">
            <RiFacebookLine className="w-4 h-4" /> Facebook
          </Button>
          <Button variant="outline" className="cursor-pointer w-full">
            <RiGoogleLine className="w-4 h-4" /> Google
          </Button>
        </div>

        <p className="flex items-center justify-center text-sm text-gray-500 gap-2">
          ¿No tienes una cuenta?
          <Link to="/signup" className="font-semibold cursor-pointer">
            Registrate
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
