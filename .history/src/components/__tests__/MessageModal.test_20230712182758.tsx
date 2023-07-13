import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import MessageModal from "../MessageModal";
// import i18next from "../../config/i18next";

describe("MessageModal", () => {
  beforeAll(() => {
    jest.mock("react-i18next", () => ({
      useTranslation: () => ({
        t: (key: string) => key, // Mock the translation function to return the key as the translation
      }),
    }));
  });
  afterEach(cleanup);
  it("renders the component", async () => {
    render(<MessageModal />);
    const titleScreen = await screen.findByText("Test Calculator");
    await waitFor(() => expect(titleScreen).toBeTruthy());
  });
});
