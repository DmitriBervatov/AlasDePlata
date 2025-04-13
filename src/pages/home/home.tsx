import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <motion.div className="h-[30rem] bg-cover bg-center bg-no-repeat bg-[url('/images/airplane/airplane-banner.jpg')]">
        <div className="container mx-auto flex flex-col gap-2 h-[30rem] justify-center items-center text-white">
          <h1 className="font-bold text-5xl">
            Descubre el Mundo con Alas de Plata
          </h1>
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
        <Tabs defaultValue="fly" className="w-[800px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fly">Vuelos</TabsTrigger>
            <TabsTrigger value="hotel">Hoteles</TabsTrigger>
            <TabsTrigger value="packages">Paquetes</TabsTrigger>
          </TabsList>
          <TabsContent value="fly">
            <Card>
              <CardContent className="grid grid-cols-6 gap-4">
                <div className="flex flex-col gap-2 col-span-3">
                  <Label>Origen</Label>
                  <Input placeholder="Ciudad de origen" />
                </div>

                <div className="flex flex-col gap-2 col-span-3">
                  <Label>Destino</Label>
                  <Input placeholder="Ciudad de destino" />
                </div>

                <div className="flex flex-col gap-2 col-span-2">
                  <Label>Fecha de Salida</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal flex items-center justify-start"
                        )}
                      >
                        <CalendarIcon />
                        <span className="text-left">Selecciona una fecha</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex flex-col gap-2 col-span-2">
                  <Label>Fecha de Regreso</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal flex items-center justify-start"
                        )}
                      >
                        <CalendarIcon />
                        <span className="text-left">Selecciona una fecha</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex flex-col gap-2 col-span-2">
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
                          : "Selecciona un pasajero "}
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
                <p>Card content</p>
              </CardContent>
              <CardFooter>
                <p>Card footer</p>
              </CardFooter>
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
                <p>Card content</p>
              </CardContent>
              <CardFooter>
                <p>Card footer</p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
      <div className="container mx-auto flex flex-col gap-8 mt-4">
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
          className="flex items-center justify-center gap-12 my-12"
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

        <div className="flex flex-row items-center justify-center gap-8 my-4">
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
            drag
            whileDrag={{
              scale: 1.05,
            }}
            dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
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
            drag
            whileDrag={{
              scale: 1.05,
            }}
            dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
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
            drag
            whileDrag={{
              scale: 1.05,
            }}
            dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
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
        </div>

        <div className="flex flex-col gap-4 w-[50rem] mx-auto my-10">
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
            <img src="./images/icons/mapamundi.png" alt="avion" />
            <div className="flex flex-col gap-4">
              <span className="uppercase font-bold">
                Explorar Destinos y requisitos de viaje
              </span>

              <p className="font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                doloribus atque dolore animi deserunt, inventore explicabo
                recusandae facilis earum labore tempora magnam rem quae ipsum
                omnis. Debitis vero autem quos.
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
            <img src="./images/icons/mapa-avion-icono.png" alt="mapa" />
            <div className="flex flex-col gap-4">
              <span className="uppercase font-bold">
                Todo lo que necesita en un solo lugar
              </span>
              <p className="font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                doloribus atque dolore animi deserunt, inventore explicabo
                recusandae facilis earum labore tempora magnam rem quae ipsum
                omnis. Debitis vero autem quos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
