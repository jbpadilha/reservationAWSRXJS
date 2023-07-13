/* eslint-disable default-param-last */
import { Action, State } from "../interfaces/interfaces";
import { GenericActions } from "./genericActions";

const initialState: State = {
  reservations: [],
};
const genericReducer = (
  state: State = initialState,
  { type, payload }: Action,
): any => {
  switch (type) {
    case GenericActions.API_GENERIC_SUCCESS: {
      switch (payload?.actionType) {
        case GenericActions.FETCH_RESERVATION: {
          // eslint-disable-next-line no-console
          console.log("test");
          return {
            openMessageModal: true,
            messageModal: payload,
            typeMessage: "success",
            reservations: payload,
          };
        }
        default:
          return state;
      }
    }
    case GenericActions.API_GENERIC_ERROR: {
      switch (payload?.actionType) {
        default:
          return state;
      }
    }
    default:
      return state;
  }
};

export default genericReducer;
