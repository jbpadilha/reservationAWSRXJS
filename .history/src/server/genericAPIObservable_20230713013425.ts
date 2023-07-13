import { Observable, catchError, from, map } from "rxjs";
import { AxiosError } from "axios";
import { Dispatch } from "redux";
import dayjs, { Dayjs } from "dayjs";
import ActionBase from "./ActionBase";
import { GenericActions, apiResponseSuccess } from "../store/genericActions";
import { Action } from "../interfaces/interfaces";

const actionBase = ActionBase.getInstance();

const reservationFetchAPI = ({
  departureDate,
  lastName,
}: {
  departureDate: Dayjs;
  lastName: string;
}): Observable<any> => {
  const convertedDate = dayjs(departureDate).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
  // eslint-disable-next-line no-console
  console.log("departureDate:", dayjs());
  // eslint-disable-next-line no-console
  console.log("convertedDate:", convertedDate);
  return from(
    actionBase.get(`/departureDate=${departureDate}&lastName=${lastName}`),
  ).pipe(
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
  departureDate: Dayjs | string;
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
