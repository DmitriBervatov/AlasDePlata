import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/login-form/LoginForm";


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
          <LoginForm />
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
