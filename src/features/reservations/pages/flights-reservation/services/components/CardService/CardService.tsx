import { Checkbox } from "@/shared/ui/checkbox";
import { LucideIcon } from "lucide-react";

interface CardServiceProps {
  title: string;
  description: string;
  price: number;
  icon: LucideIcon;
  checked: boolean;
  onCheckedChange: () => void;
}

function CardService({
  title,
  description,
  price,
  icon: Icon,
  checked,
  onCheckedChange,
}: CardServiceProps) {
  return (
    <div
      className={`border rounded p-4 flex justify-between cursor-pointer ${
        checked ? "border-black" : "border-gray-300"
      }`}
      onClick={onCheckedChange}
      tabIndex={0}
      role="button"
      aria-pressed={checked}
    >
      <div className="flex items-center gap-4">
        <Checkbox
          id="baggage"
          checked={checked}
          onClick={(e) => e.stopPropagation()}
          onCheckedChange={onCheckedChange}
        />
        <div className="flex flex-col items-start">
          <span>{title}</span>
          <span className="text-gray-500 text-sm">{description}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 min-w-[110px]">
        <span className="flex items-center">
          <Icon className="text-gray-500 w-5 h-5" />
          <span className="ml-2 font-semibold tabular-nums">S/{price}</span>
        </span>
      </div>
    </div>
  );
}

export default CardService;
