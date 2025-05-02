import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/ui/navigation-menu";

import { BadgePercent, Globe, Hourglass, Search, TreePalm } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { RiAirplayLine, RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <header className="bg-primary-alas-de-plata px-4 py-2">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-row gap-4 justify-center items-center">
          <Link to="/" className="flex justify-center items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-white font-bold">Airline</span>
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white cursor-pointer"
            onClick={() => setMenuBar(!menuBar)}
          >
            {menuBar ? (
              <RiCloseLine className="h-6 w-6" />
            ) : (
              <RiMenu3Line className="h-6 w-6" />
            )}
          </button>
        </div>
        {/* Destkop Navigation */}
        <ul className="hidden lg:flex justify-between items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white font-semibold">
                  Destinos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-2 gap-4 p-4 md:w-[400px] lg:w-[500px]">
                    <li className="cursor-pointer">
                      <NavigationMenuLink asChild>
                        <div className="flex flex-row gap-4 items-center">
                          <div className="flex items-center justify-center">
                            <img
                              src="/images/destinations/europa-destiny.jpg"
                              alt="Europa"
                              className="h-20 w-20 rounded object-cover object-center"
                            />
                          </div>
                          <div className="flex flex-col flex-1 min-w-0">
                            <span className="font-medium truncate">Europa</span>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explora Europa: historia, cultura, gastronomía y
                              paisajes únicos en cada rincón del continente.
                            </p>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li className="cursor-pointer">
                      <NavigationMenuLink asChild>
                        <div className="flex flex-row gap-4 items-center">
                          <div className="flex items-center justify-center">
                            <img
                              src="/images/destinations/america-destiny.png"
                              alt="Europa"
                              className="h-20 w-20 rounded object-cover object-center"
                            />
                          </div>
                          <div className="flex flex-col flex-1 min-w-0">
                            <span className="font-medium truncate">
                              America
                            </span>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Vive la diversidad de América: desde sus grandes
                              ciudades hasta maravillas naturales únicas.
                            </p>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li className="cursor-pointer">
                      <NavigationMenuLink asChild>
                        <div className="flex flex-row gap-4 items-center">
                          <div className="flex items-center justify-center">
                            <img
                              src="/images/destinations/asia-destiny.png"
                              alt="Europa"
                              className="h-20 w-20 rounded object-cover object-center"
                            />
                          </div>
                          <div className="flex flex-col flex-1 min-w-0">
                            <span className="font-medium truncate">Asia</span>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Descubre Asia: cultura, historia y paisajes
                              únicos.
                            </p>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li className="cursor-pointer">
                      <NavigationMenuLink asChild>
                        <div className="flex flex-row gap-4 items-center">
                          <div className="flex items-center justify-center">
                            <img
                              src="/images/destinations/africa-destiny.jpg"
                              alt="Europa"
                              className="h-20 w-20 rounded object-cover object-center"
                            />
                          </div>
                          <div className="flex flex-col flex-1 min-w-0">
                            <span className="font-medium truncate">África</span>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explora África: naturaleza, cultura y aventura.
                            </p>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li className="cursor-pointer col-span-2">
                      <NavigationMenuLink asChild>
                        <div className="flex flex-row gap-4 items-center">
                          <div className="flex items-center justify-center">
                            <img
                              src="/images/destinations/oceania-destiny.jpg"
                              alt="Europa"
                              className="h-20 w-20 rounded object-cover object-center"
                            />
                          </div>
                          <div className="flex flex-col flex-1 min-w-0">
                            <span className="font-medium truncate">
                              Oceania
                            </span>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Descubre Oceanía: playas paradisíacas, naturaleza
                              exótica y culturas fascinantes en cada isla.
                            </p>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white font-semibold">
                  Ofertas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-2 gap-4 p-4 md:w-[400px] lg:w-[500px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <div>
                          <div className="flex items-center justify-start gap-2 text-lg font-medium">
                            <BadgePercent className="h-12 w-12" />
                            <span>Ofertas de Vuelos</span>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Ofertas exclusivas en vuelos para tu próximo
                            destino.
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <div>
                          <div className="flex items-center justify-start gap-2 text-lg font-medium">
                            <TreePalm className="h-12 w-12" />
                            <span>Paquetes vacacionales</span>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Paquetes con vuelo, hotel y actividades para tu
                            viaje ideal.
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li className="col-span-2">
                      <NavigationMenuLink asChild>
                        <div>
                          <div className="flex items-center justify-start gap-2 text-lg font-medium">
                            <Hourglass className="h-12 w-12" />
                            <span>Ofertas de última hora</span>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Descubre nuestras ofertas de última hora y aprovecha
                            precios especiales en vuelos y paquetes
                            seleccionados. ¡Reserva antes de que se agoten!
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white font-semibold">
                  Experiencias
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-4 p-4 md:w-[400px] lg:w-[500px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <div>
                          <div className="flex items-center justify-start gap-2 text-lg font-medium">
                            <img
                              src="/images/icons/navbar/cultura.png"
                              className="h-8 w-8"
                            />
                            <span>Experiencias culturales</span>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Sumérgete en experiencias culturales auténticas:
                            festivales, gastronomía local y tradiciones únicas
                            en cada destino.
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <div>
                          <div className="flex items-center justify-start gap-2 text-lg font-medium">
                            <img
                              src="/images/icons/navbar/aventura.png"
                              className="h-8 w-8"
                            />
                            <span>Aventura</span>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Vive la aventura: explora selvas, haz senderismo,
                            practica deportes extremos y descubre paisajes
                            impresionantes en destinos únicos.
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <div>
                          <div className="flex items-center justify-start gap-2 text-lg font-semibold">
                            <img
                              src="/images/icons/navbar/chef.png"
                              className="h-8 w-8"
                            />
                            <span>Gastronomía</span>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Disfruta de rutas gastronómicas únicas: prueba
                            sabores locales, participa en talleres culinarios y
                            descubre la cocina auténtica de cada destino.
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <Link
                to="/contact"
                className="text-white hover:underline font-semibold ml-2"
              >
                Contacto
              </Link>
            </NavigationMenuList>
          </NavigationMenu>
        </ul>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuBar && (
            <motion.div
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -20 }}
              className="absolute top-12 left-0 w-full bg-primary-alas-de-plata text-white flex flex-col gap-4 p-4 lg:hidden"
            >
              <NavigationMenu>
                <NavigationMenuList className="flex flex-row gap-4">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semibold text-black">
                      Destinos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-4 p-4 md:w-[400px] lg:w-[500px]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a href="/">
                              <RiAirplayLine className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Vuelo Nacional
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt, deserunt.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-black font-semibold">
                      Ofertas
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-4 p-4 md:w-[400px] lg:w-[500px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <div>
                              <div className="flex items-center justify-start gap-2 text-lg font-medium">
                                <BadgePercent className="h-12 w-12" />
                                <span>Ofertas de Vuelos</span>
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Ofertas exclusivas en vuelos para tu próximo
                                destino.
                              </p>
                            </div>
                          </NavigationMenuLink>
                        </li>
                        <li className="max-sm:col-span-2">
                          <NavigationMenuLink asChild>
                            <div>
                              <div className="flex items-center justify-start gap-2 text-lg font-medium">
                                <TreePalm className="h-12 w-12" />
                                <span>Paquetes vacacionales</span>
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Paquetes con vuelo, hotel y actividades para tu
                                viaje ideal.
                              </p>
                            </div>
                          </NavigationMenuLink>
                        </li>
                        <li className="col-span-2">
                          <NavigationMenuLink asChild>
                            <div>
                              <div className="flex items-center justify-start gap-2 text-lg font-medium">
                                <Hourglass className="h-12 w-12" />
                                <span>Ofertas de última hora</span>
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Descubre nuestras ofertas de última hora y
                                aprovecha precios especiales en vuelos y
                                paquetes seleccionados. ¡Reserva antes de que se
                                agoten!
                              </p>
                            </div>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-black font-semibold">
                      Experiencias
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-4 p-4 md:w-[400px] lg:w-[500px]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a href="/">
                              <RiAirplayLine className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Vuelo Nacional
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt, deserunt.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        {/* User not authenticated */}
        {/* <div className="flex justify-center items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="text-white"
          >
            <Button asChild variant="ghost" className="cursor-pointer">
              <span>Iniciar Sesion</span>
            </Button>
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button asChild className="cursor-pointer">
              <span>Registrarse</span>
            </Button>
          </motion.div>
        </div> */}

        {/* User authenticated */}
        <div className="flex justify-center items-center gap-4">
          <Search className="cursor-pointer" />
          <Menubar
            className="p-0 border-none bg-transparent shadow-none focus:ring-0 focus:outline-none focus-visible:ring-0 h-8 w-8 rounded-full"
            style={{ minWidth: 0, minHeight: 0 }}
          >
            <MenubarMenu>
              <MenubarTrigger
                className="p-0 border-none bg-transparent shadow-none focus:ring-0 focus:outline-none focus-visible:ring-0 active:bg-transparent focus:bg-transparent hover:bg-transparent data-[state=open]:bg-transparent"
                style={{ minWidth: 0, minHeight: 0 }}
              >
                <Globe className="cursor-pointer" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Español</MenubarItem>
                <MenubarItem>Ingles</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Link to="/reservations">
            <Button className="cursor-pointer">Reservar</Button>
          </Link>
          <Menubar
            className="p-0 border-none bg-transparent shadow-none focus:ring-0 focus:outline-none focus-visible:ring-0 h-8 w-8 rounded-full"
            style={{ minWidth: 0, minHeight: 0 }}
          >
            <MenubarMenu>
              <MenubarTrigger
                className="p-0 border-none bg-transparent shadow-none focus:ring-0 focus:outline-none focus-visible:ring-0 active:bg-transparent focus:bg-transparent hover:bg-transparent data-[state=open]:bg-transparent"
                style={{ minWidth: 0, minHeight: 0 }}
              >
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Mi Cuenta <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Configuraciones</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Cerrar Sesion</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
