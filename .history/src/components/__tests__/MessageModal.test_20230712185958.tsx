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
import MessageModal from "../MessageModal";
import { RootState } from "../../store/store";
import { closeMessageModal } from "../../store/genericActions";

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

describe("MessageModal", () => {
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
  it("renders the component", async () => {
    render(
      <Provider store={store}>
        <MessageModal />
      </Provider>,
    );
    const titleScreen = await screen.findByText("Hello, World!");
    await waitFor(() => expect(titleScreen).toBeTruthy());
  });

  it("Clone the modal", async () => {
    render(
      <Provider store={store}>
        <MessageModal />
      </Provider>,
    );
    // Simulate closing the message modal
    fireEvent.click(screen.getByLabelText("Close"));
    // Assert that the closeMessageModal action was dispatched
    await waitFor(() => expect(store.dispatch).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(store.dispatch).toHaveBeenCalledWith(closeMessageModal()),
    );
  });
});
