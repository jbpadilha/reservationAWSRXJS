import { Action } from "../interfaces/interfaces";

export const GenericActions = {
  API_GENERIC_SUCCESS: "API_GENERIC_SUCCESS",
  API_GENERIC_ERROR: "API_GENERIC_ERROR",
  CLOSE_MESSAGE_MODAL: "CLOSE_MESSAGE_MODAL",
  SUCCESS_MESSAGE_MODAL: "SUCCESS_MESSAGE_MODAL",
  FAIL_MESSAGE_MODAL: "FAIL_MESSAGE_MODAL",
  INFO_MESSAGE_MODAL: "INFO_MESSAGE_MODAL",
  FETCH_RESERVATION: "FETCH_RESERVATION",
};

// Generic Api Response Generic Action
export const apiResponseSuccess = (
  actionType: string,
  payload: Action,
): Action => ({
  type: actionType,
  payload: { actionType: payload.type, data: payload.payload },
});

export const apiResponseError = (
  actionType: string,
  payload: Action,
): Action => ({
  type: actionType,
  payload: { actionType: payload.type, data: payload.error },
});

export const infoMessageModal = (message: string): Action => ({
  type: GenericActions.INFO_MESSAGE_MODAL,
  payload: message,
});

export const successMessageModal = (message: string): Action => ({
  type: GenericActions.SUCCESS_MESSAGE_MODAL,
  payload: message,
});

export const failMessageModal = (message: string): Action => ({
  type: GenericActions.FAIL_MESSAGE_MODAL,
  payload: message,
});

export const closeMessageModal = (): Action => ({
  type: GenericActions.CLOSE_MESSAGE_MODAL,
  payload: false,
});
