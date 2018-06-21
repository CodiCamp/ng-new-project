interface TrainWagon {
  wagonClass: string;
  seats: number;
  type: string;
}

interface TrainInterface {
  origin: string;
  destination: string;
  id: string;
  numberOfSeats: number;
  seatsReserved: number;
  timeOfDeparture: number;
  timeOfArrival: number;
  confirmed: boolean;
  wagons: TrainWagon[] | null;
}

export const trainsList: TrainInterface[] = [
  {
    origin: 'Plovdiv',
    destination: 'Sofia',
    id: 'БВ8626',
    numberOfSeats: 80,
    seatsReserved: 60,
    timeOfDeparture: 1529588504947,
    timeOfArrival: 1529588504947,
    confirmed: true,
    wagons: [{ wagonClass: 'passenger', seats: 15, type: 'hotseat' }],
  },
  {
    origin: 'Plovdiv',
    destination: 'Ruse',
    id: 'БВ4526',
    numberOfSeats: 40,
    seatsReserved: 20,
    timeOfDeparture: 1529588504947,
    timeOfArrival: 1529588504947,
    confirmed: false,
    wagons: null,
  },
];
