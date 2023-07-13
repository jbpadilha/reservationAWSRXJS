/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ModalSearchResults from "../ModalSearchResults";

const mockReservationData = {
  stay: {
    arrivalDate: "2021-11-18T05:00:00.000Z",
    departureDate: "2021-11-25T05:00:00.000Z",
  },
  room: {
    roomSize: "business-suite",
    roomQuantity: 3,
  },
  firstName: "IDM",
  lastName: "ENG",
  email: "idm.test@idm.com",
  phone: "9999999999",
  addressStreet: {
    streetName: "IDM Street",
    streetNumber: "1234",
  },
  addressLocation: {
    zipCode: "123456",
    state: "Arizona",
    city: "OAKVILLE",
  },
  extras: [
    "extraBreakfast",
    "extraTV",
    "extraWiFi",
    "extraParking",
    "extraBalcony",
  ],
  payment: "cc",
  note: "idm lab test",
  tags: ["hotel", "booking", "labtest"],
  reminder: true,
  newsletter: true,
  confirm: false,
};

// Mock the useTranslation hook
jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (key: string) => key,
    };
  },
  initReactI18next: {
    // Empty implementation to avoid error
  },
}));
const mockStore = configureStore([]);
let store: any = null;

describe("ModalSearchResults", () => {
  beforeEach(() => {
    store = mockStore({
      generic: {
        openMessageModal: false,
        loading: false,
        reservations: [mockReservationData],
      },
    });
    store.dispatch = jest.fn();
  });
  it("renders modal and checks loading state", () => {
    render(
      <Provider store={store}>
        <ModalSearchResults isOpen onClose={jest.fn()} />
      </Provider>,
    );
    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toBeTruthy();
  });

  it("checking close Modal Btn", async () => {
    render(
      <Provider store={store}>
        <ModalSearchResults isOpen onClose={jest.fn()} />
      </Provider>,
    );

    const closeBtn = await screen.findByTestId("CloseIconIcon");
    await fireEvent.click(closeBtn);

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});
