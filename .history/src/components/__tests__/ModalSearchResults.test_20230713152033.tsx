/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen, fireEvent } from "@testing-library/react";
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

describe("ModalSearchResults", () => {
  it("renders modal and checks loading state", () => {
    render(<ModalSearchResults isOpen onClose={jest.fn()} />);

    // Check if loading state is displayed
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
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
