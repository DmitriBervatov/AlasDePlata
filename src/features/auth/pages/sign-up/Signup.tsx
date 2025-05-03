import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { ArrowLeft } from "lucide-react";
import { RiFacebookLine, RiGoogleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Signup = () => {

  

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
          <h1 className="font-bold">Crear cuenta</h1>
          <p className="text-sm text-gray-500">
            Completa el formulario para registrarte en Alas de Plata
          </p>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <Label htmlFor="firstName">Nombres</Label>
                <Input id="firstName" placeholder="Tus nombres" />
              </div>
              <div className="flex flex-col gap-4">
                <Label htmlFor="lastName">Apellidos</Label>
                <Input id="lastName" placeholder="Tus apellidos" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="tu@gmail.com" />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" placeholder="******" />
            </div>
            <div className="flex flex-col gap-4 justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="terms-conditions" />
                <Label
                  htmlFor="terms-conditions"
                  className="text-sm text-gray-500"
                >
                  Acepto los terminos y condiciones y la politica de privacidad
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter" className="text-sm text-gray-500">
                  Quiero recibir ofertas especiales y novedades por email
                </Label>
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
        </div>
      </div>
      <div className="flex items-center justify-center relative">
        <img
          src="/images/auth/airplane-register.jpg"
          alt="Background imagen"
          className="h-[75vh] w-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-primary-alas-de-plata text-3xl font-bold flex flex-col gap-2 text-center">
            <span className="font-bold">Alas de Plata</span>
            <span className="font-semibold">
              Unete a Alas de Plata
            </span>
            <span className="text-sm font-normal">
              Crea una cuenta para gestionar tus reservas, acumular millas y
              disfrutar de ventajas exclusivas.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
