import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { useTranslation } from 'react-i18next';
import MessageModal from "../MessageModal";

// Mock the useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (key: string) => key,
    };
  },
  initReactI18next: {
    // Empty implementation to avoid error
  },
}));


describe("MessageModal", () => {
  beforeAll(() => {});
  afterEach(cleanup);
  it("renders the component", async () => {
    render(<MessageModal />);
    const titleScreen = await screen.findByText("Test Calculator");
    await waitFor(() => expect(titleScreen).toBeTruthy());
  });
});
