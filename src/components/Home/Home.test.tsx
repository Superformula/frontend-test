import * as React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

test("dummy test to check config", () => {
  const { getByText } = render(<Home />);
  const titleElement = getByText(/restaurants/i);
  expect(titleElement).toBeInTheDocument();
});
