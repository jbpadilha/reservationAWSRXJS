import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import MessageModal from "../MessageModal";

describe("MessageModal", () => {
  beforeAll(() => {
    jest.mock("react-i18next", () => ({
      // this mock makes sure any components using the translate hook can use it without a warning being shown
      useTranslation: () => {
        return {
          t: (str: any) => str,
          i18n: {
            changeLanguage: () => new Promise(() => {}),
          },
        };
      },
      initReactI18next: {
        type: "3rdParty",
        init: () => {},
      },
    }));
  });
  afterEach(cleanup);
  it("renders the component", async () => {
    render(<MessageModal />);
    const titleScreen = await screen.findByText("Test Calculator");
    await waitFor(() => expect(titleScreen).toBeTruthy());
  });
});
