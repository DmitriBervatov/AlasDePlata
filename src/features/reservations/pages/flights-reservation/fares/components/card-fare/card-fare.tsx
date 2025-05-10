import { Fare } from "@/features/reservations/types/fare";
import { Button } from "@/shared/ui/button";
import {
  ArrowRight,
  Award,
  Cable,
  Check,
  CircleCheckBig,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

interface CardFareProps {
  fare: Fare;
  recommended: boolean;
  onSelect?: () => void;
}

const CardFare = ({
  fare: { flightId, price, flightClass, flightClassName, benefits },
  recommended = false,
  onSelect,
}: CardFareProps) => {
  return (
    <div
      className={`"flex flex-col gap-2 shadow-lg rounded  ${
        recommended ? "border-2 border-black mb-4 -mt-4 z-10" : "border"
      }`}
    >
      {recommended && (
        <div className="bg-black flex items-center justify-center p-2">
          <span className="text-white">Recomendada</span>
        </div>
      )}
      <div className="flex flex-col gap-4 p-4">
        <span className="font-bold text-xl mb-1">{flightClassName}</span>
        <div className="flex flex-col">
          <span className="font-bold text-2xl">S/{price}</span>
          <span className="text-gray-500">Precio por persona</span>
        </div>
        <ul className="flex flex-col gap-2">
          {benefits.map(({ id, name, value, description }) => (
            <li key={id} className="flex items-center gap-2">
              {value === "Incluido" ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <div className="flex flex-col">
                    <span>{name}</span>
                    <span className="text-sm text-gray-500">{description}</span>
                  </div>
                </>
              ) : (
                <>
                  <X className="w-4 h-4 text-red-500" />
                  <div className="flex flex-col">
                    <span>{name}</span>
                    <span className="text-sm text-gray-500">{description}</span>
                  </div>
                </>
              )}
            </li>
          ))}
          <li className="flex items-center gap-2">
            <Cable className="w-4 h-4 text-gray-500" /> Cambios:{" "}
            {flightClass === "basic"
              ? "Con cargo"
              : flightClass === "recommended"
              ? " Gratuitos con diferencia de tarifa"
              : flightClass === "premium"
              ? "Gratuitos sin cargo"
              : "Con cargo"}
          </li>
          <li className="flex items-center gap-2">
            <CircleCheckBig className="w-4 h-4 text-gray-500" />
            Reembolso:{" "}
            {flightClass === "basic"
              ? "No reembolsable"
              : flightClass === "premium"
              ? "Parcialmente reembolsable"
              : flightClass === "recommended"
              ? "Totalmente reembolsable"
              : "No reembolsable"}
          </li>
          <li className="flex items-center gap-2">
            <Award className="w-4 h-4 text-gray-500" /> Millas:{" "}
            {flightClass === "basic"
              ? "50%"
              : flightClass === "premium"
              ? "75%"
              : "100%"}
          </li>
        </ul>

        <Link to={`/reservations/flights/${flightId}/passengers`}>
          <Button onClick={onSelect} className="cursor-pointer w-full">
            Seleccionar <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardFare;
