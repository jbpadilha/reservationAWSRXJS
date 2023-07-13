import { from, map } from "rxjs";
import ActionBase from "./ActionBase";
import { GenericActions, apiResponseSuccess } from "../store/genericActions";
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
        return apiResponseSuccess(GenericActions.API_GENERIC_SUCCESS, payload);
      }
      throw response;
    }),
    catchError((err) => {
      const result = {
        message: err,
      };
      return of(getAllProductFailedAction(result));
    }),
  );
};

export const createReservation = () => {};
