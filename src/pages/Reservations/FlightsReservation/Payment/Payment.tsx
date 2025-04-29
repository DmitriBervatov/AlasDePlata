import { PageHeader } from "@/components/PageHeader";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";
import { CardInformationFlight, ReservationSummary } from "../components";

const Payment = () => {
  return (
    <div className="container mx-auto">
      <PageHeader
        backTo="/reservations/flights/1/services"
        backLabel="Volver a los servicios"
        title="Pago"
        subtitle="Completa el pago para finalizar tu reserva"
      />

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
        <div className="flex flex-col col-span-2 gap-4 p-8 shadow-xl">
          <h2 className="font-bold text-xl leading-tight">Método de pago</h2>

          <div>
            <Checkbox />
            <span>Tarjeta de crédito o débito</span>
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

export default Payment;
