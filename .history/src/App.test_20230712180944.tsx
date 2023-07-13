import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the component App", async () => {
    render(<App />);
    await waitFor(() => {
      // eslint-disable-next-line no-console
      console.log(screen.debug);
      const titleScreen = screen.queryByTestId("app");
      expect(titleScreen).toBeTruthy();
    });
  });
});
