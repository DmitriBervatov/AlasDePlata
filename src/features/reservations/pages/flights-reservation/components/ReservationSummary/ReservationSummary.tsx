import { PassengerFormValues } from "@/features/reservations/schema/passengerForm.schema";
import { Fare } from "@/features/reservations/types/fare";
import { AdditionalService } from "@/features/reservations/types/services";
import { formatDateLong } from "@/lib/dateFormat";
import { formatCurrency } from "@/lib/moneyFormat";
import { Separator } from "@/shared/ui/separator";

interface ReservationSummaryProps {
  flight: React.ReactNode;
  date: string;
  passengers: PassengerFormValues[];
  fare: Fare;
  seat?: string;
  seatExtraPrice?: number;
  services?: AdditionalService[];
  passengerBreakdown?: string;
}

const ReservationSummary = ({
  flight,
  date,
  passengers,
  fare,
  seat,
  seatExtraPrice = 0,
  services = [],
  passengerBreakdown,
}: ReservationSummaryProps) => {

  const passengerCount = passengers.length;
  const subtotal = fare.price * passengerCount;
  const servicesTotal = services.reduce((acc, s) => acc + s.price, 0);
  const total = subtotal + servicesTotal + seatExtraPrice;

  return (
    <div className="flex flex-col gap-4 shadow-xl p-4 h-fit">
      <span className="font-bold text-xl">Resumen de la reserva</span>

      <div>
        <span>Vuelo</span>
        <span className="flex items-center gap-2">{flight}</span>
        <span className="text-sm text-gray-500">{formatDateLong(date)}</span>
      </div>

      <div className="flex flex-col">
        <span>Pasajeros</span>
        <span>
          {passengerBreakdown
            ? passengerBreakdown
            : `${passengerCount} pasajero${passengerCount > 1 ? "s" : ""}`}
        </span>
      </div>

      <div className="flex flex-col">
        <span>Tarifa</span>
        <span>{fare.flightClassName}</span>
      </div>

      {seat && (
        <div className="flex flex-col">
          <span>Asiento</span>
          <span>{seat}</span>
          <span className="text-xs text-gray-500">Sin cargo adicional</span>
        </div>
      )}

      {services.length > 0 && (
        <div className="flex flex-col gap-2">
          <span>Servicios adicionales</span>
          {services.map((service, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span>{service.name}</span>
              <span>S/{service.price}</span>
            </div>
          ))}
        </div>
      )}

      <Separator />

      <div>
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        {seat && seatExtraPrice > 0 && (
          <div className="flex items-center justify-between">
            <span>Asiento</span>
            <span>+{formatCurrency(seatExtraPrice)}</span>
          </div>
        )}
        {services.length > 0 && (
          <div className="flex items-center justify-between">
            <span>Servicios adicionales</span>
            <span>+S/{servicesTotal}</span>
          </div>
        )}
        <div className="flex items-center justify-between text-gray-500">
          <span>Tasas e Impuestos</span>
          <span>Incluidos</span>
        </div>
        <div className="flex items-center justify-between mt-1 font-bold">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
};

export default ReservationSummary;
