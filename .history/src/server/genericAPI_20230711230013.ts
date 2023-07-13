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

const json = 
    {
        "stay": {
          "arrivalDate": "2021-11-18T05:00:00.000Z",
          "departureDate": "2021-11-25T05:00:00.000Z"
        },
        "room": {
          "roomSize": "business-suite",
          "roomQuantity": 3
        },
        "firstName": "IDM",
        "lastName": "ENG",
        "email": "idm.test@idm.com",
        "phone": "9999999999",
        "addressStreet": {
          "streetName": "IDM Street",
          "streetNumber": "1234"
        },
        "addressLocation": {
          "zipCode": "123456",
          "state": "Arizona",
          "city": "OAKVILLE"
        },
        "extras": [
          "extraBreakfast",
          "extraTV",
          "extraWiFi",
          "extraParking",
          "extraBalcony"
        ],
        "payment": "cc",
        "note": "idm lab test",
        "tags": [
          "hotel",
          "booking",
          "labtest"
        ],
        "reminder": true,
        "newsletter": true,
        "confirm": false
      };

export const getReservations = async ({
  departureDate,
  lastName,
}: {
  departureDate: string;
  lastName: string;
}) => {
  const payload: Action = {
    type: GenericActions.FETCH_RESERVATION,
  };
  return from(
    // actionBase.get(`departureDate${departureDate}?lastName=${lastName}`),
    new Promise.resolve({
        "stay": {
          "arrivalDate": "2021-11-18T05:00:00.000Z",
          "departureDate": "2021-11-25T05:00:00.000Z"
        },
        "room": {
          "roomSize": "business-suite",
          "roomQuantity": 3
        },
        "firstName": "IDM",
        "lastName": "ENG",
        "email": "idm.test@idm.com",
        "phone": "9999999999",
        "addressStreet": {
          "streetName": "IDM Street",
          "streetNumber": "1234"
        },
        "addressLocation": {
          "zipCode": "123456",
          "state": "Arizona",
          "city": "OAKVILLE"
        },
        "extras": [
          "extraBreakfast",
          "extraTV",
          "extraWiFi",
          "extraParking",
          "extraBalcony"
        ],
        "payment": "cc",
        "note": "idm lab test",
        "tags": [
          "hotel",
          "booking",
          "labtest"
        ],
        "reminder": true,
        "newsletter": true,
        "confirm": false
      },);
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
