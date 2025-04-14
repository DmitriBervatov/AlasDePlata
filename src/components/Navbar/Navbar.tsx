import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { RiAirplayLine, RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Button } from "../ui/button";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <header className="bg-primary-alas-de-plata px-4 py-2">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-row gap-4 justify-center items-center">
          <div className="flex justify-center items-center gap-4">
            <img src="./images/logo.png" alt="Logo" />
            <h1 className="text-white font-bold">Airline</h1>
          </div>
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
                  Vuelos
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt, deserunt.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white font-semibold">
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt, deserunt.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white font-semibold">
                  Servicios
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nesciunt, deserunt.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <li className="text-white hover:underline font-semibold ml-2">
                Contacto
              </li>
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
              className="absolute top-16 left-0 w-full bg-primary-alas-de-plata text-white flex flex-col gap-4 p-4 lg:hidden"
            >
              <NavigationMenu>
                <NavigationMenuList className="flex flex-row gap-4">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semibold text-black">
                      Vuelos
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
                      Servicios
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
                  <li className="text-white hover:underline font-semibold">
                    Contacto
                  </li>
                </NavigationMenuList>
              </NavigationMenu>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4">
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
