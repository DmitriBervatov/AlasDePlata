import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { Car, DollarSign, Heart, Hotel, Package, Plane } from "lucide-react";
import CarSearchForm from "../components/CarSearchForm/CarSearchForm";
import FlightSearchForm from "../components/FlightSearchForm/FlightSearchForm";
import HotelSearchForm from "../components/HotelSearchForm/HotelSearchForm";
import PackageSearchForm from "../components/PackageSearchForm/PackageSearchForm";

const Reservations = () => {
  return (
    <div className="container mx-auto">
      <div className="my-12 flex flex-col">
        <h1 className="text-4xl font-bold">Reservar</h1>
        <span className="text-lg text-gray-500">
          Encuentra y reserva tu próximo viaje con Alas de Plata
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4">
        <Tabs defaultValue="fly" className="w-full">
          <TabsList className="w-full grid grid-cols-4 bg-muted/50 p-0 h-auto">
            <TabsTrigger
              value="fly"
              className="border-0 data-[state=active]:bg-white rounded-none border-b-2 border-transparent data-[state=active]:border-primary py-4 cursor-pointer"
            >
              <Plane className="w-8 h-8" /> Vuelos
            </TabsTrigger>
            <TabsTrigger
              value="hotels"
              className="border-0 data-[state=active]:bg-white rounded-none border-b-2 border-transparent data-[state=active]:border-primary py-4 cursor-pointer"
            >
              <Hotel className="w-8 h-8" />
              Hoteles
            </TabsTrigger>
            <TabsTrigger
              value="cars"
              className="border-0 data-[state=active]:bg-white rounded-none border-b-2 border-transparent data-[state=active]:border-primary py-4 cursor-pointer"
            >
              <Car className="w-8 h-8" />
              Coches
            </TabsTrigger>
            <TabsTrigger
              value="packages"
              className="border-0 data-[state=active]:bg-white rounded-none border-b-2 border-transparent data-[state=active]:border-primary py-4 cursor-pointer"
            >
              <Package className="w-8 h-8" />
              Paquetes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="fly">
            <FlightSearchForm />
          </TabsContent>
          <TabsContent value="hotels">
            <HotelSearchForm />
          </TabsContent>
          <TabsContent value="cars">
            <CarSearchForm />
          </TabsContent>
          <TabsContent value="packages">
            <PackageSearchForm />
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex flex-row my-20 gap-4">
        <div className="flex flex-col gap-4 bg-white p-4">
          <div className="bg-primary-alas-de-plata/50 w-fit rounded-full p-4">
            <Plane />
          </div>
          <span className="font-bold text-xl">Flexibilidad garantizada</span>
          <p>
            Cambia tus planes sin preocupaciones. Ofrecemos cambios flexibles en
            todas nuestras tarifas.
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-white p-4">
          <div className="bg-primary-alas-de-plata/50 w-fit rounded-full p-4">
            <DollarSign />
          </div>
          <span className="font-bold text-xl">Mejores precios</span>
          <p>
            Garantizamos los mejores precios. Si encuentras un precio más bajo,
            igualaremos la diferencia.
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-white p-4">
          <div className="bg-primary-alas-de-plata/50 w-fit rounded-full p-4">
            <Heart />
          </div>
          <span className="font-bold text-xl">Atención personalizada</span>
          <p>
            Nuestro equipo de atención al cliente está disponible 24/7 para
            ayudarte con cualquier consulta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
