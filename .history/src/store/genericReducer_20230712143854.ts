/* eslint-disable default-param-last */
import { Action, State } from "../interfaces/interfaces";
import { GenericActions } from "./genericActions";

const initialState: State = {
  openMessageModal: false,
  typeMessage: "info",
  messageModal: "",
  loading: false,
};
const genericReducer = (
  state: State = initialState,
  { type, payload }: Action,
): any => {
  switch (type) {
    case GenericActions.CLOSE_MESSAGE_MODAL:
      return {
        ...state,
        openMessageModal: false,
        messageModal: null,
        typeMessage: "info",
      };
    case GenericActions.INFO_MESSAGE_MODAL:
      return {
        ...state,
        openMessageModal: true,
        messageModal: payload,
        typeMessage: "info",
      };
    case GenericActions.SUCCESS_MESSAGE_MODAL:
      return {
        ...state,
        openMessageModal: true,
        messageModal: payload,
        typeMessage: "success",
      };
    case GenericActions.FAIL_MESSAGE_MODAL:
      return {
        ...state,
        openMessageModal: true,
        messageModal: payload,
        typeMessage: "error",
      };
    default:
      return state;
  }
};

export default genericReducer;
