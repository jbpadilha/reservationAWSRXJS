import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Header from "../Header";
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
describe("Header", () => {
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
  it("renders the header component", async () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    const imgFind = screen.getByRole("svg");
    await waitFor(() => expect(imgFind).toBeInTheDocument());

    const reservationTitle = await screen.findByText("RESERVATIONS");
    await waitFor(() => expect(reservationTitle).toBeInTheDocument());
  });
});
