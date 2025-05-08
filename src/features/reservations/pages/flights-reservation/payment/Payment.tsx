import { useFlightSearch } from "@/features/reservations/store/flightSearch";
import { PageHeader } from "@/shared/page-header";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { Separator } from "@/shared/ui/separator";
import { ArrowRight, CreditCard, Landmark } from "lucide-react";
import { useState } from "react";
import { RiPaypalLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CardInformationFlight, ReservationSummary } from "../components";

const Payment = () => {
  const { selectedFlight } = useFlightSearch();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  return (
    <div className="container mx-auto">
      <PageHeader
        backTo={`/reservations/flights/${selectedFlight!.id}/services`}
        backLabel="Volver a los servicios"
        title="Pago"
        subtitle="Completa el pago para finalizar tu reserva"
      />

      <CardInformationFlight
        airline={selectedFlight!.airline}
        flightNumber={selectedFlight!.flightNumber}
        arrivalTime={selectedFlight!.arrivalTime}
        departureTime={selectedFlight!.departureTime}
        airportCodeDestination={selectedFlight!.airportCodeDestination}
        airportCodeOrigin={selectedFlight!.airportCodeOrigin}
        destinationCity={selectedFlight!.destination}
        originCity={selectedFlight!.origin}
        duration={selectedFlight!.duration}
        showExtras={false}
        showPriceSection={false}
        showFare={false}
      />

      <div className="grid grid-cols-3 gap-4 py-8">
        <div className="flex flex-col col-span-2 gap-8 p-8 shadow-xl">
          <h2 className="font-bold text-xl leading-tight">Método de pago</h2>

          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="border border-gray-300 p-4 rounded flex items-center gap-4">
              <RadioGroupItem
                value="creditCard"
                id="r1"
                className="cursor-pointer"
              />
              <Label htmlFor="r1" className="font-normal cursor-pointer">
                <CreditCard /> Tarjeta de crédito o débito
              </Label>
            </div>
            <div className="border border-gray-300 p-4 rounded flex items-center gap-4">
              <RadioGroupItem
                value="bank-transfer"
                id="r2"
                className="cursor-pointer"
              />
              <Label htmlFor="r2" className="font-normal cursor-pointer">
                <Landmark /> Transferencia bancaria
              </Label>
            </div>
            <div className="border border-gray-300 p-4 rounded flex items-center gap-4">
              <RadioGroupItem
                value="paypal"
                id="r3"
                className="cursor-pointer"
              />
              <Label htmlFor="r3" className="font-normal cursor-pointer">
                <RiPaypalLine className="w-6 h-6" /> PayPal
              </Label>
            </div>
          </RadioGroup>

          <Separator />

          {paymentMethod === "creditCard" && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <Label htmlFor="numberCard" className="font-normal">
                  Número de tarjeta
                </Label>
                <Input id="numberCard" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="flex flex-col gap-4">
                <Label htmlFor="owner-card" className="font-normal">
                  Nombre del titular
                </Label>
                <Input
                  id="owner-card"
                  placeholder="Como aparece en la tarjeta"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-1 flex-col gap-4">
                  <Label className="font-normal" htmlFor="mes">
                    Mes
                  </Label>
                  <Input id="mes" placeholder="MM" />
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <Label className="font-normal" htmlFor="anio">
                    Año
                  </Label>
                  <Input id="anio" placeholder="AA" />
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <Label className="font-normal" htmlFor="cvv">
                    CVV
                  </Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
            </div>
          )}

          <Separator />

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Checkbox id="terms-conditions" className="cursor-pointer" />
              <Label
                htmlFor="terms-conditions"
                className="flex flex-col gap-2 items-start font-normal"
              >
                Acepto los términos y condiciones
                <span className="text-gray-500">
                  He leído y acepto las condiciones de compra, la política de
                  privacidad y las condiciones de transporte.
                </span>
              </Label>
            </div>
            <Link to="/reservations/flights/1/confirmation">
              <Button className="w-full cursor-pointer">
                Pagar y finalizar <ArrowRight />
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

export default Payment;
