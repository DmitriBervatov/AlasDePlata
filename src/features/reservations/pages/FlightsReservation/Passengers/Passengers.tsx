import { PageHeader } from "@/shared/page-header";
import { Button } from "@/shared/ui/button";
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
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CardInformationFlight, ReservationSummary } from "../components";

const Passengers = () => {
  return (
    <div className="container mx-auto">
      <PageHeader
        backLabel="Volver a tarifas"
        title="Información de pasajeros"
        subtitle="Completa los datos de los pasajeros"
        backTo="/reservations/flights/1/fares"
      />
      <CardInformationFlight
        airline="Alas de Plata"
        flightNumber="AP1234"
        arrivalTime="08:30"
        departureTime="11:45"
        showExtras={false}
        showPriceSection={false}
      />

      <div className="grid grid-cols-4 gap-4 my-4 ">
        <div className="col-span-3 my-12 p-4 shadow-xl">
          <span className="font-bold text-xl">Pasajero 1: Adulto</span>

          <div className="grid grid-cols-2 gap-8 mt-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input id="firstName" placeholder="Nombres del pasajero" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="lastName">Apellidos</Label>
              <Input id="lastName" placeholder="Apellidos del pasajero" />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <span>Genero</span>
              <RadioGroup defaultValue="man" className="flex">
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
            </div>

            <div className="col-span-2 flex flex-col gap-2">
              <span>Fecha de Nacimiento</span>
              <div className="flex justify-between gap-2">
                <Select>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Dia" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <SelectItem key={day} value={day.toString()}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
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
                      <SelectItem key={month} value={(index + 1).toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Año" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 100 }, (_, i) => 2025 - i).map(
                      (year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-2 col-span-2">
              <span>Documento de identidad</span>
              <div className="grid grid-cols-3 gap-2">
                <Select>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Tipo de documento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pasaporte">Pasaporte</SelectItem>
                    <SelectItem value="dni">DNI</SelectItem>
                    <SelectItem value="nie">NIE</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Número de documento"
                  className="w-full col-span-2"
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-col gap-2">
              <span>Fecha de caducidad del documento</span>
              <div className="flex justify-between gap-2">
                <Select>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Dia" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <SelectItem key={day} value={day.toString()}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
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
                      <SelectItem key={month} value={(index + 1).toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Año" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 100 }, (_, i) => 2025 - i).map(
                      (year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Correo Electronico</Label>
              <Input
                id="email"
                placeholder="Email"
                className="w-full col-span-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Celular</Label>
              <Input
                id="phone"
                placeholder="Celular"
                className="w-full col-span-2"
              />
            </div>

            <Link to="/reservations/flights/1/seats" className="col-span-2">
              <Button className="w-full cursor-pointer">
                Continuar a seleccion de asientos <ArrowRight />
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
          subtotal="599"
          total="599"
        />
        {/* <div className="flex flex-col gap-4 shadow-xl p-4 h-fit">
          <span className="font-bold text-xl">Resumen de la reserva</span>

          <div>
            <span>Vuelo</span>
            <span className="flex items-center gap-2">
              Lima (LM) <ArrowRight className="w-4 h-4" /> Nueva York(JFK)
            </span>
            <span className="text-sm text-gray-500">15 de Junio del 2025</span>
          </div>

          <div className="flex flex-col">
            <span>Pasajeros</span>
            <span>1 Adulto</span>
          </div>

          <div className="flex flex-col">
            <span>Tarifa</span>
            <span>Óptima</span>
          </div>

          <Separator />

          <div>
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>S/599</span>
            </div>
            <div className="flex items-center justify-between text-gray-500">
              <span>Tasas e Impuestos</span>
              <span>Incluidos</span>
            </div>
            <div className="flex items-center justify-between mt-1 font-bold">
              <span>Total</span>
              <span>S/599</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Passengers;
