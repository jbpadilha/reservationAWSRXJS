import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import MessageModal from "../MessageModal";

describe("MessageModal", () => {
  beforeAll(() => {
    jest.mock("react-i18next", () => ({
      useTranslation: jest.fn(),
    }));
  });
  afterEach(cleanup);
  it("renders the component", async () => {
    render(<MessageModal />);
    const titleScreen = await screen.findByText("Test Calculator");
    await waitFor(() => expect(titleScreen).toBeTruthy());
  });
});
