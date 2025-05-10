import { usePayment } from "@/features/reservations/hooks/usePayment";
import {
  initialValues,
  PaymentFormValues,
  paymentSchema,
} from "@/features/reservations/schema/payment.schema";
import { useFlightSearch } from "@/features/reservations/store/flightSearch";
import { PageHeader } from "@/shared/page-header";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { Separator } from "@/shared/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CreditCard } from "lucide-react";
import { useForm } from "react-hook-form";
import { RiPaypalLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { CardInformationFlight, ReservationSummary } from "../components";

const Payment = () => {
  const {
    selectedFlight,
    selectedFare,
    passengers,
    selectedSeat,
    selectedSeatExtraPrice,
    selectedServices,
  } = useFlightSearch();
  const navigate = useNavigate();
  const { mutate: processPayment, isPending } = usePayment();

  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: initialValues,
    mode: "onChange",
  });

  const onSubmit = (data: PaymentFormValues) => {
    if (
      !selectedFlight ||
      !selectedFare ||
      !passengers.length ||
      !selectedSeat
    ) {
      toast.error("Faltan datos de la reserva.");
      return;
    }

    const payload = {
      payment: data,
      reservation: {
        flightId: selectedFlight.id,
        fareId: selectedFare.id,
        passengers,
        seat: selectedSeat,
        services: selectedServices.map((s) =>
          s.additionalService ? s.additionalService.id : s.id
        ),
      },
    };

    console.log(payload);

    processPayment(data, {
      onSuccess: () => {
        toast.success("Pago realizado con éxito");
        // reset();
        navigate(`/reservations/flights/${selectedFlight?.id}/confirmation`);
      },
      onError: () => {
        toast.error("Error procesando el pago. Intenta nuevamente");
      },
    });
  };

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

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-8"
            >
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex flex-col gap-4"
                      disabled={isPending}
                    >
                      <label
                        htmlFor="creditCard"
                        className={`select-none border border-gray-300 p-4 rounded flex items-center gap-4 ${
                          isPending ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                      >
                        <RadioGroupItem
                          id="creditCard"
                          value="CREDIT_CARD"
                          className="cursor-pointer"
                          disabled={isPending}
                        />
                        <span className="font-normal flex items-center gap-2">
                          <CreditCard /> Tarjeta de crédito o débito
                        </span>
                      </label>
                      <label
                        htmlFor="bank-transfer"
                        className={`select-none border border-gray-300 p-4 rounded flex items-center gap-4 ${
                          isPending ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                      >
                        <RadioGroupItem
                          id="bank-transfer"
                          value="BANK_TRANSFER"
                          className="cursor-pointer"
                          disabled={isPending}
                        />
                        <span className="font-normal flex items-center gap-2">
                          <CreditCard /> Transferencia bancaria
                        </span>
                      </label>
                      <label
                        htmlFor="paypal"
                        className={`select-none border border-gray-300 p-4 rounded flex items-center gap-4 ${
                          isPending ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                      >
                        <RadioGroupItem
                          id="paypal"
                          value="PAYPAL"
                          className="cursor-pointer"
                          disabled={isPending}
                        />
                        <span className="font-normal flex items-center gap-2">
                          <RiPaypalLine className="w-6 h-6" /> PayPal
                        </span>
                      </label>
                    </RadioGroup>
                  </FormItem>
                )}
              />

              <Separator />

              {form.watch("paymentMethod") === "CREDIT_CARD" && (
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="numberCard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número de tarjeta</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="1234 5678 9012 3456"
                            {...field}
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ownerCard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre del titular</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Como aparece en la tarjeta"
                            {...field}
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-4">
                    <FormField
                      control={form.control}
                      name="month"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Mes</FormLabel>
                          <FormControl>
                            <Input placeholder="MM" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Año</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="AA"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cvv"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>CVV</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="123"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              <Separator />

              <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-start gap-4">
                      <Checkbox
                        id="terms-conditions"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={isPending}
                      />

                      <FormLabel
                        htmlFor="terms-conditions"
                        className="flex flex-col gap-2 items-start font-normal"
                      >
                        Acepto los términos y condiciones
                        <span className="text-xs text-gray-500">
                          He leído y acepto las condiciones de compra, la
                          política de privacidad y las condiciones de
                          transporte.
                        </span>
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={
                  isPending ||
                  !form.watch("termsAccepted") ||
                  !form.formState.isValid
                }
              >
                {isPending ? "Procesando..." : "Pagar y finalizar"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </Form>
        </div>

        <ReservationSummary
          flight={
            <>
              {selectedFlight?.origin} ({selectedFlight?.airportCodeOrigin})
              <ArrowRight className="w-4 h-4" />
              {selectedFlight?.destination} (
              {selectedFlight?.airportCodeDestination}K)
            </>
          }
          passengers={passengers}
          seat={selectedSeat}
          date={selectedFlight!.departureTime}
          fare={selectedFare!}
          seatExtraPrice={selectedSeatExtraPrice}
          services={selectedServices}
        />
      </div>
    </div>
  );
};

export default Payment;
