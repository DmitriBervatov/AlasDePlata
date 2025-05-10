import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import Autoplay from "embla-carousel-autoplay";
import { Map, MapPin, Search } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDestinationSkeleton from "../components/card-destination-skeleton/CardDestinationSkelon";
import CardDestination from "../components/card-destination/CardDestination";
import { continents } from "../data";
import { useGetDestinations } from "../hooks";
import { useDestinationsFilter } from "../store";

const Destinations = () => {
  const { selectedContinents, setSelectedContinents, toggleContinent,clearContinents } =
    useDestinationsFilter();
  const { continent } = useParams();
  const {
    data: destinations,
    isLoading,
    error,
  } = useGetDestinations(selectedContinents);

  useEffect(() => {
    if (continent) setSelectedContinents([continent]);
  }, [continent, setSelectedContinents]);

  if (error) return <div>Error al cargar los destinos</div>;

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col gap-4 mb-4">
        <h1 className="text-4xl font-bold">Destinos</h1>
        <p className="text-2xl font-semibold text-gray-500">
          Explora todos nuestros destinos y encuentra tu próxima aventura
        </p>
      </div>

      <div className="flex gap-4 items-center justify-between">
        <div className="relative w-full max-w-xs">
          <Label
            htmlFor="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <Search className="w-5 h-5" />
          </Label>
          <Input id="search" placeholder="Buscar destinos" className="pl-10" />
        </div>
        <div className="flex gap-4 items-center">
          <Button variant="outline" className="cursor-pointer">
            <MapPin className="w-4 h-4" /> Ver Mapa
          </Button>
        </div>
      </div>

      <Tabs defaultValue="list-destinations" className="w-full mt-4">
        <TabsList className="w-full">
          <TabsTrigger value="list-destinations" className="cursor-pointer">
            Lista de Destinos
          </TabsTrigger>
          <TabsTrigger value="map" className="cursor-pointer">
            Mapa
          </TabsTrigger>
        </TabsList>
        <TabsContent value="list-destinations">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Badge
                variant={
                  selectedContinents.length === 0 ? "default" : "outline"
                }
                onClick={clearContinents}
                className="cursor-pointer"
              >
                Todos
              </Badge>
              {continents.map(({ name, value }) => (
                <Badge
                  key={name}
                  variant={
                    selectedContinents.includes(value) ? "default" : "outline"
                  }
                  onClick={() => toggleContinent(value)}
                  className="cursor-pointer"
                >
                  {name}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <CardDestinationSkeleton key={i} />
                ))
              ) : destinations && destinations.length > 0 ? (
                destinations?.map(({ city, country, id, imageUrl }) => (
                  <CardDestination
                    key={id}
                    city={city}
                    country={country}
                    imageSrc={imageUrl}
                    imageAlt={city}
                    price={250}
                    onViewDestination={() => console.log("Ver destino")}
                  />
                ))
              ) : (
                <div className="col-span-3 text-center text-gray-500 py-12">
                  No se encontraron destinos para este filtro
                </div>
              )}
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>

            <div className="grid grid-cols-3 gap-4">
              {continents.map(({ id, name, imageUrl }) => (
                <div
                  key={id}
                  className="relative h-full rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={imageUrl}
                    alt="America"
                    className="w-full h-64 object-cover"
                  />
                  <div className="flex flex-col absolute bottom-0 left-0 p-4 text-white ">
                    <span className="text-xl font-bold">{name}</span>
                    <span className="text-sm">42 destinos</span>
                  </div>
                </div>
              ))}
            </div>

            <span className="font-bold text-3xl">Destinos populares</span>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem className="basis-1/3">
                  <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/images/destinations/paris-destiny.jpg"
                      alt="Paris"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="text-white font-bold">Paris</span>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/images/destinations/nuevayork-destiny.jpg"
                      alt="Nueva York"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="text-white font-bold">Nueva York</span>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/images/destinations/tokyo-destiny.jpg"
                      alt="Tokyo"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="text-white font-bold">Tokyo</span>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/images/destinations/londres-destiny.jpg"
                      alt="Londres"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="text-white font-bold">Londres</span>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/images/destinations/roma-destiny.jpg"
                      alt="roma"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="text-white font-bold">Roma</span>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </TabsContent>
        <TabsContent value="map">
          <div className="h-[500px] w-full bg-gray-200 flex items-center justify-center">
            <Map className="w-16 h-16 text-gray-400" />
            <p className="text-gray-500">Mapa de destinos no disponible</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Destinations;
