import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { render, unmountComponentAtNode } from "react-dom";
import App from "./App";

describe("App", () => {

  let container: any = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders the component App", async () => {
    render(<App />, container);
    await waitFor(() => {
      // eslint-disable-next-line no-console
      console.log(screen.debug);
      // eslint-disable-next-line no-console
      console.log("container:", container);
      const titleScreen = screen.queryByTestId("app");
      expect(titleScreen).toBeTruthy();
    });
  });
});
