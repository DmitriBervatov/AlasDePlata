import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="bg-primary-alas-de-plata px-4 py-2">
      <nav className="container mx-auto flex justify-between">
        <div className="flex justify-between items-center gap-4">
          <div className="flex justify-center items-center gap-4">
            <img src="./images/logo.png" alt="Logo" />
            <h1 className="text-white font-bold">Airline</h1>
          </div>
          <ul className="flex justify-between items-center gap-4">
            <li className="text-white">Vuelos</li>
            <li className="text-white">Destinos</li>
            <li className="text-white">Servicios</li>
            <li className="text-white">Contacto</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Button variant="ghost" className="text-white">
            Iniciar Sesion
          </Button>
          <Button>Registrarse</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
