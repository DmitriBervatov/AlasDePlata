import { PageHeader } from "@/shared/page-header";
import { Button } from "@/shared/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CardInformationFlight, ReservationSummary } from "../components";
import SeatMap from "./components/SeatMap/SeatMap";

const seatLetters = ["A", "B", "C", "D", "E", "F"];
const seatRows = Array.from({ length: 30 }, (_, i) => i + 1);

const seatMap: Record<string, "occupied" | "premium" | "emergency" | "normal"> =
  {
    "1A": "premium",
    "1B": "premium",
    "10C": "emergency",
    "15D": "occupied",
  };

const Seats = () => {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  return (
    <div className="container mx-auto">
      <PageHeader
        backLabel="Volver a pasajeros"
        title="Selección de asientos"
        subtitle="Elige tu asiento preferido para el vuelo"
        backTo="/reservations/flights/1/passengers"
      />

      <CardInformationFlight
        airline="Alas de Plata"
        flightNumber="AP1234"
        arrivalTime="08:30"
        departureTime="11:45"
        showExtras={false}
        showPriceSection={false}
        farePrice=""
      />

      <div className="grid grid-cols-3 gap-4 py-8">
        <div className="flex flex-col col-span-2 gap-4 p-8 shadow-xl">
          <h2 className="font-bold text-xl leading-tight">Mapa de asientos</h2>

          <div className="flex items-center justify-center gap-4 col-span-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="bg-gray-300 w-40 h-10 rounded"></div>
              <span>Cabina</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="bg-gray-300 w-16 h-10 rounded"></div>
              <span>Baño</span>
            </div>
          </div>

          <div className=" bg-gray-300 h-2 rounded col-span-4"></div>

          <div className="flex items-center justify-center gap-4 col-span-4">
            <div className="flex items-center justify-center gap-4">
              <div className="border border-gray-500 w-6 h-6 rounded"></div>
              <span>Disponible</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-gray-300 w-6 h-6 rounded"></div>
              <span>Ocupado</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-black w-6 h-6 rounded flex items-center justify-center">
                <span className="text-white font-semibold text-xs">A</span>
              </div>
              <span>Seleccionado</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-yellow-200 border border-yellow-300 w-6 h-6 rounded"></div>
            <span>Asiento premium (+S/30)</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-200 border border-green-300 w-6 h-6 rounded"></div>
            <span>Fila de salida de emergencia (+S/15)</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 col-span-4">
            <SeatMap
              seatRows={seatRows}
              seatLetters={seatLetters}
              seatMap={seatMap}
              selectedSeat={selectedSeat}
              setSelectedSeat={setSelectedSeat}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <span>Asiento seleccionado: </span>
              <span className="font-bold">24E</span>
            </div>
            <Link to="/reservations/flights/1/services">
              <Button>
                Continuar <ArrowRight />
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
        />
      </div>
    </div>
  );
};

export default Seats;
