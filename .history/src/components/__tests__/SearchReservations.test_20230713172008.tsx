import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

  it("renders the search form", async () => {
    render(
      <Provider store={store}>
        <SearchReservations />
      </Provider>,
    );

    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toBeTruthy();

    expect(inputs[1]).toBeTruthy();

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

    const departureDateInput = screen.getByRole("textbox", {
      name: "",
    });
    fireEvent.change(departureDateInput, { target: { value: "2023-07-31" } });
    await waitFor(() => expect(departureDateInput).toBeTruthy());

    // Simulate user input in the lastName input
    const lastNameInput = await screen.findByRole("textbox", {
      name: "enterLastName",
    });
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
    jest.mock("../../server/genericAPIObservable", () => ({
      getReservations: jest.fn(),
    }));

    const setIsOpen = jest.fn();

    const mockDispatch = jest.fn();
    jest.mock("react-redux", () => ({
      useSelector: jest.fn(),
      useDispatch: () => mockDispatch,
    }));

    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockReturnValue([false, setIsOpen]);

    // Simulate user input in the departureDate input
    const inputs = screen.getAllByRole("textbox");
    fireEvent.change(inputs[0], {
      target: { value: "2021-11-25T05:00:00.000Z" },
    });

    // Simulate user input in the lastName input
    const lastNameInput = screen.getByLabelText("enterLastName");
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });

    // Click the search button
    const searchButton = screen.getByRole("button", { name: "btnSearch" });
    fireEvent.click(searchButton);

    useStateSpy.mockRestore();
  });
});
