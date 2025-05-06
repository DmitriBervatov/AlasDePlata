export interface Fare {
  id: number;
  flightId: number;
  flightClass: string;
  flightClassName: string;
  price: number;
  benefits: [
    {
      id: number;
      code: string;
      name: string;
      description: string;
      value: string;
    }
  ];
}
