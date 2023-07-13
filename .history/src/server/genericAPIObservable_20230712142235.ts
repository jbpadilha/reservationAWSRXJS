/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Observable, catchError, from, map, of } from "rxjs";
import { AxiosError, AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
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

const dispatchResult = (payload: Action, dispatch: Dispatch) => {
  dispatch(apiResponseSuccess(GenericActions.API_GENERIC_SUCCESS, payload));
};

const dispatchError = (payload: Action, dispatch: Dispatch) => {
  dispatch(apiResponseSuccess(GenericActions.API_GENERIC_ERROR, payload));
};

export const getReservations = ({
  departureDate,
  lastName,
  dispatch,
}: {
  departureDate: string;
  lastName: string;
  dispatch: Dispatch;
}) => {
  const payload: Action = {
    type: GenericActions.FETCH_RESERVATION,
  };
  reservationFetchAPI({ departureDate, lastName }).subscribe({
    next: (data: any) => {
      payload.payload = data;
      dispatchResult(payload, dispatch);
    },
    error: (error: any) => {
      payload.error = error;
      dispatchError(payload, dispatch);
    },
  });
};

export const createReservation = () => {};
