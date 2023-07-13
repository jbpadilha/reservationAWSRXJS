import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MessageModal from "../MessageModal";

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

describe("MessageModal", () => {
  const store = mockStore({
    openMessageModal: true,
  });
  afterEach(cleanup);
  it("renders the component", async () => {
    render(
      <Provider store={store}>
        <MessageModal />
      </Provider>,
    );
    const titleScreen = await screen.findByText("Test Calculator");
    await waitFor(() => expect(titleScreen).toBeTruthy());
  });
});
