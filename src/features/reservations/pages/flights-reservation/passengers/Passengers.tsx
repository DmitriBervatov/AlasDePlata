import {
  defaultPassengerValues,
  PassengerFormValues,
  passengerSchema,
} from "@/features/reservations/schema/passengerForm.schema";
import { useFlightSearch } from "@/features/reservations/store/flightSearch";
import { getPassengerBreakdown } from "@/features/reservations/utils/passengerBreakdown";
import { PageHeader } from "@/shared/page-header";
import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ArrowRight, CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CardInformationFlight, ReservationSummary } from "../components";

const Passengers = () => {
  const { selectedFlight, setPassengers, selectedFare, passengers, search } =
    useFlightSearch();
  const navigate = useNavigate();
  const form = useForm<PassengerFormValues>({
    resolver: zodResolver(passengerSchema),
    defaultValues: passengers[0] || defaultPassengerValues,
  });

  const onSubmit = (data: PassengerFormValues) => {
    setPassengers([data]);
    navigate(`/reservations/flights/${selectedFlight?.id}/seats`);
  };

  return (
    <div className="container mx-auto">
      <PageHeader
        backLabel="Volver a tarifas"
        title="Información de pasajeros"
        subtitle="Completa los datos de los pasajeros"
        backTo={`/reservations/flights/${selectedFlight?.id}/fares`}
      />
      <CardInformationFlight
        airline={selectedFlight?.airline || ""}
        flightNumber={selectedFlight?.flightNumber || ""}
        arrivalTime={selectedFlight?.arrivalTime || ""}
        departureTime={selectedFlight?.departureTime || ""}
        originCity={selectedFlight?.origin || ""}
        destinationCity={selectedFlight?.destination || ""}
        airportCodeOrigin={selectedFlight?.airportCodeOrigin || ""}
        airportCodeDestination={selectedFlight?.airportCodeDestination || ""}
        duration={selectedFlight?.duration || ""}
        showExtras={false}
        showPriceSection={false}
        showFare={true}
        farePrice={selectedFare?.price}
        fareLabel={selectedFare?.flightClassName}
      />

      <div className="grid grid-cols-4 gap-4 my-4">
        <div className="col-span-3 my-12 p-4 shadow-xl">
          <span className="font-bold text-xl">Pasajero 1: Adulto</span>
          <Form {...form}>
            <form
              className="grid grid-cols-2 gap-8 mt-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombres del pasajero" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellidos</FormLabel>
                    <FormControl>
                      <Input placeholder="Apellidos del pasajero" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Género</FormLabel>
                    <FormControl>
                      <RadioGroup
                        className="flex"
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="male"
                            id="male"
                            className="cursor-pointer"
                          />
                          <Label htmlFor="male">Hombre</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="female"
                            id="female"
                            className="cursor-pointer"
                          />
                          <Label htmlFor="female">Mujer</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="other"
                            id="other"
                            className="cursor-pointer"
                          />
                          <Label htmlFor="other">Otro</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="col-span-2 flex flex-col gap-2">
                <span>Fecha de Nacimiento</span>
                <div className="flex justify-between gap-2">
                  <FormField
                    control={form.control}
                    name="birthDay"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full cursor-pointer">
                              <SelectValue placeholder="Dia" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 31 }, (_, i) => i + 1).map(
                                (day) => (
                                  <SelectItem key={day} value={day.toString()}>
                                    {day}
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="birthMonth"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full cursor-pointer">
                              <SelectValue placeholder="Mes" />
                            </SelectTrigger>
                            <SelectContent>
                              {[
                                "Enero",
                                "Febrero",
                                "Marzo",
                                "Abril",
                                "Mayo",
                                "Junio",
                                "Julio",
                                "Agosto",
                                "Septiembre",
                                "Octubre",
                                "Noviembre",
                                "Diciembre",
                              ].map((month, index) => (
                                <SelectItem
                                  key={month}
                                  value={(index + 1).toString()}
                                >
                                  {month}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="birthYear"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full cursor-pointer">
                              <SelectValue placeholder="Año" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from(
                                { length: 100 },
                                (_, i) => 2025 - i
                              ).map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 col-span-2">
                <span>Documento de identidad</span>
                <div className="grid grid-cols-3 gap-2">
                  <FormField
                    control={form.control}
                    name="documentType"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full cursor-pointer">
                              <SelectValue placeholder="Tipo de documento" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pasaporte">
                                Pasaporte
                              </SelectItem>
                              <SelectItem value="dni">DNI</SelectItem>
                              <SelectItem value="nie">NIE</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="documentNumber"
                    render={({ field }) => {
                      const docType = form.watch("documentType");

                      if (docType === "dni") {
                        return (
                          <FormItem className="col-span-2 w-full">
                            <FormControl>
                              <Input
                                placeholder="Número de documento"
                                inputMode="numeric"
                                maxLength={8}
                                value={field.value}
                                onChange={(e) => {
                                  const value = e.target.value
                                    .replace(/\D/g, "")
                                    .slice(0, 8);
                                  field.onChange(value);
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }

                      return (
                        <FormItem className="col-span-2 w-full">
                          <FormControl>
                            <Input
                              placeholder="Número de documento"
                              maxLength={9}
                              value={field.value}
                              onChange={(e) => {
                                const value = e.target.value
                                  .replace(/[^a-zA-Z0-9]/g, "")
                                  .slice(0, 9);
                                field.onChange(value.toUpperCase());
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
              </div>

              <div className="col-span-2 flex flex-col gap-2">
                <div className="flex justify-between gap-2">
                  <FormField
                    control={form.control}
                    name="documentExpiration"
                    render={({ field }) => (
                      <FormItem className="w-full flex flex-col">
                        <FormLabel>Fecha de caducidad del documento</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className="justify-start text-left w-full cursor-pointer"
                              >
                                <CalendarIcon className="opacity-50 h-4 w-4" />
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Selecciona una fecha</span>
                                )}
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={(date) => field.onChange(date)}
                              initialFocus
                              fromYear={new Date().getFullYear()}
                              toYear={new Date().getFullYear() + 20}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          Selecciona la fecha de caducidad del documento
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="col-span-2 flex gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Correo Electronico</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Celular</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Celular" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-2">
                <Button className="w-full cursor-pointer" type="submit">
                  Continuar a seleccion de asientos <ArrowRight />
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <ReservationSummary
          flight={
            <>
              {selectedFlight?.origin} {selectedFlight?.airportCodeOrigin}
              <ArrowRight className="w-4 h-4" />
              {selectedFlight?.destination}{" "}
              {selectedFlight?.airportCodeDestination}
            </>
          }
          passengerBreakdown={getPassengerBreakdown(search)}
          date={selectedFlight?.departureTime || ""}
          passengers={passengers}
          fare={selectedFare!}
        />
      </div>
    </div>
  );
};

export default Passengers;
