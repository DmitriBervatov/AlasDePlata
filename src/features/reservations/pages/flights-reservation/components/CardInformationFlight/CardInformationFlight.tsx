import { useFlightSearch } from "@/features/reservations/store/flightSearch";
import { Flight } from "@/features/reservations/types/flight";
import { formatDateLong, formatHour } from "@/lib/dateFormat";
import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";
import { Briefcase, Lock, Timer } from "lucide-react";
import { Link } from "react-router-dom";

interface CardInformationFlightProps {
  flightNumber: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  originCity: string;
  destinationCity: string;
  airportCodeOrigin: string;
  airportCodeDestination: string;
  duration?: string;
  showExtras?: boolean;
  showPriceSection?: boolean;
  showFare?: boolean;
  fareLabel?: string;
  farePrice?: number;
  seatLabel?: string;
  flightPrice?: number;
  flight?: Flight;
}

const CardInformationFlight = ({
  flightNumber,
  airline,
  departureTime,
  arrivalTime,
  showExtras = true,
  showPriceSection = true,
  showFare = true,
  fareLabel = "Óptima",
  farePrice,
  seatLabel,
  originCity,
  destinationCity,
  duration,
  flightPrice,
  airportCodeDestination,
  airportCodeOrigin,
  flight,
}: CardInformationFlightProps) => {
  const { setSelectedFlight } = useFlightSearch();

  return (
    <div className="shadow-lg p-4 rounded">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {/* <Plane className="bg-primary-alas-de-plata rounded-full w-8 h-8 p-1" /> */}
          <img
            src="/images/logo.png"
            alt="airlane"
            className="w-6 h-6 rounded-full"
          />
          <span>{airline}</span>
          <span className="text-sm text-gray-500">{flightNumber}</span>
        </div>
        {showFare && (
          <span className="text-sm">
            Tarifa: {fareLabel}
            {seatLabel && ` | Asiento: ${seatLabel}`}
            {farePrice && ` - S/${farePrice}`}
          </span>
        )}
      </div>
      <Separator className="my-2" />
      <div className="grid grid-cols-2 gap-4 justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold">{formatHour(departureTime)}</span>
            <span className="font-normal">{airportCodeOrigin}</span>
            <span className="text-sm text-gray-400">{originCity}</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center w-48">
            <span className="text-gray-500 text-xs flex gap-2">
              <Timer className="w-4 h-4" /> {duration}
            </span>
            <div className="border-t border-dashed w-full border-muted-foreground" />
            <span className="text-gray-500 text-xs">Directo</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold">{formatHour(arrivalTime)}</span>
            <span className="font-normal">{airportCodeDestination}</span>
            <span className="text-sm text-gray-400">{destinationCity}</span>
          </div>
        </div>

        {showPriceSection ? (
          <div className="flex flex-col items-end text-sm gap-2">
            <span className="font-bold text-lg">S/{flightPrice}</span>
            <span>Precio por persona</span>
            <Link
              to={`/reservations/flights/${flight?.id}/fares`}
              onClick={() => setSelectedFlight(flight as Flight)}
            >
              <Button className="cursor-pointer">Seleccionar</Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-end justify-center text-sm gap-2">
            <span className="text-gray-500">
              {formatDateLong(departureTime)}
            </span>
          </div>
        )}
      </div>
      {showExtras && (
        <>
          <Separator className="my-2" />
          <div className="flex gap-4">
            <span className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Briefcase className="w-4 h-4" /> Equipaje de mano incluido
            </span>
            <span className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Lock className="w-4 h-4" /> Cancelación gratuita hasta 24h antes
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default CardInformationFlight;
