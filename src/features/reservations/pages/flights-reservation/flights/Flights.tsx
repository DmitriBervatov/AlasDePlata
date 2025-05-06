import { useFlightSearch } from "@/features/reservations/store/flightSearch";
import { PageHeader } from "@/shared/page-header";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Label } from "@/shared/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Slider } from "@/shared/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { useState } from "react";
import { CardInformationFlight } from "../components";
import { useFlightsDetailSearch } from "@/features/reservations/hooks/useFlights";
import { parseDate } from "@/lib/dateFormat";

const Flights = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [departureTimeRange, setDepartureTimeRange] = useState([0, 24]);
  const [arrivalTimeRange, setArrivalTimeRange] = useState([0, 24]);

  const flightSearch = useFlightSearch();

  const departureDate = parseDate(flightSearch.departureDate);
  const returnDate = parseDate(flightSearch.returnDate);

  const params = {
    origin: flightSearch.origin,
    destination: flightSearch.destination,
    departureDate: departureDate
      ?  departureDate.toISOString().split("T")[0]
      : "",
    returnDate: returnDate
      ? returnDate.toISOString().split("T")[0]
      : "",
    travelClass: flightSearch.travelClass,
    adults: flightSearch.adults,
    children: flightSearch.children,
    infants: flightSearch.infants,
    tripType: flightSearch.tripType,
  };

  const { data: flights } = useFlightsDetailSearch(params);

  const formatTime = (hour: number) => {
    return `${hour.toString().padStart(2, "0")}:00`;
  };

  function formatHour(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  return (
    <div className="container mx-auto">
      <PageHeader
        backTo="/reservations"
        title="Vuelos de Lima a Nueva York"
        subtitle="15 de Junio del 2025 - 1 Adulto - Económica"
        backLabel="Volver a la busqueda"
      />

      <Tabs defaultValue="fly" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="fly">Vuelo de ida</TabsTrigger>
          <TabsTrigger value="hotels">Vuelo de vuelta</TabsTrigger>
        </TabsList>
        <TabsContent value="fly">
          <div className="grid grid-cols-6 gap-4 mt-4">
            <div className="flex flex-col gap-4 col-span-1 shadow-2xl p-4 rounded h-fit sticky top-8">
              <h3 className="text-3xl font-bold">Filtros</h3>
              <div className="flex flex-col gap-4">
                <span className="font-semibold">Precio</span>
                <Slider
                  defaultValue={[0, 1000]}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between">
                  <span className="text-sm">S/{priceRange[0]}</span>
                  <span className="text-sm">S/{priceRange[1]}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-semibold">Hora de Salida</span>
                <Slider
                  defaultValue={[0, 24]}
                  max={24}
                  step={1}
                  value={departureTimeRange}
                  onValueChange={setDepartureTimeRange}
                />
                <div className="flex justify-between">
                  <span className="text-sm">
                    {formatTime(departureTimeRange[0])}
                  </span>
                  <span className="text-sm">
                    {formatTime(departureTimeRange[1])}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-semibold">Hora de llegada</span>
                <Slider
                  defaultValue={[0, 24]}
                  max={24}
                  step={1}
                  value={arrivalTimeRange}
                  onValueChange={setArrivalTimeRange}
                />
                <div className="flex justify-between">
                  <span className="text-sm">
                    {formatTime(arrivalTimeRange[0])}
                  </span>
                  <span className="text-sm">
                    {formatTime(arrivalTimeRange[1])}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-semibold">Escalas</span>
                <div className="flex gap-4">
                  <Checkbox id="direct" />
                  <Label className="font-normal" htmlFor="direct">
                    Directo
                  </Label>
                </div>
                <div className="flex gap-4">
                  <Checkbox id="one-scale" />
                  <Label className="font-normal" htmlFor="one-scale">
                    1 escala
                  </Label>
                </div>
                <div className="flex gap-4">
                  <Checkbox id="two-or-more" />
                  <Label className="font-normal" htmlFor="two-or-more">
                    2 o más escalas
                  </Label>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-semibold">Aerolineas</span>
                <div className="flex gap-4">
                  <Checkbox id="alas-de-plata" />
                  <Label className="font-normal" htmlFor="alas-de-plata">
                    Alas de Plata
                  </Label>
                </div>
                <div className="flex gap-4">
                  <Checkbox id="others" />
                  <Label className="font-normal" htmlFor="others">
                    Aerolineas asociadas
                  </Label>
                </div>
              </div>

              <Button variant="outline" className="cursor-pointer">
                Aplicar filtros
              </Button>
            </div>

            <div className="col-span-5 rounded p-4">
              <div className="flex justify-between">
                <p>
                  {flights?.length}{" "}
                  <span className="text-gray-500">vuelos encontrados</span>
                </p>
                <div className="flex gap-4">
                  <Label htmlFor="origin">Ordenar por:</Label>
                  <Select>
                    <SelectTrigger className="w-[200px] cursor-pointer">
                      <SelectValue placeholder="Seleccione destino" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Económica</SelectItem>
                      <SelectItem value="dark">Premium Economy</SelectItem>
                      <SelectItem value="system">Business</SelectItem>
                      <SelectItem value="system">Primera</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {flights &&
                flights.map((flight) => (
                  <CardInformationFlight
                    key={flight.id}
                    airline={flight.airline}
                    flightNumber={flight.flightNumber}
                    departureTime={formatHour(flight.departureTime)}
                    arrivalTime={formatHour(flight.arrivalTime)}
                    showFare={false}
                    originCity={flight.origin}
                    destinationCity={flight.destination}
                    flightPrice={flight.flightPrice}
                    duration={flight.duration}
                    airportCodeOrigin={flight.airportCodeOrigin}
                    airportCodeDestination={flight.airportCodeDestination}
                    flight={flight}
                  />
                ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="hotels"></TabsContent>
      </Tabs>
    </div>
  );
};

export default Flights;
