import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./Select";

test("renders options", () => {
  const handleSelect = jest.fn();
  render(<Select label="test" options={["opt1", "opt2"]} value={"opt1"} onSelect={handleSelect} />);
  expect(screen.getByText("test")).toBeInTheDocument();
  fireEvent.click(screen.getByText("test"));
  const options = screen.getAllByTestId("selectOption").map((div) => div.textContent);
  expect(options).toMatchInlineSnapshot(`
    Array [
      "All",
      "opt1",
      "opt2",
    ]
  `);
});

test("onSelect handler is being called", () => {
  const handleSelect = jest.fn();
  render(<Select label="test" options={["opt1", "opt2"]} value={"opt1"} onSelect={handleSelect} />);
  expect(screen.getByText("test")).toBeInTheDocument();
  fireEvent.click(screen.getByText("test"));
  fireEvent.click(screen.getByText("opt1"));
  expect(handleSelect).toBeCalledTimes(1);
});
