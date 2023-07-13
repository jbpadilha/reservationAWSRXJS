import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("MessageModal", () => {
  it("renders the component APP", async () => {
    render(<App />);
    const titleScreen = screen.getByTestId("app");
    await waitFor(() => expect(titleScreen).toBeTruthy());
  });
});
