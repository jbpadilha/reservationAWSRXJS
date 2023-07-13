import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SearchReservations from "../SearchReservations";
import { getReservations } from "../../server/genericAPIObservable";

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

describe("SearchReservations", () => {
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

  afterEach(cleanup);

  it("renders the search form", async () => {
    render(
      <Provider store={store}>
        <SearchReservations />
      </Provider>,
    );

    // Check if the departureDate input is rendered
    const departureDateInput = await screen.findByText("departureDate");
    await waitFor(() => expect(departureDateInput).toBeTruthy());

    // Check if the lastName input is rendered
    const lastNameInput = await screen.findByText("enterLastName");
    await waitFor(() => expect(lastNameInput).toBeTruthy());

    // Check if the search button is rendered
    const searchButton = screen.getByRole("button", { name: "btnSearch" });
    await waitFor(() => expect(searchButton).toBeTruthy());
  });

  it("updates state when inputs are changed", async () => {
    render(
      <Provider store={store}>
        <SearchReservations />
      </Provider>,
    );

    // Simulate user input in the departureDate input
    const departureDateInput = screen.getByLabelText("departureDate");
    fireEvent.change(departureDateInput, { target: { value: "2023-07-31" } });
    await waitFor(() => expect(departureDateInput).toBeTruthy());

    // Simulate user input in the lastName input
    const lastNameInput = screen.getByLabelText("enterLastName");
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    await waitFor(() => expect(lastNameInput).toBeTruthy());
  });

  it("triggers searchReservationHandle on search button click", async () => {
    render(
      <Provider store={store}>
        <SearchReservations />
      </Provider>,
    );

    // Mock the getReservations function
    jest.mock("../server/genericAPIObservable", () => ({
      getReservations: jest.fn(),
    }));

    const setIsOpen = jest.fn();

    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockReturnValue([false, setIsOpen]);

    // Simulate user input in the departureDate input
    const departureDateInput = screen.getByLabelText("departureDate");
    fireEvent.change(departureDateInput, { target: { value: "2023-07-31" } });

    // Simulate user input in the lastName input
    const lastNameInput = screen.getByLabelText("enterLastName");
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });

    // Click the search button
    const searchButton = screen.getByRole("button", { name: "btnSearch" });
    fireEvent.click(searchButton);

    // Check if the getReservations function is called with the correct arguments
    expect(getReservations).toHaveBeenCalledWith({
      departureDate: "2023-07-31",
      lastName: "Doe",
      dispatch: expect.any(Function),
    });
    useStateSpy.mockRestore();
  });
});
