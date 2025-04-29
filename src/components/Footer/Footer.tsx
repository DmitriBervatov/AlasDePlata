import {
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterXLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-primary-alas-de-plata px-4 py-2 text-white">
      <div className="container mx-auto flex flex-col justify-between">
        <div className="grid grid-cols-2 lg:flex lg:flex-row justify-between items-start  gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-12 h-12 rounded-full"
              />
              <h1 className="font-bold">Alas de Plata</h1>
            </div>
            <p className="text-sm max-w-sm break-words mb-2">
              Tu compañía aérea de confianza para descubrir el mundo con
              seguridad y comodidad.
            </p>
            <div className="flex items-center gap-4">
              <RiFacebookLine />
              <RiInstagramLine />
              <RiTwitterXLine />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Compañia</span>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Sobre Nosotros
              </li>
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Nuestros aviones
              </li>
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Trabaja con nosotros
              </li>
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Noticias
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span>Destinos</span>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Europa
              </li>
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Asia
              </li>
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                America
              </li>
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Africa
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span>Servicios</span>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Check-in online
              </li>
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Estado de vuelo
              </li>
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Equipaje
              </li>
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Asistente especial
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span>Ayuda</span>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Contacto
              </li>
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Preguntas frecuentes
              </li>
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Reclamaciones
              </li>
              <li className="text-gray-300/80 cursor-pointer hover:underline">
                Politica de privacidad
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[2px] my-2 bg-fifth-alas-de-plata " />
        <div className="flex justify-between text-gray-300/80">
          <span>© 2025 Alas de Plata. Todos los derechos reservados. </span>
          <div className="flex justify-center items-center gap-8">
            <span className="hover:underline">Terminos y condiciones</span>
            <span className="hover:underline">Politica de privacidad</span>
            <span className="hover:underline">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
