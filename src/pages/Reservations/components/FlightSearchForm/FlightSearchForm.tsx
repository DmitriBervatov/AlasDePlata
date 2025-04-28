import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Minus, Plus } from "lucide-react";
import { useState } from "react";

const FlightSearchForm = () => {
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();

  return (
    <div className="flex flex-col gap-4 p-4">
      <RadioGroup defaultValue="round-trip" className="flex gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="round-trip" id="round-trip" />
          <Label htmlFor="round-trip">Ida y vuelta</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="one-way" id="one-way" />
          <Label htmlFor="one-way">Solo ida</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="multi-destination" id="multi-destination" />
          <Label htmlFor="multi-destination">Multidestino</Label>
        </div>
      </RadioGroup>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <Label htmlFor="origin">Origen</Label>
          <Select>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Seleccione origen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Perú</SelectItem>
              <SelectItem value="dark">España</SelectItem>
              <SelectItem value="system">Mexico</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="origin">Destino</Label>
          <Select>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Seleccione destino" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Perú</SelectItem>
              <SelectItem value="dark">España</SelectItem>
              <SelectItem value="system">Mexico</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="origin">Fecha de Ida</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full pl-3 text-left font-normal flex items-center justify-start cursor-pointer"
                )}
              >
                <CalendarIcon />
                {departureDate ? (
                  format(departureDate, "PPP", { locale: es })
                ) : (
                  <>
                    <span className="text-left">Selecciona fecha</span>
                  </>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={departureDate}
                onSelect={setDepartureDate}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-4">
          <Label>Fecha de vuelta</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal cursor-pointer"
                type="button"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {returnDate ? (
                  format(returnDate, "PPP", { locale: es })
                ) : (
                  <span>Selecciona fecha</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={returnDate}
                onSelect={setReturnDate}
                initialFocus
                disabled={(date) => date < (departureDate || new Date())}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-4">
          <Label htmlFor="origin">Pasajeros</Label>
          <div className="flex">
            <div className="flex flex-col">
              <span className="text-xl">Adultos</span>
              <span className="text-sm text-gray-500">+12 años</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <Minus className="w-4 h-4" />
              <span>1</span>
              <Plus className="w-4 h-4 border border-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;
