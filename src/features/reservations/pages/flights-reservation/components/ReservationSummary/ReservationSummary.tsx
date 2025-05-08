import { Separator } from "@/shared/ui/separator";

interface Service {
  name: string;
  price: number;
}
interface ReservationSummaryProps {
  flight: React.ReactNode;
  date: string;
  passengers: string;
  fare: string;
  subtotal: string;
  total: string;
  seat?: string;
  services?: Service[];
}

const ReservationSummary = ({
  flight,
  date,
  passengers,
  fare,
  subtotal,
  total,
  seat,
  services = [],
}: ReservationSummaryProps) => {
  return (
    <div className="flex flex-col gap-4 shadow-xl p-4 h-fit">
      <span className="font-bold text-xl">Resumen de la reserva</span>

      <div>
        <span>Vuelo</span>
        <span className="flex items-center gap-2">{flight}</span>
        <span className="text-sm text-gray-500">{date}</span>
      </div>

      <div className="flex flex-col">
        <span>Pasajeros</span>
        <span>{passengers}</span>
      </div>

      <div className="flex flex-col">
        <span>Tarifa</span>
        <span>{fare}</span>
      </div>

      {seat && (
        <div className="flex flex-col">
          <span>Asiento</span>
          <span>{seat}</span>
          {/* <span className="text-xs text-gray-500">Sin cargo adicional</span> */}
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
          <span>S/{subtotal}</span>
        </div>
        {seat && (
          <div className="flex items-center justify-between">
            <span>Asiento</span>
            <span>+S/0</span>
          </div>
        )}
        {services.length > 0 && (
          <div className="flex items-center justify-between">
            <span>Servicios adicionales</span>
            <span>
              +S/{services.reduce((acc, service) => acc + service.price, 0)}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between text-gray-500">
          <span>Tasas e Impuestos</span>
          <span>Incluidos</span>
        </div>
        <div className="flex items-center justify-between mt-1 font-bold">
          <span>Total</span>
          <span>S/{total}</span>
        </div>
      </div>
    </div>
  );
};

export default ReservationSummary;
