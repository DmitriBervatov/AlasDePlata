import { Checkbox } from "@/components/ui/checkbox";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface CardServiceProps {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
}

function CardService({
  title,
  description,
  price,
  icon: Icon,
}: CardServiceProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={`border rounded p-4 flex justify-between ${
        checked ? "border-black" : "border-gray-300"
      }`}
    >
      <div className="flex items-center gap-4">
        <Checkbox
          id="baggage"
          checked={checked}
          onCheckedChange={(value) => setChecked(value === true)}
        />
        <div className="flex flex-col items-start">
          <span>{title}</span>
          <span className="text-gray-500 text-sm">{description}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Icon className="text-gray-500 w-5 h-5" /> S/{price}
      </div>
    </div>
  );
}

export default CardService;
