import { Button } from "@/components/ui/button";
import {
  Calendar,
  Check,
  Clock,
  Download,
  Home,
  MapPin,
  Plane,
  Printer,
  Share,
} from "lucide-react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center w-[50rem] mx-auto mt-4 p-12 gap-4 shadow-lg">
          <Check className="bg-green-500 rounded-full w-18 h-18 text-white p-2" />
          <h1 className="text-3xl font-bold">¡Reserva confirmada!</h1>
          <p className="text-gray-400 text-xl font-semibold">
            Tu reserva ha sido confirmada exitosamente.
          </p>

          <div className="flex flex-col items-center justify-center">
            <span className="text-md mt-4 text-muted-foreground">
              Codigo de reserva
            </span>
            <span className="font-bold text-xl">CI3390</span>
          </div>
        </div>

        <div className="shadow-lg p-4 rounded w-[50rem] mx-auto my-12">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Plane className="bg-primary-alas-de-plata rounded-full w-8 h-8 p-1" />
              <span>Alas de Plata</span>
              <span className="text-sm text-gray-500">AP123</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="min-w-[120px] text-center">
                    <p className="text-2xl font-bold">08:30</p>
                    <p className="text-sm font-medium">LM</p>
                    <p className="text-xs text-muted-foreground">Lima</p>
                  </div>

                  <div className="flex-1 p-4">
                    <div className="relative">
                      <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-muted-foreground"></div>
                      <div className="absolute left-0 top-1/2 -mt-1.5 h-3 w-3 rounded-full border border-primary bg-background"></div>
                      <div className="absolute right-0 top-1/2 -mt-1.5 h-3 w-3 rounded-full border border-primary bg-primary"></div>
                    </div>
                    <div className="mt-4 text-xs text-center text-muted-foreground">
                      <Clock className="h-3 w-3 inline mr-1" />
                      08:30
                    </div>
                  </div>

                  <div className="min-w-[120px] text-center">
                    <p className="text-2xl font-bold">08:30</p>
                    <p className="text-sm font-medium">LM</p>
                    <p className="text-xs text-muted-foreground">Lima</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      Fecha
                    </div>
                    <p className="font-medium">15 de Junio del 2025</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      Terminal salida
                    </div>
                    <p className="font-medium">T4</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Plane className="h-4 w-4 mr-2" />
                      Asiento
                    </div>
                    <p className="font-medium">14C</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      Terminal llegada
                    </div>
                    <p className="font-medium">T1</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 border-t md:border-l md:border-y-0 md:border-r-0 md:border-1 pt-6 md:pt-0 md:pl-6">
                <h3 className="font-bold mb-4">Pasajero</h3>
                <p className="text-lg font-medium">Juan Perez</p>
                <div className="mt-6 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Recuerda llegar al aeropuerto con al menos 3 horas de
                    antelación para vuelos internacionales.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    No olvides llevar tu documento de identidad o pasaporte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-[50rem] gap-4 mx-auto mb-12">
          <div className="flex gap-4">
            <Button variant="outline" className="cursor-pointer">
              <Download /> Descargar Billete
            </Button>
            <Button variant="outline" className="cursor-pointer">
              <Printer /> Imprimir
            </Button>
            <Button variant="outline" className="cursor-pointer">
              <Share /> Compartir
            </Button>
          </div>
          <Link to="/">
            <Button className="cursor-pointer">
              <Home /> Volver a Inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
