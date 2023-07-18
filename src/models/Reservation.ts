export default interface Reservation {
  stay?: {
    arrivalDate?: string;
    departureDate?: string;
  };
  room?: {
    roomSize?: string;
    roomQuantity?: number;
  };
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: number;
  addressStreet?: {
    streetName?: string;
    streetNumber?: number;
  };
  addressLocation?: {
    zipCode?: string;
    state?: string;
    city?: string;
  };
  extras?: string[];
  payment?: string;
  note?: string;
  tags?: string[];
  reminder?: boolean;
  newsletter?: boolean;
  confirm?: boolean;

  departureDateFind?: string;
  lastNameFind?: string;
}
