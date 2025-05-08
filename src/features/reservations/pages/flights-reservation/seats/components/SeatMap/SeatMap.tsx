import { SeatStatus, SeatType } from "@/features/reservations/types/seats";
import React from "react";

interface SeatMapProps {
  seatRows: number[];
  seatLetters: string[];
  seatMap: Record<string, { seatType: SeatType; seatStatus: SeatStatus }>;
  selectedSeat: string | null;
  setSelectedSeat: (seat: string) => void;
}

const SeatMap = ({
  seatLetters,
  seatMap,
  seatRows,
  selectedSeat,
  setSelectedSeat,
}: SeatMapProps) => {
  const getSeatInfo = (
    row: number,
    letter: string
  ): { seatType: SeatType; seatStatus: SeatStatus } => {
    return (
      seatMap[`${row}${letter}`] || {
        seatType: "normal",
        seatStatus: "available",
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 overflow-x-auto">
      <div className="flex gap-2 items-center mb-1">
        <span className="w-6" />
        {/* Espacio para alinear con los números de fila */}
        {seatLetters.map((letter, index) => (
          <React.Fragment key={letter}>
            {index === 3 && <span className="w-4" />}
            <span className="w-8 text-center text-xs text-gray-500">
              {letter}
            </span>
          </React.Fragment>
        ))}
      </div>
      {seatRows.map((row) => (
        <div key={row} className="flex gap-2 items-center">
          <span className="w-6 text-right text-xs text-gray-500">{row}</span>
          {seatLetters.map((letter, index) => {
            const seatId = `${row}${letter}`;
            const { seatStatus, seatType } = getSeatInfo(row, letter);
            const isSelected = selectedSeat === seatId;

            let seatClass =
              "border w-8 h-8 rounded flex items-center justify-center cursor-pointer transition duration-200";

            if (isSelected) {
              seatClass += " bg-black text-white border-black";
            } else if (seatStatus.toLowerCase() === "occupied") {
              seatClass +=
                " bg-gray-300 border-gray-400 text-white cursor-not-allowed";
            } else if (seatType.toLowerCase() === "emergency_exit") {
              seatClass += " bg-green-200 border-green-300";
            } else if (seatType.toLowerCase() === "premium") {
              seatClass += " bg-yellow-200 border-yellow-300";
            } else {
              seatClass += " bg-white border-gray-400";
            }

            const handleClick = () => {
              if (seatStatus.toLowerCase() === "available") {
                setSelectedSeat(seatId);
              }
            };

            return (
              <React.Fragment key={letter}>
                {index === 3 && <span className="w-4" />}
                <div
                  className={`border w-8 h-8 rounded flex items-center justify-center cursor-pointer transition duration-200 ${seatClass}`}
                  onClick={
                    seatStatus.toLowerCase() === "occupied"
                      ? undefined
                      : handleClick
                  }
                  aria-disabled={seatStatus.toLowerCase() === "occupied"}
                >
                  <span className="text-xs">
                    {row}
                    {letter}
                  </span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatMap;
