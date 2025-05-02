import { PageHeader } from "@/shared/page-header";
import { Button } from "@/shared/ui/button";
import {
  ArrowRight,
  Briefcase,
  Coffee,
  Plane,
  Utensils,
  Wifi,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CardInformationFlight, ReservationSummary } from "../components";
import { CardService } from "./components/CardService";

const Services = () => {
  return (
    <div className="container mx-auto">
      <PageHeader
        backTo="/reservations/flights/1/seats"
        backLabel="Volver a asientos"
        title="Servicios adicionales"
        subtitle="Personaliza tu viaje con servicios adicionales"
      />

      <CardInformationFlight
        airline="Alas de Plata"
        flightNumber="AP1234"
        arrivalTime="08:30"
        departureTime="11:45"
        showExtras={false}
        showPriceSection={false}
        farePrice=""
        seatLabel="12A"
      />

      <div className="grid grid-cols-3 gap-4 py-8">
        <div className="flex flex-col col-span-2 gap-4 p-8 shadow-xl">
          <h2 className="font-bold text-xl leading-tight">
            Servicios adicionales disponibles
          </h2>

          <CardService
            title="Equipaje adicional (23kg)"
            description="Añade una maleta facturada de hasta 23kg"
            price="35"
            icon={Briefcase}
          />
          <CardService
            title="Comida a bordo"
            description="Incluye comida caliente y bebida durante el vuelo"
            price="15"
            icon={Utensils}
          />

          <CardService
            title="Wi-Fi a bordo"
            description="Incluye comida caliente y bebida durante el vuelo"
            price="10"
            icon={Wifi}
          />

          <CardService
            title="Embarque prioritario"
            description="Sé de los primeros en embarcar"
            price="8"
            icon={Plane}
          />

          <CardService
            title="Acceso a sala VIP"
            description="Disfruta de la sala VIP antes de tu vuelo"
            price="25"
            icon={Coffee}
          />

          <div className="flex justify-between items-center">
            <span>0 servicios seleccionados</span>
            <Link to="/reservations/flights/1/payment">
              <Button className="cursor-pointer">
                Continua al pago <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>

        <ReservationSummary
          flight={
            <>
              Lima (LM) <ArrowRight className="w-4 h-4" /> Nueva York(JFK)
            </>
          }
          date="15 de Junio del 2025"
          passengers="1 Adulto"
          fare="Óptima"
          seat="24E"
          subtotal="599"
          total="599"
          services={[
            { name: "Equipaje adicional (23kg)", price: 35 },
            { name: "Wi-Fi a bordo", price: 10 },
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
