import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { ArrowUp, Calendar, Clock, Plane, User, User2 } from "lucide-react";
import { RiRecordCircleLine } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-8 py-8">
        <div className="flex flex-col gap-4 rounded border p-4 shadow-xl">
          <div>
            <h1 className="font-bold">Mi cuenta</h1>
            <p className="text-gray-500">Bienvenido de nuevo, Juan Pérez</p>
          </div>

          <div className="flex items-center gap-4">
            <User className="h-20 w-20 rounded-full bg-gray-500 p-4" />
            <span>Juan Perez</span>
            <span className="text-gray-500">juan.perez@example.com</span>
          </div>

          <Separator />

          <div className="flex justify-between">
            <span className="font-bold">Nivel de socio</span>
            <span>Gold</span>
          </div>

          <div className="flex justify-between">
            <span className="font-bold">Millas disponibles</span>
            <span>45,680</span>
          </div>

          <div className="flex justify-between">
            <span className="font-bold">Miembros desde</span>
            <span>15/03/2020</span>
          </div>

          <Button className="cursor-pointer w-fit" variant="outline">
            <User2 className="h-5 w-5" /> Mi Perfil
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-semibold">Proximos vuelos</span>
          <div className="flex flex-col gap-4 rounded border p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Plane className="w-10 h-10 p-2 bg-primary-alas-de-plata rounded-full" />
                <div className="flex flex-col ml-2">
                  <span>Vuelo SK1234</span>
                  <span className="text-gray-500">Estado: Confirmado</span>
                </div>
              </div>

              <Button variant="outline" className="cursor-pointer">
                Detalles
              </Button>
            </div>

            <div className="flex justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-bold">MAD</span>
                <span className="text-sm text-gray-500">Madrid</span>
              </div>

              <div className="flex items-center w-full">
                <div className="flex-1 border-t-2 border-dotted border-gray-400"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>

              <div className="flex flex-col">
                <span className="font-bold">JFK</span>
                <span className="text-sm text-gray-500">Nueva York</span>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="flex gap-2 items-center">
                <Calendar className="w-5 h-5" /> 15 de Junio del 2025
              </span>
              <span className="flex gap-2 items-center">
                <Clock className="w-5 h-5" /> 08:30
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded border p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Plane className="w-10 h-10 p-2 bg-primary-alas-de-plata rounded-full" />
                <div className="flex flex-col ml-2">
                  <span>Vuelo SK1234</span>
                  <span className="text-gray-500">Estado: Confirmado</span>
                </div>
              </div>

              <Button variant="outline" className="cursor-pointer">
                Detalles
              </Button>
            </div>

            <div className="flex justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-bold">MAD</span>
                <span className="text-sm text-gray-500">Madrid</span>
              </div>

              <div className="flex items-center w-full">
                <div className="flex-1 border-t-2 border-dotted border-gray-400"></div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>

              <div className="flex flex-col">
                <span className="font-bold">JFK</span>
                <span className="text-sm text-gray-500">Nueva York</span>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="flex gap-2 items-center">
                <Calendar className="w-5 h-5" /> 15 de Junio del 2025
              </span>
              <span className="flex gap-2 items-center">
                <Clock className="w-5 h-5" /> 08:30
              </span>
            </div>
          </div>
        </div>
        <Tabs defaultValue="recent-activity" className="w-full col-span-2">
          <TabsList className="w-full">
            <TabsTrigger value="recent-activity">
              <Clock /> Actividad Reciente
            </TabsTrigger>
            <TabsTrigger value="flight-history">
              <Plane /> Historial de vuelos
            </TabsTrigger>
            <TabsTrigger value="miles">
              <RiRecordCircleLine /> Millas
            </TabsTrigger>
          </TabsList>
          <TabsContent value="recent-activity">
            <div className="flex items-center gap-4 p-4 border-b">
              <ArrowUp className="bg-primary-alas-de-plata w-10 h-10 p-2 rounded-full" />
              <div className="flex flex-col gap-2">
                <span className="font-bold">Millas ganadas - Vuelo SK9012</span>
                <span className="font-semibold">10 de Mayo del 2025</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border-b">
              <ArrowUp className="bg-primary-alas-de-plata w-10 h-10 p-2 rounded-full" />
              <div className="flex flex-col gap-2">
                <span className="font-bold">Millas ganadas - Vuelo SK9012</span>
                <span className="font-semibold">10 de Mayo del 2025</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border-b">
              <ArrowUp className="bg-primary-alas-de-plata w-10 h-10 p-2 rounded-full" />
              <div className="flex flex-col gap-2">
                <span className="font-bold">Millas ganadas - Vuelo SK9012</span>
                <span className="font-semibold">10 de Mayo del 2025</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border-b">
              <ArrowUp className="bg-primary-alas-de-plata w-10 h-10 p-2 rounded-full" />
              <div className="flex flex-col gap-2">
                <span className="font-bold">Millas ganadas - Vuelo SK9012</span>
                <span className="font-semibold">10 de Mayo del 2025</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="flight-history"></TabsContent>
          <TabsContent value="miles"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
