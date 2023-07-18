import { Observable, catchError, from, map } from "rxjs";
import { AxiosError } from "axios";
import dayjs, { Dayjs } from "dayjs";
import { AnyAction } from "redux";
import ActionBase from "./ActionBase";
import { GenericActions, apiResponseSuccess } from "../store/genericActions";
import { Action } from "../interfaces/interfaces";
import Reservation from "../models/Reservation";

const actionBase = ActionBase.getInstance();

const reservationFetchAPI = ({
  departureDate,
  lastName,
}: {
  departureDate: Dayjs | string;
  lastName: string;
}): Observable<any> => {
  let url = "";
  if (departureDate !== "" && lastName !== "") {
    const convertedDate = dayjs(departureDate).format(
      "YYYY-MM-DDTHH:mm:ss.SSS[Z]",
    );
    url = `?departureDate=${convertedDate}&lastName=${lastName}`;
  }
  return from(actionBase.get(url)).pipe(
    map((response: any) => response.data),
    catchError((error: AxiosError) => {
      throw new Error(`API request error: ${error.message}`);
    }),
  );
};

const reservationEditAPI = (reservation: Reservation): Observable<any> => {
  return from(actionBase.put("", reservation)).pipe(
    map((response: any) => response.data),
    catchError((error: AxiosError) => {
      throw new Error(`API request error: ${error.message}`);
    }),
  );
};

const dispatchResult = (payload: Action): AnyAction => {
  return apiResponseSuccess(GenericActions.API_GENERIC_SUCCESS, payload);
};

const dispatchError = (payload: Action): AnyAction => {
  return apiResponseSuccess(GenericActions.API_GENERIC_ERROR, payload);
};

export const getReservations = ({
  departureDate,
  lastName,
}: {
  departureDate: Dayjs | string;
  lastName: string;
}) => {
  let returnDispatch: AnyAction = { type: "" };
  const payload: Action = {
    type: GenericActions.FETCH_RESERVATION,
  };
  reservationFetchAPI({ departureDate, lastName }).subscribe({
    next: (data: any) => {
      payload.payload = data;
      returnDispatch = dispatchResult(payload);
    },
    error: (error: any) => {
      payload.error = error;
      returnDispatch = dispatchError(payload);
    },
  });
  return returnDispatch;
};

export const editReservation = ({
  reservation,
}: {
  reservation: Reservation;
}) => {
  let returnDispatch: AnyAction = { type: "" };
  const payload: Action = {
    type: GenericActions.FETCH_RESERVATION,
  };
  reservationEditAPI(reservation).subscribe({
    next: (data: any) => {
      payload.payload = data;
      returnDispatch = dispatchResult(payload);
    },
    error: (error: any) => {
      payload.error = error;
      returnDispatch = dispatchError(payload);
    },
  });
  return returnDispatch;
};

export const createReservation = () => {};
