import { Observable, catchError, from, map } from "rxjs";
import { AxiosError } from "axios";
import dayjs, { Dayjs } from "dayjs";
import { AnyAction } from "redux";
import ActionBase from "./ActionBase";
import { GenericActions, apiResponseSuccess } from "../store/genericActions";
import { Action } from "../interfaces/interfaces";

const actionBase = ActionBase.getInstance();

const reservationFetchAPI = ({
  departureDate,
  lastName,
}: {
  departureDate: Dayjs | string;
  lastName: string;
}): Observable<any> => {
  const convertedDate = dayjs(departureDate).format(
    "YYYY-MM-DDTHH:mm:ss.SSS[Z]",
  );
  return from(
    actionBase.get(`?departureDate=${convertedDate}&lastName=${lastName}`),
  ).pipe(
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

export const createReservation = () => {};
