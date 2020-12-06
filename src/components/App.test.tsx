import * as React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("dummy test to check config", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/restaurants/i);
  expect(titleElement).toBeInTheDocument();
});
