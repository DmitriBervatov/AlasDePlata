import {
  defaultPassengerValues,
  PassengerFormValues,
  passengerSchema,
} from "@/features/reservations/schema/passengerForm.schema";
import { useFlightSearch } from "@/features/reservations/store/flightSearch";
import { PageHeader } from "@/shared/page-header";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CardInformationFlight, ReservationSummary } from "../components";

const Passengers = () => {
  const { selectedFlight, setPassengers, selectedFare } = useFlightSearch();
  const navigate = useNavigate();
  const form = useForm<PassengerFormValues>({
    resolver: zodResolver(passengerSchema),
    defaultValues: defaultPassengerValues,
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
                            value="man"
                            id="man"
                            className="cursor-pointer"
                          />
                          <Label htmlFor="man">Hombre</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="woman"
                            id="woman"
                            className="cursor-pointer"
                          />
                          <Label htmlFor="woman">Mujer</Label>
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
                    render={({ field }) => (
                      <FormItem className="col-span-2 w-full">
                        <FormControl>
                          <Input placeholder="Número de documento" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="col-span-2 flex flex-col gap-2">
                <span>Fecha de caducidad del documento</span>
                <div className="flex justify-between gap-2">
                  <FormField
                    control={form.control}
                    name="documentExpDay"
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
                    name="documentExpMonth"
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
                    name="documentExpYear"
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

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-2">
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
                  <FormItem className="col-span-2">
                    <FormLabel>Celular</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Celular" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
              Lima (LM) <ArrowRight className="w-4 h-4" /> Nueva York(JFK)
            </>
          }
          date="15 de Junio del 2025"
          passengers="1 Adulto"
          fare="Óptima"
          subtotal="599"
          total="599"
        />
      </div>
    </div>
  );
};

export default Passengers;
