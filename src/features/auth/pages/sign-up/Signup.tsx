import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SignupForm from "../../components/signup-form/SignupForm";

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
          <SignupForm />
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
            <span className="font-semibold">Unete a Alas de Plata</span>
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
