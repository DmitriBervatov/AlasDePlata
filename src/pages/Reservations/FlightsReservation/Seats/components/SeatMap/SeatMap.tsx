import React from "react";

interface SeatMapProps {
  seatRows: number[];
  seatLetters: string[];
  seatMap: Record<string, "occupied" | "premium" | "emergency" | "normal">;
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
  const getSeatType = (row: number, letter: string) => {
    return seatMap[`${row}${letter}`] || "normal";
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
            const type = getSeatType(row, letter);
            const isSelected = selectedSeat === seatId;

            let seatClass =
              "border w-8 h-8 rounded flex items-center justify-center cursor-pointer transition duration-200";

            switch (type) {
              case "occupied":
                seatClass +=
                  " bg-gray-500 border-gray-600 text-white cursor-not-allowed";
                break;
              case "premium":
                seatClass += " bg-yellow-200 border-yellow-300";
                break;
              case "emergency":
                seatClass += " bg-green-200 border-green-300";
                break;
              default:
                seatClass += " border-gray-500";
            }

            if (isSelected) {
              seatClass += " bg-black text-white border-black";
            }

            return (
              <React.Fragment key={letter}>
                {index === 3 && <span className="w-4" />}
                <div
                  className={seatClass}
                  onClick={() => {
                    if (type !== "occupied") setSelectedSeat(seatId);
                  }}
                >
                  <span className="text-xs">{letter}</span>
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
