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

const reservationFetchAPI = ({
  departureDate,
  lastName,
}: {
  departureDate: string;
  lastName: string;
}): Observable<any> => {
  return from(actionBase.get("")).pipe(
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
