import { useFaresByFlightId } from "@/features/reservations/hooks/useFares";
import { useFlightSearch } from "@/features/reservations/store/flightSearch";
import { PageHeader } from "@/shared/page-header";
import { useNavigate, useParams } from "react-router-dom";
import { CardInformationFlight } from "../components";
import CardFare from "./components/card-fare/card-fare";

const Fares = () => {
  const { flightId } = useParams<{ flightId: string }>();
  const { selectedFlight, setSelectedFare } = useFlightSearch();
  const { data: fares } = useFaresByFlightId(flightId ? Number(flightId) : 0);
  const navigate = useNavigate();

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
        backLabel="Volver a los resultados"
        backTo="/reservations/flights"
        title="Selecciona tu tarifa"
        subtitle="Elige la tarifa que mejor se adapte a tus necesidades"
      />

      <div className="flex flex-col gap-4">
        <CardInformationFlight
          airline={selectedFlight?.airline || ""}
          originCity={selectedFlight?.origin || ""}
          destinationCity={selectedFlight?.destination || ""}
          flightNumber={selectedFlight?.flightNumber || ""}
          duration={selectedFlight?.duration || ""}
          arrivalTime={formatHour(selectedFlight?.arrivalTime || "")}
          departureTime={formatHour(selectedFlight?.departureTime || "")}
          airportCodeOrigin={selectedFlight?.airportCodeOrigin || ""}
          airportCodeDestination={selectedFlight?.airportCodeDestination || ""}
          showExtras={false}
          showPriceSection={false}
          showFare={false}
        />

        <div className="grid grid-cols-3 gap-4 py-8">
          {fares?.map((fare, idx) => (
            <CardFare
              key={fare.id}
              fare={fare}
              recommended={idx === 0}
              onSelect={() => {
                setSelectedFare(fare);
                navigate(`/reservations/flights/${fare.flightId}/passengers`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fares;
