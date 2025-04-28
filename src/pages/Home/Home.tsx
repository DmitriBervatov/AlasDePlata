import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const passengers = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
];

const Home = () => {
  const [dateOrigin, setDateOrigin] = useState<Date | undefined>(undefined);
  const [dateEnd, setDateEnd] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="bg-gray-100">
      <motion.div className="h-[30rem] bg-cover bg-center bg-no-repeat bg-[url('/images/airplane/airplane-banner.jpg')]">
        <div className="container mx-auto max-sm:p-8 flex flex-col gap-2 h-[30rem] justify-center items-center text-white">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-5xl"
          >
            Descubre el Mundo con Alas de Plata
          </motion.h1>
          <span className="text-xl font-semibold">
            Vuelos cómodos, seguros y al mejor precio para tus próximas
            aventuras
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          translateY: -50,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          scale: 1,
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
        className="bottom-0 left-1/2 transform flex items-center justify-center -translate-y-6 mx-auto"
      >
        <Tabs
          defaultValue="fly"
          className="w-[45rem] max-md:w-[28rem] max-sm:w-[22rem]"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fly">Vuelos</TabsTrigger>
            <TabsTrigger value="hotel">Hoteles</TabsTrigger>
            <TabsTrigger value="packages">Paquetes</TabsTrigger>
          </TabsList>
          <TabsContent value="fly">
            <Card className="">
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  gap-4">
                <div className="flex flex-col gap-2 lg:col-span-3">
                  <Label>Origen</Label>
                  <Input placeholder="Ciudad de origen" />
                </div>

                <div className="flex flex-col gap-2 lg:col-span-3">
                  <Label>Destino</Label>
                  <Input placeholder="Ciudad de destino" />
                </div>

                <div className="flex flex-col gap-2 lg:col-span-2">
                  <Label>Fecha de Salida</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal flex items-center justify-start cursor-pointer"
                        )}
                      >
                        {dateOrigin ? (
                          format(dateOrigin, "dd/MM/yyyy")
                        ) : (
                          <>
                            <CalendarIcon />
                            <span className="text-left">
                              Selecciona una fecha
                            </span>
                          </>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateOrigin}
                        onSelect={setDateOrigin}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex flex-col gap-2 lg:col-span-2">
                  <Label>Fecha de Regreso</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal flex items-center justify-start cursor-pointer"
                        )}
                      >
                        {dateEnd ? (
                          format(dateEnd, "dd/MM/yyyy")
                        ) : (
                          <>
                            <CalendarIcon />
                            <span className="text-left">
                              Selecciona una fecha
                            </span>
                          </>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateEnd}
                        onSelect={setDateEnd}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex flex-col gap-2 lg:col-span-2">
                  <Label>Pasajeros</Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                      >
                        {value
                          ? passengers.find(
                              (passenger) => passenger.value === value
                            )?.label
                          : "Cantidad"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search Passenger" />
                        <CommandList>
                          <CommandEmpty>No passengers found</CommandEmpty>
                          <CommandGroup>
                            {passengers.map((passenger) => (
                              <CommandItem
                                key={passenger.value}
                                value={passenger.value}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    value === passenger.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {passenger.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="hotel">
            <Card>
              <CardHeader>
                <CardTitle>
                  Bienvenido a Alas de Plata, tu agencia de viajes de confianza.
                </CardTitle>
                <CardDescription>Card description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere praesentium vero magni voluptate ea necessitatibus?
                  Magni voluptatem atque alias a maxime consectetur dolore quos
                  vel qui maiores, quidem, placeat eum!
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="packages">
            <Card>
              <CardHeader>
                <CardTitle>
                  Bienvenido a Alas de Plata, tu agencia de viajes de confianza.
                </CardTitle>
                <CardDescription>Card description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, ad. Omnis et veniam in! Iste est, cum eaque modi
                  libero repudiandae eum dolores, neque quaerat quae nihil quas!
                  Corrupti, delectus.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
      <div className="container mx-auto flex flex-col gap-8 mt-4 p-4">
        <motion.h2
          initial={{
            opacity: 0,
            translateY: -50,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            scale: 1,
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="uppercase text-center text-primary-alas-de-plata font-bold text-xl"
        >
          La experiencia de cliente de alas de plata
        </motion.h2>

        <motion.h3
          initial={{
            opacity: 0,
            translateY: -50,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            scale: 1,
          }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center text-primary-alas-de-plata font-bold text-5xl"
        >
          Brindándole apoyo en su viaje
        </motion.h3>

        <motion.div
          initial={{
            opacity: 0,
            translateY: -50,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-12 my-12 p-4"
        >
          <img src="./images/icons/airplane-img-1.png" alt="icon-plane" />
          <div className="flex flex-col w-[42rem] gap-4">
            <span className="uppercase text-primary-alas-de-plata font-bold text-xl">
              ¿Puedo Cancelar/Cambiar mi vuelo?
            </span>
            <p className="text-primary-alas-de-plata font-semibold">
              Comprendemos que sus planes pueden cambiar. En unos pocos pasos
              sencillos puede cancelar antes de la salida o cambiar su vuelo en
              delta.com. Conozca más.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 my-4">
          <motion.div
            initial={{
              opacity: 0,
              translateY: -50,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              scale: 1,
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex flex-col w-[20rem] text-primary-alas-de-plata gap-4"
          >
            <img
              src="./images/airplane/airplane-adventure.jpg"
              alt="airplane adventure"
              className="w-full h-40"
              draggable="false"
            />
            <div className="flex flex-col mx-4">
              <span className="font-bold uppercase">
                ¿Listo para la aventura?
              </span>
              <p className="font-semibold text-justify">
                Usted merece llegar renovado, así que póngase cómodo en una de
                nuestras lujosas cabinas, relájese con su comida y bebida
                favoritas, y disfrute de una amplia variedad de opciones de
                entretenimiento gratuito.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              translateY: -50,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              scale: 1,
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex flex-col w-[20rem] text-primary-alas-de-plata gap-4"
          >
            <img
              src="./images/airplane/airplane-premium.jpg"
              alt="airplane adventure"
              className="w-full h-40"
              draggable="false"
            />
            <div className="flex flex-col mx-4">
              <span className="font-bold uppercase">
                Vive la experiencia premium
              </span>
              <p className="font-semibold text-justify">
                Disfruta de un servicio exclusivo con comodidades de primera
                clase, atención personalizada y detalles que harán de tu viaje
                una experiencia inolvidable.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              translateY: -50,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              scale: 1,
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="flex flex-col w-[20rem] text-primary-alas-de-plata gap-4"
          >
            <img
              src="./images/airplane/airplane-experience.png"
              alt="airplane adventure"
              className="w-full h-40"
              draggable="false"
            />
            <div className="flex flex-col mx-4">
              <span className="font-bold uppercase">
                Servicio de calidad garantizado
              </span>
              <p className="font-semibold text-justify">
                En Alas de Plata, nos esforzamos por ofrecer un servicio de
                calidad excepcional, asegurándonos de que cada detalle de tu
                viaje sea perfecto y memorable.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 mx-auto my-10 p-4">
          <motion.div
            initial={{
              opacity: 0,
              translateY: -50,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              scale: 1,
            }}
            className="flex justify-center gap-12 mt-12 text-primary-alas-de-plata"
          >
            <img
              src="./images/icons/mapamundi.png"
              alt="avion"
              className="w-40 h-40 max-lg:h-20 max-lg:w-20"
            />
            <div className="flex flex-col gap-4 w-2/4">
              <span className="uppercase font-bold">Explorar Destinos</span>
              <p className="font-semibold">
                Descubre destinos fascinantes y prepárate para tu próxima
                aventura con Alas de Plata.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              translateY: -50,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              scale: 1,
            }}
            className="flex justify-center gap-12 mt-12 text-primary-alas-de-plata"
          >
            <img
              src="./images/icons/mapamundi.png"
              alt="avion"
              className="w-40 h-40 max-lg:h-20 max-lg:w-20"
            />
            <div className="flex flex-col gap-4 w-2/4">
              <span className="uppercase font-bold">
                Todo lo que necesita en un solo lugar
              </span>
              <p className="font-semibold">
                Encuentra todo lo que necesitas para planificar tu viaje ideal
                con Alas de Plata. Desde vuelos y hoteles hasta paquetes
                personalizados, te ofrecemos una experiencia completa para que
                disfrutes de tus aventuras sin preocupaciones.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              translateY: -50,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              scale: 1,
            }}
            className="flex justify-center gap-12 mt-12 text-primary-alas-de-plata"
          >
            <div className="flex flex-col gap-4"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
