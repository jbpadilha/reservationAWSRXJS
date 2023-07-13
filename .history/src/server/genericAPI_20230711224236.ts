import { catchError, from, map, of } from "rxjs";
import ActionBase from "./ActionBase";
import {
  GenericActions,
  apiResponseError,
  apiResponseSuccess,
  failMessageModal,
} from "../store/genericActions";
import { Action } from "../interfaces/interfaces";

const actionBase = ActionBase.getInstance();

export const getReservations = async ({
  dateReservation,
  lastName,
}: {
  dateReservation: string;
  lastName: string;
}) => {
  const payload: Action = {
    type: GenericActions.FETCH_RESERVATION,
  };
  return from(
    actionBase.get(`departureDate${dateReservation}?lastName=${lastName}`),
  ).pipe(
    map((response: any) => {
      if (response.data) {
        payload.payload = response.data;
        return apiResponseSuccess(GenericActions.API_GENERIC_SUCCESS, payload);
      }
      throw response;
    }),
    catchError((err) => {
      const result = {
        message: err,
      };
      payload.error = result;
      failMessageModal(err);
      return of(apiResponseError(GenericActions.API_GENERIC_ERROR, payload));
    }),
  );
};

export const createReservation = () => {};
