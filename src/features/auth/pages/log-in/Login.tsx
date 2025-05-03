import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { ArrowLeft } from "lucide-react";
import { RiFacebookLine, RiGoogleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-4 p-8">
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-gray-500"
        >
          <ArrowLeft className="h-4 w-4" /> Volver a inicio
        </Link>

        <div className="flex flex-col gap-4 p-8">
          <h1 className="font-bold">Iniciar Sesion</h1>
          <p className="text-sm text-gray-500">
            Introduce tus credenciales para acceder a tu cuenta de Alas de Plata
          </p>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="tu@gmail.com" />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" placeholder="******" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Recordarme</Label>
              </div>
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
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/images/auth/airplane-login2.jpg"
          alt="Background imagen"
          className="h-[75vh] w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Login;
