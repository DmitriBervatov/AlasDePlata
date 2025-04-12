import {
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterXLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-primary-alas-de-plata px-4 py-2 text-white">
      <div className="container mx-auto flex flex-col justify-between">
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <img src="./images/logo.png" alt="Logo" />
              <h1 className="font-bold">Airline</h1>
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
              <li className="text-gray-300/80">Sobre Nosotros</li>
              <li className="text-gray-300/80">Nuestros aviones</li>
              <li className="text-gray-300/80">Trabaja con nosotros</li>
              <li className="text-gray-300/80">Noticias</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span>Destinos</span>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-300/80">Europa</li>
              <li className="text-gray-300/80">Asia</li>
              <li className="text-gray-300/80">America</li>
              <li className="text-gray-300/80">Africa</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span>Servicios</span>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-300/80">Check-in online</li>
              <li className="text-gray-300/80">Estado de vuelo</li>
              <li className="text-gray-300/80">Equipaje</li>
              <li className="text-gray-300/80">Asistente especial</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span>Ayuda</span>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-300/80">Contacto</li>
              <li className="text-gray-300/80">Preguntas frecuentes</li>
              <li className="text-gray-300/80">Reclamaciones</li>
              <li className="text-gray-300/80">Politica de privacidad</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[2px] my-2 bg-fifth-alas-de-plata " />
        <div className="flex justify-between text-gray-300/80">
          <span>© 2025 Alas de Plata. Todos los derechos reservados. </span>
          <div className="flex justify-center items-center gap-8">
            <span>Terminos y condiciones</span>
            <span>Politica de privacidad</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
