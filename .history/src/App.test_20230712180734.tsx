import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("MessageModal", () => {
  it("renders the component APP", async () => {
    render(<App />);
    await waitFor(() => {
      const titleScreen = screen.getByTestId("app");
      expect(titleScreen).toBeTruthy();
    });
  });
});
