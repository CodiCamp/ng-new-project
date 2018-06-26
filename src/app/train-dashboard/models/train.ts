import { Wagon } from './wagon';

export interface Train {
  origin: string;
  destination: string;
  id: string;
  numberOfSeats: number;
  seatsReserved: number;
  timeOfDeparture: number;
  timeOfArrival: number;
  confirmed: boolean;
  wagons: Wagon[] | null;
}
