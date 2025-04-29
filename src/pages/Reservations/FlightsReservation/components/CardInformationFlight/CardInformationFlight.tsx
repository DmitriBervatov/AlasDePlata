import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Lock, Plane, Timer } from "lucide-react";
import { Link } from "react-router-dom";

interface CardInformationFlightProps {
  flightNumber: string;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  showExtras?: boolean;
  showPriceSection?: boolean;
  showFare?: boolean;
  fareLabel?: string;
  farePrice?: string;
  seatLabel?: string;
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
  farePrice = "S/599",
  seatLabel,
}: CardInformationFlightProps) => {
  return (
    <div className="shadow-lg p-4 rounded">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Plane className="bg-primary-alas-de-plata rounded-full w-8 h-8 p-1" />
          <span>{airline}</span>
          <span className="text-sm text-gray-500">{flightNumber}</span>
        </div>
        {showFare && (
          <span className="text-sm">
            Tarifa: {fareLabel}
            {seatLabel && ` | Asiento: ${seatLabel}`}
            {farePrice && ` - ${farePrice}`}
          </span>
        )}
      </div>
      <Separator className="my-2" />
      <div className="grid grid-cols-2 gap-4 justify-between">
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold">{departureTime}</span>
            <span className="font-normal">LM</span>
            <span className="text-sm text-gray-400">Lima</span>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center w-48">
            <span className="text-gray-500 text-xs flex gap-2">
              <Timer className="w-4 h-4" /> 8h 15m
            </span>
            <div className="border-t border-dashed w-full border-muted-foreground" />
            <span className="text-gray-500 text-xs">Directo</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold">{arrivalTime}</span>
            <span className="font-normal">JFK</span>
            <span className="text-sm text-gray-400">Nueva York</span>
          </div>
        </div>

        {showPriceSection ? (
          <div className="flex flex-col items-end text-sm gap-2">
            <span className="font-bold text-lg">S/499.99</span>
            <span>Precio por persona</span>
            <Link to="/reservations/flights/1/fares">
              <Button className="cursor-pointer">Seleccionar</Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-end justify-center text-sm gap-2">
            <span className="text-gray-500">15 de Junio del 2025</span>
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
