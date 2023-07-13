import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  const titleScreen = await screen.findByText("Select the following");
  await waitFor(() => expect(titleScreen).toBeTruthy());
});
