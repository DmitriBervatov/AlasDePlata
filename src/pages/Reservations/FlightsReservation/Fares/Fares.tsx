import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Cable,
  Check,
  CircleCheckBig,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CardInformationFlight } from "../components";

const Fares = () => {
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
          airline="Alas de Plata"
          flightNumber="AP1234"
          arrivalTime="08:30"
          departureTime="11:45"
          showExtras={false}
          showPriceSection={false}
          showFare={false}
        />

        <div className="grid grid-cols-3 gap-4 py-8">
          <div className="flex flex-col gap-2 p-4 shadow-lg rounded">
            <span className="font-bold text-xl mb-1">Básica</span>
            <div className="flex flex-col">
              <span className="font-bold text-2xl">S/499</span>
              <span className="text-gray-500">Precio por persona</span>
            </div>
            <ul>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> Equipaje de mano
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                Equipaje facturado
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                Selección de asiento
              </li>
              <li className="flex items-center gap-2">
                <Cable className="w-4 h-4 text-gray-500" /> Cambios: Con cargo
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig className="w-4 h-4 text-gray-500" />
                Reembolso: No reembolsable
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gray-500" /> Millas: 50%
              </li>
            </ul>
            <Link to="/reservations/flights/1/passengers">
              <Button className="cursor-pointer w-full">
                Seleccionar <ArrowRight />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-2 shadow-lg rounded border-2 border-black">
            <div className="bg-black flex items-center justify-center p-2">
              <span className="text-white">Recomendada</span>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <span className="font-bold text-xl mb-1">Óptima</span>
              <div className="flex flex-col">
                <span className="font-bold text-2xl">S/599</span>
                <span className="text-gray-500">Precio por persona</span>
              </div>
              <ul>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> Equipaje de mano
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Equipaje facturado
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Selección de asiento
                </li>
                <li className="flex items-center gap-2">
                  <Cable className="w-4 h-4 text-gray-500" /> Cambios: Con cargo
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckBig className="w-4 h-4 text-gray-500" />
                  Reembolso: No reembolsable
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gray-500" /> Millas: 50%
                </li>
              </ul>
              <Link to="/reservations/flights/1/passengers">
                <Button className="cursor-pointer w-full">
                  Seleccionar <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 shadow-lg rounded">
            <span className="font-bold text-xl mb-1">Premium</span>
            <div className="flex flex-col">
              <span className="font-bold text-2xl">S/799</span>
              <span className="text-gray-500">Precio por persona</span>
            </div>
            <ul>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> Equipaje de mano
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Equipaje facturado
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Selección de asiento
              </li>
              <li className="flex items-center gap-2">
                <Cable className="w-4 h-4 text-gray-500" /> Cambios: Con cargo
              </li>
              <li className="flex items-center gap-2">
                <CircleCheckBig className="w-4 h-4 text-gray-500" />
                Reembolso: No reembolsable
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gray-500" /> Millas: 50%
              </li>
            </ul>
            <Link to="/reservations/flights/1/passengers">
              <Button className="cursor-pointer w-full">
                Seleccionar <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fares;
