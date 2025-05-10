import { Button } from "@/shared/ui/button";

interface CardDestinationProps {
  imageSrc: string;
  imageAlt: string;
  city: string;
  country: string;
  price: string | number;
  onViewDestination?: () => void;
}

const CardDestination = ({
  city,
  country,
  imageAlt,
  imageSrc,
  price,
  onViewDestination,
}: CardDestinationProps) => {
  return (
    <div className="flex flex-col gap-2 justify-center border rounded-lg">
      <img src={imageSrc} alt={imageAlt} className="w-full h-96 object-cover" />
      <div className="flex flex-col p-4 gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-lg">{city}</span>
          <span className="text-gray-500 text-sm">{country}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-sm">Desde</span>
            <span className="font-semibold text-sm">S/{price}</span>
          </div>
          <Button
            className="cursor-pointer"
            variant="outline"
            onClick={onViewDestination}
          >
            Ver destino
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardDestination;
