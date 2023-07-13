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
        openMessageModal: true,
        typeMessage: "success",
        messageModal: "Hello, World!",
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
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

    // Mock the getReservations function
    jest.mock("@reduxjs/toolkit", () => ({
      createSelector: jest.fn(),
    }));
    jest.mock("useSelector", () => ({
      useSelector: jest.fn().mockImplementation(() => {
        return mockReservationData;
      }),
    }));

    // Check if loading state is displayed
    // expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
  /*
  test("renders modal with reservation data", () => {
    const reservations = [
      {
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
      },
    ];

    render(
      <ModalSearchResults
        isOpen
        onClose={jest.fn()}
        reservations={reservations}
        loading={false}
      />,
    );

    // Check if reservation data is displayed
    expect(screen.getByText("IDM")).toBeInTheDocument();
    expect(screen.getByText("ENG")).toBeInTheDocument();
    expect(screen.getByLabelText("dateOfArrival")).toBeInTheDocument();
    expect(screen.getByLabelText("dateOfDeparture")).toBeInTheDocument();
    // Add more assertions for other fields

    // Perform actions like clicking, typing, etc. and assert the results
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  */
});
