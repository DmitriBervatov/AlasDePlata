import { useServices } from "@/features/reservations/hooks/useServices";
import { useFlightSearch } from "@/features/reservations/store/flightSearch";
import { FlightAdditionalService } from "@/features/reservations/types/services";
import iconMap from "@/features/reservations/utils/serviceIcons";
import { PageHeader } from "@/shared/page-header";
import { Button } from "@/shared/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { CardInformationFlight, ReservationSummary } from "../components";
import { CardService } from "./components/CardService";

const Services = () => {
  const {
    selectedFlight,
    selectedSeat,
    selectedServices,
    setSelectedServices,
    selectedFare,
    passengers,
  } = useFlightSearch();
  const { data: services } = useServices(selectedFlight?.id);

  const toggleService = (service: FlightAdditionalService) => {
    if (selectedServices.some((s) => s.id === service.id)) {
      setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <div className="container mx-auto">
      <PageHeader
        backTo={`/reservations/flights/${selectedFlight?.id}/seats`}
        backLabel="Volver a asientos"
        title="Servicios adicionales"
        subtitle="Personaliza tu viaje con servicios adicionales"
      />

      <CardInformationFlight
        airline={selectedFlight?.airline || ""}
        flightNumber={selectedFlight?.flightNumber || ""}
        arrivalTime={selectedFlight?.arrivalTime || ""}
        departureTime={selectedFlight?.departureTime || ""}
        showExtras={false}
        showPriceSection={false}
        seatLabel={selectedSeat || ""}
        airportCodeDestination={selectedFlight?.destination || ""}
        airportCodeOrigin={selectedFlight?.origin || ""}
        destinationCity={selectedFlight?.airportCodeDestination || ""}
        originCity={selectedFlight?.airportCodeOrigin || ""}
      />

      <div className="grid grid-cols-3 gap-4 py-8">
        <div className="flex flex-col col-span-2 gap-4 p-8 shadow-xl">
          <h2 className="font-bold text-xl leading-tight">
            Servicios adicionales disponibles
          </h2>

          {services?.map((service) => (
            <CardService
              key={service.id}
              title={service.additionalService.name}
              description={service.additionalService.description}
              price={service.additionalService.price}
              icon={iconMap[service.additionalService.icon] || Briefcase}
              checked={selectedServices.some((s) => s.id === service.id)}
              onCheckedChange={() => toggleService(service)}
            />
          ))}

          <div className="flex justify-between items-center">
            <span>
              {selectedServices.length} servicio
              {selectedServices.length !== 1 ? "s" : ""} seleccionado
              {selectedServices.length !== 1 ? "s" : ""}
            </span>
            <Link to={`/reservations/flights/${selectedFlight?.id}/payment`}>
              <Button className="cursor-pointer">
                Continua al pago <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>

        <ReservationSummary
          flight={
            <>
              {selectedFlight?.origin} {selectedFlight?.airportCodeOrigin}
              <ArrowRight className="w-4 h-4" />
              {selectedFlight?.destination}{" "}
              {selectedFlight?.airportCodeDestination}
            </>
          }
          date={selectedFlight!.departureTime}
          passengers={passengers.length.toString()}
          fare={selectedFare!.flightClassName}
          seat={selectedSeat}
          subtotal={selectedFare!.price}
          total={selectedFare!.price}
        />
      </div>
    </div>
  );
};

export default Services;
