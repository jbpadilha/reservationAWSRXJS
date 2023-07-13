/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Observable, catchError, from, map, of } from "rxjs";
import { AxiosError, AxiosResponse } from "axios";
import ActionBase from "./ActionBase";
import {
  GenericActions,
  apiResponseError,
  apiResponseSuccess,
  failMessageModal,
} from "../store/genericActions";
import { Action } from "../interfaces/interfaces";

const actionBase = ActionBase.getInstance();

const json = {
  stay: {
    arrivalDate: "2021-11-18T05:00:00.000Z",
    departureDate: "2021-11-25T05:00:00.000Z",
  },
  room: {
    roomSize: "business-suite",
    roomQuantity: 3,
  },
  firstName: "IDM",
  lastName: "ENG",
  email: "idm.test@idm.com",
  phone: "9999999999",
  addressStreet: {
    streetName: "IDM Street",
    streetNumber: "1234",
  },
  addressLocation: {
    zipCode: "123456",
    state: "Arizona",
    city: "OAKVILLE",
  },
  extras: [
    "extraBreakfast",
    "extraTV",
    "extraWiFi",
    "extraParking",
    "extraBalcony",
  ],
  payment: "cc",
  note: "idm lab test",
  tags: ["hotel", "booking", "labtest"],
  reminder: true,
  newsletter: true,
  confirm: false,
};
const mockAPI = () => {
  return new Promise((resolve) => {
    // setTimeout(() => {
    resolve({ data: json });
    // }, 300);
  });
};

const reservationFetchAPI = ({
  departureDate,
  lastName,
}: {
  departureDate: string;
  lastName: string;
}): Observable<any> => {
  // const actionBase = ActionBase.getInstance();
  return from(mockAPI()).pipe(
    map((response: any) => response.data),
    catchError((error: AxiosError) => {
      throw new Error(`API request error: ${error.message}`);
    }),
  );
};

const dispatchResult = () => {};

const dispatchError = () => {};

const gerReservationDispatch = () => {};

export const getReservations = ({
  departureDate,
  lastName,
}: {
  departureDate: string;
  lastName: string;
}) => {
  reservationFetchAPI({ departureDate, lastName }).subscribe(
    (data) => {
      // Call the dispatch function with the retrieved data
      dispatchResult(data);
    },
    (error) => {
      // Call the dispatch function with the error message
      dispatchError(error.message);
    },
  );
};

export const createReservation = () => {};