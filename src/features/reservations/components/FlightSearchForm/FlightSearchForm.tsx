import { useGetDestinations } from "@/features/destinations/hooks";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Label } from "@/shared/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Minus, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useGetFlightClasses } from "../../hooks/useFLights";
import {
  flightSearchSchema,
  FlightSearchValues,
} from "../../schema/flight-search.schema";
import { useFlightSearch } from "../../store/flightSearch";

const FlightSearchForm = () => {
  const { setSearch, ...flightSearch } = useFlightSearch();
  const navigate = useNavigate();

  const form = useForm<FlightSearchValues>({
    resolver: zodResolver(flightSearchSchema),
    defaultValues: {
      ...flightSearch,
      departureDate: flightSearch.departureDate ?? undefined,
      returnDate: flightSearch.returnDate ?? undefined,
    },
  });

  const { data: destinations } = useGetDestinations();
  const { data: flightClasses } = useGetFlightClasses();

  const onSubmit = (data: FlightSearchValues) => {
    setSearch(data);
    navigate("/reservations/flights");
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 p-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="tripType"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-8">
              <FormLabel className="mr-4">Tipo de viaje</FormLabel>
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="round-trip" id="round-trip" />
                  <FormLabel htmlFor="round-trip">Ida y vuelta</FormLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-way" id="one-way" />
                  <Label htmlFor="one-way">Solo ida</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="multi-destination"
                    id="multi-destination"
                  />
                  <Label htmlFor="multi-destination">Multidestino</Label>
                </div>
              </RadioGroup>
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Origen</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Seleccione origen" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations?.map((destination) => (
                      <SelectItem key={destination.id} value={destination.city}>
                        {destination.city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destino</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="Seleccione destino" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations?.map((destination) => (
                      <SelectItem key={destination.id} value={destination.city}>
                        {destination.city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="departureDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de salida</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal flex items-center justify-start cursor-pointer"
                        )}
                      >
                        <CalendarIcon />
                        {field.value ? (
                          format(field.value, "PPP", { locale: es })
                        ) : (
                          <>
                            <span className="text-left">Selecciona fecha</span>
                          </>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="returnDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de vuelta</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal flex items-center justify-start cursor-pointer"
                        )}
                      >
                        <CalendarIcon />
                        {field.value ? (
                          format(field.value, "PPP", { locale: es })
                        ) : (
                          <>
                            <span className="text-left">Selecciona fecha</span>
                          </>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                      disabled={(date) =>
                        date < (form.getValues("departureDate") || new Date())
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-4 items-center justify-between mt-4 gap-8 col-span-2">
            <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem className="flex justify-between">
                  <FormLabel className="flex flex-col">
                    <span>Adultos</span>
                    <span className="text-gray-500">+18 años</span>
                  </FormLabel>
                  <div className="flex flex-row items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        field.onChange(Math.max(0, field.value - 1))
                      }
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span>{field.value}</span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        field.onChange(Math.max(0, field.value + 1))
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="teens"
              render={({ field }) => (
                <FormItem className="flex justify-between">
                  <FormLabel className="flex flex-col">
                    <span>Adolescentes</span>
                    <span className="text-gray-500">12 - 17 años</span>
                  </FormLabel>
                  <div className="flex flex-row items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        field.onChange(Math.max(0, field.value - 1))
                      }
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span>{field.value}</span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        field.onChange(Math.max(0, field.value + 1))
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="teens"
              render={({ field }) => (
                <FormItem className="flex justify-between">
                  <FormLabel className="flex flex-col">
                    <span>Niños</span>
                    <span className="text-gray-500">2 - 11 años</span>
                  </FormLabel>
                  <div className="flex flex-row items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        field.onChange(Math.max(0, field.value - 1))
                      }
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span>{field.value}</span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        field.onChange(Math.max(0, field.value + 1))
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="teens"
              render={({ field }) => (
                <FormItem className="flex justify-between">
                  <FormLabel className="flex flex-col">
                    <span>Infantes</span>
                    <span className="text-gray-500">0 - 2 años</span>
                  </FormLabel>
                  <div className="flex flex-row items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        field.onChange(Math.max(0, field.value - 1))
                      }
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span>{field.value}</span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        field.onChange(Math.max(0, field.value + 1))
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="travelClass"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Clase</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione clase" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {flightClasses?.map((flightClass) => (
                      <SelectItem key={flightClass} value={flightClass}>
                        {flightClass === "ECONOMY"
                          ? "Económica"
                          : flightClass === "BUSINESS"
                          ? "Business"
                          : flightClass === "FIRST_CLASS"
                          ? "Primera"
                          : flightClass}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <Button
            className="cursor-pointer w-full col-span-2 mt-4"
            type="submit"
          >
            Buscar vuelos
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FlightSearchForm;
