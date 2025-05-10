import { useSeatMap } from "@/features/reservations/hooks/useSeatMap";
import { useFlightSearch } from "@/features/reservations/store/flightSearch";
import {
  Seat,
  SeatStatus,
  SeatType,
} from "@/features/reservations/types/seats";
import { PageHeader } from "@/shared/page-header";
import { Button } from "@/shared/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CardInformationFlight, ReservationSummary } from "../components";
import SeatMap from "./components/SeatMap/SeatMap";
import { getPassengerBreakdown } from "@/features/reservations/utils/passengerBreakdown";

const Seats = () => {
  const { selectedFlight, selectedSeat, setSelectedSeat, selectedFare, passengers, search } =
    useFlightSearch();
  const { data: seats } = useSeatMap(selectedFlight!.id);

  const seatRows =
    seats && seats.length > 0
      ? Array.from(
          new Set(
            seats.map((seat: Seat) => Number(seat.seatNumber.match(/\d+/)?.[0]))
          )
        ).sort((a, b) => a - b)
      : [];

  const seatLetters =
    seats && seats.length > 0
      ? Array.from(
          new Set(
            seats.map((seat: Seat) => seat.seatNumber.replace(/[0-9]/g, ""))
          )
        ).sort()
      : [];

  const seatMap: Record<
    string,
    { seatType: SeatType; seatStatus: SeatStatus; extraPrice: number }
  > = {};
  seats?.forEach((seat: Seat) => {
    seatMap[seat.seatNumber] = {
      seatType: seat.seatType,
      seatStatus: seat.seatStatus,
      extraPrice: seat.extraPrice,
    };
  });

  const seatExtraPrice = selectedSeat && seatMap[selectedSeat] ? seatMap[selectedSeat].extraPrice : 0;

  const handleSelectSeat = (seatId: string) => {
    const extraPrice = seatMap[seatId]?.extraPrice ?? 0;
    setSelectedSeat(seatId, extraPrice);
  }

  return (
    <div className="container mx-auto">
      <PageHeader
        backLabel="Volver a pasajeros"
        title="Selección de asientos"
        subtitle="Elige tu asiento preferido para el vuelo"
        backTo={`/reservations/flights/${selectedFlight?.id}/passengers`}
      />

      <CardInformationFlight
        airline={selectedFlight!.airline}
        flightNumber={selectedFlight!.flightNumber}
        arrivalTime={selectedFlight!.arrivalTime}
        departureTime={selectedFlight!.departureTime}
        showExtras={false}
        showPriceSection={false}
        duration={selectedFlight!.duration}
        airportCodeDestination={selectedFlight!.airportCodeDestination}
        airportCodeOrigin={selectedFlight!.airportCodeOrigin}
        destinationCity={selectedFlight!.destination}
        originCity={selectedFlight!.origin}
        fareLabel={selectedFare?.flightClassName}
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
              selectedSeat={selectedSeat!}
              setSelectedSeat={handleSelectSeat}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <span>Asiento seleccionado: </span>
              <span className="font-bold">24E</span>
            </div>
            <Link to={`/reservations/flights/${selectedFlight?.id}/services`}>
              <Button>
                Continuar <ArrowRight />
              </Button>
            </Link>
          </div>
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
          date={selectedFlight!.departureTime}
          seat={selectedSeat}
          seatExtraPrice={seatExtraPrice}
          passengerBreakdown={getPassengerBreakdown(search)}
          fare={selectedFare!}
          passengers={passengers}
        />
      </div>
    </div>
  );
};

export default Seats;
