import { from, map } from "rxjs";
import ActionBase from "./ActionBase";

const actionBase = ActionBase.getInstance();

export const getReservations = async ({
  dateReservation,
  lastName,
}: {
  dateReservation: string;
  lastName: string;
}) => {
  return from(
    actionBase.get(`departureDate${dateReservation}?lastName=${lastName}`),
  ).pipe(map((response) => response.data?.data));
};

export const createReservation = () => {};
