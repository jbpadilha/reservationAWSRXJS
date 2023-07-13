/* eslint-disable jest/no-mocks-import */
import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import MessageModal from "../MessageModal";

describe("MessageModal", () => {
  afterEach(cleanup);
  it("renders the component", async () => {
    render(<MessageModal />);
    const titleScreen = await screen.findByText("Test Calculator");
    await waitFor(() => expect(titleScreen).toBeTruthy());
  });
});
