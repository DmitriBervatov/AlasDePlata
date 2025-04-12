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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiCalendar2Line } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div className="h-[30rem] bg-cover bg-center bg-no-repeat bg-[url('/images/airplane-banner.jpg')] relative">
        <div className="container mx-auto flex flex-col gap-2 h-[30rem] justify-center items-center text-white">
          <h1 className="font-bold text-5xl">
            Descubre el Mundo con Alas de Plata
          </h1>
          <span className="text-xl font-semibold">
            Vuelos cómodos, seguros y al mejor precio para tus próximas
            aventuras
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[15rem] w-full max-w-md">
        <Tabs defaultValue="fly" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fly">Vuelos</TabsTrigger>
            <TabsTrigger value="hotel">Hoteles</TabsTrigger>
            <TabsTrigger value="packages">Paquetes</TabsTrigger>
          </TabsList>
          <TabsContent value="fly">
            <Card>
              <CardContent className="grid grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="origin">Origen</Label>
                  <Input
                    type="text"
                    id="origin"
                    placeholder="Ciudad de origen"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="destination">Destino</Label>
                  <Input
                    type="text"
                    id="destination"
                    placeholder="Ciudad de destino"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="destination">Fecha de ida </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="text-left">
                        <RiCalendar2Line />
                        Pick a date
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={undefined}
                        onSelect={undefined}
                        className="rounded-md border"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="destination">Fecha de vuelta</Label>
                  <Input
                    type="text"
                    id="destination"
                    placeholder="Ciudad de destino"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="destination">Pasajeros</Label>
                  <Input
                    type="text"
                    id="destination"
                    placeholder="Ciudad de destino"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Buscar Vuelo</Button>
              </CardFooter>
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
      </div>
    </>
  );
};

export default Home;
