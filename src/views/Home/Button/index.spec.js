import React from "react";
import MockRouter from "react-mock-router";
import Button from "./index";
import renderer from "react-test-renderer";

test("Button matches the snapshot", () => {
  const component = renderer.create(
    <Button onClick={() => {}}>Button Text!</Button>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("Button component becomes an anchor when provided with the `to` props", () => {
  const link = renderer.create(
    <MockRouter>
      <Button to={"/bla"}>Button Text!</Button>
    </MockRouter>
  );
  let tree = link.toJSON();

  expect(tree.type).toBe("a");

  const button = renderer.create(
    <Button onClick={() => {}}>Button Text!</Button>
  );
  tree = button.toJSON();

  expect(tree.type).toBe("button");
});
