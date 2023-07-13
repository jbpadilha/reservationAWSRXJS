export interface Reservation {
  stay: {
    arrivalDate: string;
    departureDate: string;
  };
  room: {
    roomSize: string;
    roomQuantity: 3;
  };
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  addressStreet: {
    streetName: string;
    streetNumber: number;
  };
  addressLocation: {
    zipCode: string;
    state: string;
    city: string;
  };
  extras: string[];
  payment: string;
  note: string;
  tags: string[];
  reminder: boolean;
  newsletter: boolean;
  confirm: boolean;
}
