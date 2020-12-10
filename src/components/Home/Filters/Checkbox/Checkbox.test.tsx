import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";

test("renders uncheckedIcon icon when value is false", () => {
  const handleCheck = jest.fn();
  render(<Checkbox label="test" isChecked={false} handleCheck={handleCheck} />);
  expect(screen.getByText("test")).toBeInTheDocument();
  expect(screen.getByTestId("uncheckedIcon")).toBeInTheDocument();
});

test("renders checkedIcon icon when value is true", () => {
  const handleCheck = jest.fn();
  render(<Checkbox label="test" isChecked={true} handleCheck={handleCheck} />);
  expect(screen.getByText("test")).toBeInTheDocument();
  expect(screen.getByTestId("checkedIcon")).toBeInTheDocument();
});

test("handleCheck is being called", () => {
  const handleCheck = jest.fn();
  render(<Checkbox label="test" isChecked={false} handleCheck={handleCheck} />);
  const checkbox = screen.getByText(/test/i);
  expect(checkbox).toBeInTheDocument();
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);
  expect(handleCheck).toBeCalledTimes(2);
});
